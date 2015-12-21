package com.airQ.service.impl;

import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.airQ.TOs.BlogImageTO;
import com.airQ.configuration.ApplicationConfiguration;
import com.airQ.model.BlogImageDO;
import com.airQ.repository.BlogImageRepository;
import com.airQ.service.api.BlogImageService;

@Service
public class BlogImageServiceImpl implements BlogImageService {
	private static final Logger LOGGER = LoggerFactory.getLogger(BlogImageServiceImpl.class);

	
	@Autowired
	private BlogImageRepository repository;

	@Override
	public BlogImageTO getPicture(Integer blogId) {
		BlogImageTO imageTO = new BlogImageTO();
		BlogImageDO imageDO = repository.findByBlogId(blogId);
		if (imageDO != null) {
			imageTO.setBlogPicture(imageDO.getBlogPicture());
			imageTO.setBlogId(imageDO.getBlogId());
		}
		
		return imageTO;
	}

	@Override
	public BlogImageTO getThumbnail(Integer blogId) {
		BlogImageTO imageTO = new BlogImageTO();
		BlogImageDO imageDO = repository.findByBlogId(blogId);
		if (imageDO != null) {
			imageTO.setThumbnail(imageDO.getThumbnail());
			imageTO.setBlogId(imageDO.getBlogId());
		}
		
		return imageTO;
	}

	@Override
	public void deleteBlogImages(Integer blogId) {
		repository.delete(blogId);
	}

	@Override
	public BlogImageTO createBlogImages(Integer id, MultipartFile file) throws IOException {
		LOGGER.info("Saving blog iamge for employee with id " + id);

		String fileContentType = file.getContentType();
		String fileType = fileContentType.split("/")[0];
		String imageType = "image";
		
		if (imageType.equals(fileType)) {

			BlogImageDO blogImage = repository.findByBlogId(id);
			if (blogImage == null) {
				blogImage = new BlogImageDO();
				blogImage.setBlogId(id);
			}

			BufferedImage originalImage = ImageIO.read(file.getInputStream());
			int type = originalImage.getType() == 0 ? BufferedImage.TYPE_INT_ARGB : originalImage.getType();
			ByteArrayOutputStream baosPicture = resizeImage(originalImage, type, ApplicationConfiguration.IMG_HEIGHT);
			ByteArrayOutputStream baosThumbnail = resizeImage(originalImage, type, ApplicationConfiguration.THUMBNAIL_HEIGHT);

			blogImage.setBlogPicture(baosPicture.toByteArray());;
			blogImage.setThumbnail(baosThumbnail.toByteArray());
			baosThumbnail.close();
			baosPicture.close();

			BlogImageDO imageDO = repository.save(blogImage);
			BlogImageTO result = new BlogImageTO();
			result.setBlogPicture(imageDO.getBlogPicture());
			result.setThumbnail(imageDO.getThumbnail());
			result.setBlogId(id);
			return result;
			
		} else {
			throw new IllegalArgumentException("Format not suported");
		}
	}
	
	private ByteArrayOutputStream resizeImage(BufferedImage originalImage, int type, int maxSize) throws IOException {
		int height = originalImage.getHeight();
		int width = originalImage.getWidth();
		double factor = Math.min((double) maxSize / height, (double) maxSize / width);

		int actualWidth = (int) (width * factor);
		int actualHeight = (int) (height * factor);
		int actualX = (maxSize - actualWidth) / 2;
		int actualY = (maxSize - actualHeight) / 2;

		BufferedImage picture = new BufferedImage(maxSize, maxSize, type);
		Graphics2D gPic = picture.createGraphics();
		gPic.drawImage(originalImage, actualX, actualY, actualWidth, actualHeight, null);
		gPic.dispose();

		ByteArrayOutputStream baosPicture = new ByteArrayOutputStream();
		ImageIO.write(picture, "png", baosPicture);
		baosPicture.flush();
		return baosPicture;
	}
}

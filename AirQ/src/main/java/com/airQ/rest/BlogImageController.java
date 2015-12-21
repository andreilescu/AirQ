package com.airQ.rest;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.airQ.TOs.BlogImageTO;
import com.airQ.service.api.BlogImageService;

@RestController
@RequestMapping(value = "blogImages")
public class BlogImageController {

	@Autowired
	private BlogImageService blogImageService;

	@RequestMapping(
					value = "{id}",
					method = RequestMethod.POST
	)
	public BlogImageTO createBlogImages(@PathVariable Integer id, @RequestParam("file") MultipartFile file) {
		BlogImageTO blogImageTO = null;

		try {
			blogImageTO = blogImageService.createBlogImages(id, file);
		} catch (IOException e) {
			e.printStackTrace();
		}

		return blogImageTO;
	}
	
	@RequestMapping(
					value = "/picture/{id}", 
					method = RequestMethod.GET, 
					produces = MediaType.APPLICATION_JSON_VALUE
	)
	public BlogImageTO getBlogPicture(@PathVariable Integer blogId) {
		return blogImageService.getPicture(blogId);
	}
	
	@RequestMapping(
					value = "/thumbnail/{id}", 
					method = RequestMethod.GET, 
					produces = MediaType.APPLICATION_JSON_VALUE
	)
	public BlogImageTO getBlogThumbnail(@PathVariable Integer id) {
		return blogImageService.getThumbnail(id);
	}
	
	
	@RequestMapping(
					value = "{id}", 
					method = RequestMethod.DELETE
	)
	public void deleteBlogImage(@PathVariable Integer blogId) {
		blogImageService.deleteBlogImages(blogId);
	}
}

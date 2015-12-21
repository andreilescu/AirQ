package com.airQ.service.api;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.airQ.TOs.BlogImageTO;

public interface BlogImageService {
	
	BlogImageTO getPicture(Integer blogId);
	
	BlogImageTO getThumbnail(Integer blogId);
	
	void deleteBlogImages(Integer blogId);
	
	BlogImageTO createBlogImages(Integer id, MultipartFile file) throws IOException;

}

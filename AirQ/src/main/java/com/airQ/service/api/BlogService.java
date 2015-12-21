package com.airQ.service.api;

import java.util.List;

import com.airQ.TOs.BlogTO;

public interface BlogService {
	List<BlogTO> getAll();
	
	BlogTO getBlog(Integer id);
	
	BlogTO createBlog(BlogTO blog);
	
	BlogTO updateBlog(BlogTO blog);
	
	void deleteBlog(Integer id);
}

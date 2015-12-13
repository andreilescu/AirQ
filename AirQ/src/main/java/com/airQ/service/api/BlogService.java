package com.airQ.service.api;

import java.util.List;

import com.airQ.TOs.BlogTO;
import com.airQ.model.BlogDO;

public interface BlogService {
	List<BlogTO> getAll();
	
	BlogTO getBlog(Integer id);
	
	BlogTO createBlog(BlogTO blog);
	
	BlogDO updateBlog(BlogDO blog);
}

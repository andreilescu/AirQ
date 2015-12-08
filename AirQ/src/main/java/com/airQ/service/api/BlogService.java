package com.airQ.service.api;

import java.util.List;

import com.airQ.model.BlogDO;

public interface BlogService {
	List<BlogDO> getAll();
	
	BlogDO getBlog(Integer id);
}

package com.airQ.repository;

import org.springframework.data.repository.CrudRepository;

import com.airQ.model.BlogImageDO;

public interface BlogImageRepository extends CrudRepository<BlogImageDO, Integer> {
	
	public BlogImageDO findByBlogId(Integer blogId);
}

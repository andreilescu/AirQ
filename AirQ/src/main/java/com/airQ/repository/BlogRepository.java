package com.airQ.repository;

import org.springframework.data.repository.CrudRepository;

import com.airQ.model.BlogDO;

public interface BlogRepository extends CrudRepository<BlogDO, Integer>{
	BlogDO findBlogByName(String name);
}

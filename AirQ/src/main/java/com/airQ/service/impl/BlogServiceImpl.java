package com.airQ.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airQ.model.BlogDO;
import com.airQ.repository.BlogRepository;
import com.airQ.service.api.BlogService;

@Service
public class BlogServiceImpl implements BlogService{

	@Autowired
	private BlogRepository blogRepository;
	
	@Override
	public List<BlogDO> getAll() {
		return (List<BlogDO>) blogRepository.findAll();
	}

	@Override
	public BlogDO getBlog(Integer id) {
		return blogRepository.findOne(id);
	}

	@Override
	public BlogDO createBlog(BlogDO blog) {
		return blogRepository.save(blog);
	}
}

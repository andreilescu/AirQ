package com.airQ.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airQ.TOs.BlogTO;
import com.airQ.TOs.CustomerTO;
import com.airQ.converter.BlogConverter;
import com.airQ.model.BlogDO;
import com.airQ.repository.BlogRepository;
import com.airQ.service.api.BlogService;
import com.airQ.service.api.CustomerService;

@Service
public class BlogServiceImpl implements BlogService {

	@Autowired
	private BlogRepository blogRepository;

	@Autowired
	private BlogConverter blogConverter;

	@Autowired
	private CustomerService customerService;

	@Override
	public List<BlogTO> getAll() {
		List<BlogDO> blogs = (List<BlogDO>) blogRepository.findAll();

		return blogs
				.parallelStream()
				.map(blog -> blogConverter.convertEntityIntoTO(blog, new BlogTO()))
				.collect(Collectors.toList());
	}

	@Override
	public BlogTO getBlog(Integer id) {
		return Optional.ofNullable(blogRepository.findOne(id))
				.map(blog -> blogConverter.convertEntityIntoTO(blog, new BlogTO()))
				.orElseThrow(() -> new IllegalArgumentException("There's no blog with the ID" + id));
	}

	@Override
	public BlogTO createBlog(BlogTO blogTO) {
		CustomerTO customer = customerService.getCustomer(blogTO.getCustomer().getId());
		blogTO.setCustomer(customer);
		BlogDO savedDO = blogRepository.save(blogConverter.convertTOIntoEntity(blogTO, new BlogDO()));
		return blogConverter.convertEntityIntoTO(savedDO, blogTO);
	}

	@Override
	public BlogDO updateBlog(BlogDO blog) {
		return blogRepository.save(blog);
	}
}

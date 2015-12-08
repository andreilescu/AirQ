package com.airQ.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.airQ.model.BlogDO;
import com.airQ.service.api.BlogService;

@RestController
@RequestMapping(value = "blog")
public class BlogController {

	@Autowired
	private BlogService blogService;

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<BlogDO> getAll() {
		return blogService.getAll();
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public BlogDO getBlog(@PathVariable Integer id) {
		return blogService.getBlog(id);
	}
}


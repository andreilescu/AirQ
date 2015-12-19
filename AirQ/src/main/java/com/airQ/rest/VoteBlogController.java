package com.airQ.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.airQ.model.VoteBlogDO;
import com.airQ.service.api.VoteBlogService;

@RestController
@RequestMapping(value = "blog/voteBlog")
public class VoteBlogController {
	
	@Autowired
	private VoteBlogService voteBlogService;
	
	@RequestMapping(
			method = RequestMethod.POST, 
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE
			)
	public Integer createVoteBlog(@RequestBody VoteBlogDO voteBlog) {
		return voteBlogService.createVoteBlog(voteBlog);
	}
	
//	 add method for getting count of likes
	@RequestMapping(
			value = "{blogId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	public Integer getVoteBlogCounter(@PathVariable Integer blogId) {
		return voteBlogService.getVoteCounter(blogId);
	}
}

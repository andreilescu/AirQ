package com.airQ.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airQ.model.VoteBlogDO;
import com.airQ.repository.BlogRepository;
import com.airQ.repository.VoteBlogRepository;
import com.airQ.service.api.VoteBlogService;

@Service
public class VoteBlogServiceImpl implements VoteBlogService {

	
	@Autowired 
	private BlogRepository blogRepository;
	
	@Autowired
	private VoteBlogRepository voteBlogRepository;
	
//	 This service will contain logic that will
//	 increment/decrement count value for every blog.
	
	
//	 This service will test if user vote for this blog 
//	 then it's not allowed do this vote(increment/decrement count) second time.
	
	
//	Example: Customer for mistake press twice (like blog) buttom,
//	service need to not allow to this kind of scenario.
	
//	TO DO: Need implementation also on front end side, 
//	then user press button(like/unlike blog), button is deactivated
	
	
	@Override
	public Integer createVoteBlog(VoteBlogDO voteBlog) {
		
		//
		voteBlogRepository.save(voteBlog);
		Integer likeVoteBlogCount = voteBlogRepository.getLikeVoteBlogCount(voteBlog.getBlog().getId());
		Integer unlikeVoteBlogCount = voteBlogRepository.getUnlikeVoteBlogCount(voteBlog.getBlog().getId());
		Integer finalVoteBlogCount = likeVoteBlogCount - unlikeVoteBlogCount;
		
		System.out.println("Like Blog Count: " + likeVoteBlogCount);
		System.out.println("Unlike Blog Count: " + unlikeVoteBlogCount);
		System.out.println("Final Blog Count: " + finalVoteBlogCount);
		
		return finalVoteBlogCount;
	}
	
//	private VoteBlogDO updateVoteCounterByBlog(BlogDO blog, Integer customerId) {
////		This service will test if user vote for this blog 
////		then it's not allowed do this vote(increment/decrement count) second time.
////		Example: Customer for mistake press twice (like blog) buttom,
////		service need to not allow to this kind of scenario.
//	
//		return null;
//	}

}

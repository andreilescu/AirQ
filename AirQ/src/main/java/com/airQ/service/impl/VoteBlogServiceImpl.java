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
		Integer blogId = voteBlog.getBlog().getId();
		Integer customerId = voteBlog.getCustomerId();
		boolean voteBlogLike = voteBlog.isLike();
		// call getVoteBlog for customer
		VoteBlogDO voteBlogDb = voteBlogRepository.getVoteBlogForCustomer(blogId, customerId);
		if(voteBlogDb != null) {
			boolean voteBlogLikeDb = voteBlogDb.isLike();
			if(voteBlogLike == voteBlogLikeDb) {
				System.out.println("Nothing is doing here :). The customer has voted the same option for a voteBlog");
			} else {
				System.out.println("Change the voteBlog result, because is different than in database");
				System.out.println("Customer decision: " + voteBlogLike + "\nCustomer decision DB: " + voteBlogLikeDb);
				voteBlogDb.setLike(voteBlogLike);
				//save decision
				voteBlogRepository.save(voteBlogDb);
			}
		} else {
			voteBlogRepository.save(voteBlog);
		}
		
		return this.getVoteCounter(blogId);
	}

	@Override
	public Integer getVoteCounter(Integer blogId) {
		Integer likeVoteBlogCount = voteBlogRepository.getLikeVoteBlogCount(blogId);
		Integer unlikeVoteBlogCount = voteBlogRepository.getUnlikeVoteBlogCount(blogId);
		Integer finalVoteBlogCount = likeVoteBlogCount - unlikeVoteBlogCount;
		System.out.println("Final Vote Counter" + finalVoteBlogCount);
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

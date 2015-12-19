package com.airQ.service.api;

import com.airQ.model.VoteBlogDO;

public interface VoteBlogService {
	
	public Integer createVoteBlog(VoteBlogDO voteBlog);
	
	public Integer getVoteCounter(Integer blogId);
}

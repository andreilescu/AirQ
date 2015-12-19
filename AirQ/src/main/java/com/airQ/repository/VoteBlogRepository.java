package com.airQ.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.airQ.model.VoteBlogDO;

public interface VoteBlogRepository extends CrudRepository<VoteBlogDO, Integer>{
	
	@Query("select count(*) from VoteBlogDO vd where vd.blog.id = ?1 and vd.like = true")
	Integer getLikeVoteBlogCount(Integer blogId);
	
	@Query("select count(*) from VoteBlogDO vd where vd.blog.id = ?1 and vd.like = false")
	Integer getUnlikeVoteBlogCount(Integer blogId);
	
	@Query("select vb from VoteBlogDO vb where vb.blog.id = ?1 and vb.customerId = ?2 ")
	VoteBlogDO getVoteBlogForCustomer(Integer blogId, Integer customerId);
}

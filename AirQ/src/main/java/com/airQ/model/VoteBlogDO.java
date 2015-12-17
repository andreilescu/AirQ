package com.airQ.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "VOTE_BLOG")
public class VoteBlogDO extends BasicEntityDO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "VOTES")
	private boolean like;

	@Column(name = "CUSTOMER_ID")
	private int customerId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(
				name = "BLOG_ID", 
				referencedColumnName = "ID", 
				nullable = false)
	private BlogDO blog;

	public boolean isLike() {
		return like;
	}

	public void setLike(boolean like) {
		this.like = like;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public BlogDO getBlog() {
		return blog;
	}

	public void setBlog(BlogDO blog) {
		this.blog = blog;
	}
}

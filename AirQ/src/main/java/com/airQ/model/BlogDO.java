package com.airQ.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "Blog")
public class BlogDO extends BasicEntityDO {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "NAME")
	private String name;
	
	@Column(name = "DESCRIPTION", length = 5000)
	private String description;
	
	@Column 
	private Integer count;
	
	@ManyToOne(
			fetch = FetchType.EAGER,
			optional = false
			)
	@JoinColumn(
			name = "CUSTOMER_ID", 
			referencedColumnName = "ID", 
			nullable = false)
	@JsonBackReference
	private CustomerDO customer;
	
	@OneToMany(
			fetch = FetchType.LAZY,
			mappedBy = "blog",
			cascade = CascadeType.ALL
			)
	private List<VoteBlogDO> voteBlogs = new ArrayList<>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public CustomerDO getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerDO customer) {
		this.customer = customer;
	}
	
	public List<VoteBlogDO> getVoteBlogs() {
		return voteBlogs;
	}

	public void setVoteBlogs(List<VoteBlogDO> voteBlogs) {
		this.voteBlogs = voteBlogs;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((customer == null) ? 0 : customer.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		BlogDO other = (BlogDO) obj;
		if (customer == null) {
			if (other.customer != null)
				return false;
		} else if (!customer.equals(other.customer))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BlogDO [name=" + name + ", description=" + description + ", customer=" + customer + "]";
	}
}

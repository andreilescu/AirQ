package com.airQ.TOs;

import java.util.Date;

public class BlogTO extends AbstractTO{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int id;
	
	private String name;
	
	private String description;
	
	private String createdBy;
	
	private Date lastModifiedDate;
	
	private Date createdDate;
	
	private CustomerTO customer;
	
	public BlogTO(int id, String name, String description, String createdBy, Date lastModifiedDate, Date createdDate,
			CustomerTO customer) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.createdBy = createdBy;
		this.lastModifiedDate = lastModifiedDate;
		this.createdDate = createdDate;
		this.customer = customer;
	}
	
	public BlogTO() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(Date lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public CustomerTO getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerTO customer) {
		this.customer = customer;
	}
	
	
}

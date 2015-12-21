package com.airQ.TOs;

import javax.persistence.Column;
import javax.persistence.Lob;

public class BlogImageTO extends AbstractTO{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column (name = "BLOG_ID")
	private Integer blogId;
	
	@Lob
	@Column (name = "PICTURE")
	private byte[] blogPicture;
	
	@Lob
	@Column (name = "THUMBNAIL")
	private byte[] thumbnail;

	public Integer getBlogId() {
		return blogId;
	}

	public void setBlogId(Integer blogId) {
		this.blogId = blogId;
	}

	public byte[] getBlogPicture() {
		return blogPicture;
	}

	public void setBlogPicture(byte[] blogPicture) {
		this.blogPicture = blogPicture;
	}

	public byte[] getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(byte[] thumbnail) {
		this.thumbnail = thumbnail;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((blogId == null) ? 0 : blogId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BlogImageTO other = (BlogImageTO) obj;
		if (blogId == null) {
			if (other.blogId != null)
				return false;
		} else if (!blogId.equals(other.blogId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BlogImageTO [blogId=" + blogId + ", blogPicture=" + blogPicture + ", thumbnail=" + thumbnail + "]";
	}
	
}

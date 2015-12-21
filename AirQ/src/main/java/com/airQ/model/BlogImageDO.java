package com.airQ.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "BLOG_IMAGE")
public class BlogImageDO extends BasicEntityDO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "BLOG_ID")
	private Integer blogId;

	@Lob
	@Column(name = "PICTURE")
	private byte[] blogPicture;

	@Lob
	@Column(name = "THUMBNAIL")
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
		int result = super.hashCode();
		result = prime * result + ((blogId == null) ? 0 : blogId.hashCode());
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
		BlogImageDO other = (BlogImageDO) obj;
		if (blogId == null) {
			if (other.blogId != null)
				return false;
		} else if (!blogId.equals(other.blogId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BlogImageDO [blogId=" + blogId + ", blogPicture=" + blogPicture + ", thumbnail=" + thumbnail + "]";
	}
}

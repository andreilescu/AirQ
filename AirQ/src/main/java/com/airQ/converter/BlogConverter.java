package com.airQ.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.airQ.TOs.BlogTO;
import com.airQ.TOs.CustomerTO;
import com.airQ.model.BlogDO;
import com.airQ.model.CustomerDO;

@Component
public class BlogConverter implements Converter<BlogDO, BlogTO> {

	@Autowired
	private CustomerConverter customerConverter;
	
	@Override
	public BlogTO convertEntityIntoTO(BlogDO blogDO, BlogTO blogTO) {
		blogTO.setId(blogDO.getId());
		blogTO.setName(blogDO.getName());
		blogTO.setDescription(blogDO.getDescription());
		blogTO.setCreatedBy(blogDO.getCreatedBy());
		blogTO.setLastModifiedDate(blogDO.getLastModifiedDate());
		blogTO.setCreatedDate(blogDO.getCreatedDate());
		blogTO.setCount(blogDO.getCount());
		blogTO.setCustomer(customerConverter.convertEntityIntoTO(blogDO.getCustomer(), new CustomerTO()));
		
		return blogTO;
	}

	@Override
	public BlogDO convertTOIntoEntity(BlogTO blogTO, BlogDO blogDO) {
		blogDO.setId(blogTO.getId());
		blogDO.setName(blogTO.getName());
		blogDO.setDescription(blogTO.getDescription());
		blogDO.setCreatedBy(blogTO.getCreatedBy());
		blogDO.setLastModifiedDate(blogTO.getLastModifiedDate());
		blogDO.setCreatedDate(blogTO.getCreatedDate());
		blogDO.setCount(blogTO.getCount());
		blogDO.setCustomer(customerConverter.convertTOIntoEntity(blogTO.getCustomer(), new CustomerDO()));
		
		return blogDO;
	}
}


package com.airQ.converter;

import org.springframework.stereotype.Component;

import com.airQ.TOs.CustomerTO;
import com.airQ.model.CustomerDO;

@Component
public class CustomerConverter implements Converter<CustomerDO, CustomerTO> {

	@Override
	public CustomerTO convertEntityIntoTO(CustomerDO customerDO, CustomerTO customerTO) {
		customerTO.setId(customerDO.getId());
		customerTO.setFirstName(customerDO.getFirstName());
		customerTO.setLastName(customerDO.getLastName());
		customerTO.setEmail(customerDO.getEmail());
		
		return customerTO;
	}

	@Override
	public CustomerDO convertTOIntoEntity(CustomerTO customerTO, CustomerDO customerDO) {
		customerDO.setId(customerTO.getId());
		customerDO.setFirstName(customerTO.getFirstName());
		customerDO.setLastName(customerTO.getLastName());
		customerDO.setEmail(customerTO.getEmail());
		
		return customerDO;
	}

}

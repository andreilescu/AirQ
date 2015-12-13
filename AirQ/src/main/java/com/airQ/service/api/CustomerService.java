package com.airQ.service.api;

import java.util.List;

import com.airQ.TOs.CustomerTO;

public interface CustomerService {

	List<CustomerTO> getAll();
	
	CustomerTO getCustomer(Integer id);
}

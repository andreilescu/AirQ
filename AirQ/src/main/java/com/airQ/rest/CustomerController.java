package com.airQ.rest;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.airQ.TOs.CustomerTO;
import com.airQ.service.api.CustomerService;

@RestController
@RequestMapping(value="customer")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<CustomerTO> getAll () {
		return customerService.getAll();
	}
	
	@RequestMapping(
			value = "{customerId}",
			method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public CustomerTO getCustomer(@PathVariable Integer customerId) {
		return customerService.getCustomer(customerId);
	}
}

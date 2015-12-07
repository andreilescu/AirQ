package com.airQ.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airQ.model.CustomerDO;
import com.airQ.repository.CustomerRepository;
import com.airQ.service.api.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public List<CustomerDO> getAll() {
		return (List<CustomerDO>) customerRepository.findAll();
	}

}

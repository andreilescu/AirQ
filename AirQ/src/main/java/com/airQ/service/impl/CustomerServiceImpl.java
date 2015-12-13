package com.airQ.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airQ.TOs.CustomerTO;
import com.airQ.converter.CustomerConverter;
import com.airQ.model.CustomerDO;
import com.airQ.repository.CustomerRepository;
import com.airQ.service.api.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private CustomerConverter customerConverter;

	@Override
	public List<CustomerTO> getAll() {
		List<CustomerDO> customers = (List<CustomerDO>) customerRepository.findAll();
		return customers.parallelStream()
				.map(customer -> customerConverter.convertEntityIntoTO(customer, new CustomerTO()))
				.collect(Collectors.toList());
	}

	@Override
	public CustomerTO getCustomer(Integer id) {
		return Optional.ofNullable(customerRepository.findOne(id))
				.map(customer -> customerConverter.convertEntityIntoTO(customer, new CustomerTO()))
				.orElseThrow(() -> new IllegalArgumentException("There's no blog with the ID" + id));
	}
}

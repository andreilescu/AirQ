package com.airQ.repository;

import org.springframework.data.repository.CrudRepository;

import com.airQ.model.CustomerDO;

public interface CustomerRepository extends CrudRepository<CustomerDO, Integer>{
	
	CustomerDO findCustomerByFirstNameAndLastName(String firstName, String lastName);
}

package com.app.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.POJOS.Status;
import com.app.POJOS.User;
import com.app.POJOS.UserRole;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	// register the employee : save API
	
	// get all users : findAll API
	
	// get all employees which are having status...
	List<User> findByStatusAndUserRole(Status status,UserRole role);
	
	// get employee details on id. : findById API.
	
	// edit employee details on id :get employee details on id API : USER POJO 
	//							   : save API
	
	Optional<User> findByEmail(String email);
	
	// loginIn of employee :
	Optional<User> findByEmailAndPassword(String email, String password);

}

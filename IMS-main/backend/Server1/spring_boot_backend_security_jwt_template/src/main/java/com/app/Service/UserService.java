package com.app.Service;

import java.util.List;

import com.app.DTO.ApiResponse;
import com.app.DTO.LoginDTO;
import com.app.DTO.UserDTO;
import com.app.POJOS.Cart;
import com.app.POJOS.Status;
import com.app.POJOS.User;
import com.app.POJOS.UserRole;

public interface UserService {

	// Add new employee :
	ApiResponse addNewEmployee(User user);
	
	// Get all User :
	List<UserDTO> getAllUsers();
	
	// Get all employee
	List<UserDTO> getAllEmployees(Status status);
	
	// Get employee by Id
	User getEmployeeDetails(Long empId);
	
	// Edit Employee
	// finding the empl :  User getEmployeeDetails(Long empId);
	ApiResponse updateEmplDetails(User user);
	
	// login employee
	User loginUser(LoginDTO credentials);

	List<Cart> getCart(Long empId);
	
	//Authenticate User (LogIn)
		User authenitcateUser(String email);
		

		//get user by ID
		UserDTO findUserById(Long userId);
		
		//find userId By email
		Long findUserId(String userName);
}

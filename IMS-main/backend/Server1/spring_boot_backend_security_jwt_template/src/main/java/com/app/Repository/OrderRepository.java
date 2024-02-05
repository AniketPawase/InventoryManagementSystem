package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.POJOS.Order;
import com.app.POJOS.User;

public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findAllByEmployee(User employee);
}

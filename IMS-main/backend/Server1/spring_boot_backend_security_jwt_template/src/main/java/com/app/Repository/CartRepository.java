package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.POJOS.Cart;
import com.app.POJOS.Product;
import com.app.POJOS.User;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

	List<Cart> findByUser(User user);
	Cart findByUserAndProduct(User user, Product product);
}

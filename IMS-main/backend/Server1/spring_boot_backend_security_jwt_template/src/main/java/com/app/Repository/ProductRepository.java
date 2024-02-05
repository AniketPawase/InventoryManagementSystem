package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.DTO.ProductDTO;
import com.app.POJOS.Product;
import com.app.POJOS.Supplier;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	// Add new product : save API.
	
	//
	List<Product> findAllBySeller(Supplier seller);
}

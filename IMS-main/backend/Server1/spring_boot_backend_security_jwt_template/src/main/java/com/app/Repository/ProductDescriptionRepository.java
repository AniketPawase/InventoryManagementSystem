package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.POJOS.Product;
import com.app.POJOS.ProductDescription;

public interface ProductDescriptionRepository extends JpaRepository<ProductDescription, Long>{

	ProductDescription findByProduct(Product product);
}

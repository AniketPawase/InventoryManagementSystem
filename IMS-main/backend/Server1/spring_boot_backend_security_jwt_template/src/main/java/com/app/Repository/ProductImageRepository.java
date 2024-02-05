package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.POJOS.Image;
import com.app.POJOS.Product;

public interface ProductImageRepository extends JpaRepository<Image, Long> {

	// uploading the image for product(fk) : save API.
	//
	List<Image> findByProducts(Product product);
}

package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.POJOS.Product;
import com.app.POJOS.Remarks;

public interface RemarkRepository extends JpaRepository<Remarks, Long> {

	List<Remarks> findAllByProduct(Product product);
}

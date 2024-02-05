package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.POJOS.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {

}

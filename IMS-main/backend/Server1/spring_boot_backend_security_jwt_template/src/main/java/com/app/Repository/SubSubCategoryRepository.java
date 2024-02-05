package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.POJOS.SubSubCategory;

@Repository
public interface SubSubCategoryRepository extends JpaRepository<SubSubCategory, Long> {

}

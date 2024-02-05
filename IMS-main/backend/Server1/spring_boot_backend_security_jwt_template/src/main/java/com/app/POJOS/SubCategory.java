package com.app.POJOS;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.*;


@NoArgsConstructor

@Getter
@Setter

@ToString
@Entity
@Table(name="sub_categories")
public class SubCategory  extends BaseEntity{
 
	// id
	
	// name
	@Column(name="name",length = 20)
	private String subCatName;
	
//	//
//	@OneToMany
//	@JoinColumn(name="sub_sub_cat")
//	private List<SubSubCategory> subSubCategoryId = new ArrayList<>();;
	@ManyToOne
	@JoinColumn(name="category_id")
	private Category categoryId;
}

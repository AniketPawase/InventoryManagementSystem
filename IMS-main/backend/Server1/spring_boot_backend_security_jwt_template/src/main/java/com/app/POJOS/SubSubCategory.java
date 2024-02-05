package com.app.POJOS;

import javax.persistence.*;

import lombok.*;


@NoArgsConstructor

@Getter
@Setter

@ToString
@Entity
@Table(name="sub_sub_categories")
public class SubSubCategory extends BaseEntity{
	
	// id
	
	// name
	@Column(name="name",length = 20)
	private String subSubCatName;
	
	//
	@ManyToOne
	@JoinColumn(name="sub_category_id")
	private SubCategory categoryId;
	

}

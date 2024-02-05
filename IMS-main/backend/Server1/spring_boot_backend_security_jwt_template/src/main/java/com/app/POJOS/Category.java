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
@Table(name="categories")
public class Category extends BaseEntity{

	// id
	
	// name
	@Column(name="name",length = 20,unique = true)
	private String categoryName;
		
//	//
//	@OneToMany(mappedBy="")
//	@JoinColumn(name="sub_cat")
//	private List<SubCategory> subCategoryId = new ArrayList<>();
//	
}

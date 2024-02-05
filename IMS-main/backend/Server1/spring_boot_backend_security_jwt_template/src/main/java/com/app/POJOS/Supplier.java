package com.app.POJOS;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "suppliers")

@NoArgsConstructor

@Getter
@Setter

@ToString
public class Supplier extends BaseEntity{

	//
	@Column(length = 30,nullable = false)
	private String name;
	
	//
	@Column(length = 30, unique = true, nullable = false) // =>unique and not null
	private String email;
	
	//
	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	private Status status;
	//
	@Column(length = 10,nullable = false)
	private String mobile;	

}

package com.app.POJOS;

import javax.persistence.*;

import lombok.*;

//
@Entity
@Table(name = "supplier_addrs")

@NoArgsConstructor

@Getter
@Setter

@ToString
public class Address extends BaseEntity{
	
	//
	@Column(name = "adr_line1", length = 50)
	private String adrLine1;
	
	//
	@Column(name = "adr_line2", length = 50)
	private String adrLine2;
	
	//
	@Column(length = 20)
	private String city;
	
	//
	@Column(length = 20)
	private String state;
	
	//
	@Column(length = 20)
	private String country;
	
	//
	@Column(length = 20)
	private String zipCode;
		
	@ManyToOne
	@JoinColumn(name="supplier_id")
	private Supplier ownerId;

	
}

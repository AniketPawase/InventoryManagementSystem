package com.app.POJOS;

import java.util.List;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name="images")

@NoArgsConstructor

@Getter
@Setter

@ToString
public class Image extends BaseEntity {

	// id
	
	//
	@ManyToOne
	@JoinColumn(name="product_id")
	private Product products;
	
	//
	@Lob
	private byte[] image;
}

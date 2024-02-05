package com.app.DTO;

import com.app.POJOS.Product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductDescDTO {
	
	//
	private Long id;
	private String desc;
	private Long productId;

}

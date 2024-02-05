package com.app.DTO;

import java.util.List;

import javax.validation.constraints.NotNull;

import com.app.POJOS.ProductStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor

@Getter
@Setter

@ToString
public class ProductDTO {
	private Long id;
	private String productName;
	private double price;
	private int quantity;
//	private Long userId;
	private ProductStatus status;
	private List<Long> prodImageIds;
	@NotNull(message = "seller id cant be null..")
	private Long sellerId;
	@NotNull(message = "category id cant be null..")
	private Long categoryId;
}

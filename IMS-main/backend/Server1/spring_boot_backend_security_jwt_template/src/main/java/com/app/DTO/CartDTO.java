package com.app.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter

public class CartDTO {

	private Long userId;

	private Long productId;

	private int quantity;
}
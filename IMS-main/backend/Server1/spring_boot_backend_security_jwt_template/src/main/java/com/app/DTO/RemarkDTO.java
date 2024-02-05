package com.app.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RemarkDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long userId;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long productId;
	private String remark;
	private int rating;
}

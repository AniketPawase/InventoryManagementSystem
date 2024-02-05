package com.app.DTO;

import com.app.POJOS.Status;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserDTO {
	
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;	
	private Status status;
}

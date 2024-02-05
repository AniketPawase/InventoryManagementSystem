package com.app.POJOS;

//
import javax.persistence.*;

//
import lombok.*;

@Entity 
@Table(name = "users") 

@NoArgsConstructor

@Getter
@Setter

@ToString
@EqualsAndHashCode(callSuper = false, doNotUseGetters = true,of = "email")
public class User extends BaseEntity {

	//
	@Column(length = 30)
	private String firstName;
	
	//
	@Column(length = 30)
	private String lastName;
	
	//
	@Column(length = 30, unique = true,nullable=false) // =>unique and not null
	private String email;
	
	//
	@Column(nullable = false) // =>NOT NULL
	private String password;
	
	//
	@Enumerated(EnumType.STRING) // col : varchar => enum constant name
	@Column(name="user_role",length = 10)
	private UserRole userRole;
	
	//
	@Enumerated(EnumType.STRING) // col : varchar => enum constant name
	@Column(name="status",length = 10)
	private Status status;
	
	//
	@Column(length = 10,nullable=false)
	private String mobile;	
		
}

//package com.app.POJOS;
//
//import java.io.Serializable;
//import java.time.LocalDateTime;
//import java.util.List;
//
//import javax.persistence.*;
//
//import lombok.*;
//
//@Entity
//@Table(name = "invoices") 
//@NoArgsConstructor
//@Getter
//@Setter
//public class Invoice extends BaseEntity implements Serializable{
//
//	// 
////	@Id
////	@GeneratedValue(strategy = GenerationType.IDENTITY)
////	@Column(name = "invoice_id")
////	private int invoiceId;
//	
//	// 
//	@Id
//	@ManyToOne
//	@JoinColumn(name = "prod_id")
//	private Product product;
//	
//	//
//	@ManyToOne
//	@JoinColumn(name = "user_id")
//	private User userId;
//	
//	//
//	@Column
//	private int quantity;
//	
//	//
//	@Column(name = "timestamp")
//	private LocalDateTime timestamp;
//	
//	
//	
//}

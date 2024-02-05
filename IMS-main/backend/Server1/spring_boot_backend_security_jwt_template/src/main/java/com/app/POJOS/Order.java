package com.app.POJOS;
import java.io.Serializable;
import java.time.LocalDate;

//package com.app.POJOS;
//
//import java.time.LocalDate;
//
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

//
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//
//@Entity
//@Table(name="purchases")
//
//@NoArgsConstructor
//
//@Getter
//@Setter
//
//@ToString
//public class Purchase extends BaseEntity {
//
//	// id
//	
//	//
//	@ManyToOne
//	@JoinColumn(name = "user_id")
//	private User userId;
//	
//	//
//	@Column(name="order_date")
//	private LocalDate orderDate;
//	
//	//
//	@Column(name="delivery_date")
//	private LocalDate deliveryDate;
//}
@Entity
@Table(name = "orders") 
@NoArgsConstructor
@Getter
@Setter
public class Order extends BaseEntity {
  
  @ManyToOne
  @JoinColumn(name = "employee_id")
  private User employee;
  
  @Column(name = "order_date")
  private LocalDate orderDate;
  
  @Column(name = "delivery_date")
  private LocalDate deliveryDate;
  
  @Column
  private int total;
}
package com.app.POJOS;
//
import java.io.Serializable;
//
import javax.persistence.*;
//
import lombok.*;
//
//@Entity
//@Table(name="purchase_details")
//
//@NoArgsConstructor
//
//@Getter
//@Setter
//
//@ToString
//public class PurchaseDetails implements Serializable{
//	
//	// Composite Primary key
//  
//	  @Id
//	  @ManyToOne
//	  @JoinColumn(name = "purchase_id")
//	  private Purchase purchase;
//	  
//	  @Id
//	  @OneToOne
//	  @JoinColumn(name = "product_id")
//	  private Product product;
//	  
//	  @Column
//	  private int quantity;
//	}
//
//
@Entity
@Table(name = "order_details") 
@NoArgsConstructor
@Getter
@Setter
public class OrderDetail extends BaseEntity{
  
  @ManyToOne
  @JoinColumn(name = "order_id")
  private Order order;
  
  @ManyToOne
  @JoinColumn(name = "product_id")
  private Product product;
  
  @Column
  private int quantity;
}

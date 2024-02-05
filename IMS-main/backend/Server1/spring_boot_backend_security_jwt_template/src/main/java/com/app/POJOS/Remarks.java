package com.app.POJOS;

import java.io.Serializable;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "remarks") 
@NoArgsConstructor
@Getter
@Setter
public class Remarks extends BaseEntity{
  
  @ManyToOne
  @JoinColumn(name = "empl_id")
  private User emplId;
  
  @ManyToOne
  @JoinColumn(name = "product_id")
  private Product product;
  
  @Column(length = 150)
  private String remark;
  
  @Column
  private int rating;
}
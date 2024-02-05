package com.app.Service;

import java.util.List;

import com.app.DTO.ApiResponse;
import com.app.POJOS.Order;
import com.app.POJOS.OrderDetail;

public interface OrderService {

	//
	ApiResponse confirmPayment(Long userId);

	List<Order> getOrders(Long userId);

	List<OrderDetail> getAllOrderDetails(Long orderId);
}

package com.app.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.DTO.ApiResponse;
import com.app.DTO.CartDTO;
import com.app.DTO.ProductDTO;
import com.app.DTO.ProductDescDTO;
import com.app.DTO.RemarkDTO;
import com.app.POJOS.ProductDescription;

public interface ProductService {

	// add product
	ApiResponse addNewProduct(ProductDTO newProd);

	//
	ProductDTO getProductById(Long id);
	
	//
	ApiResponse deleteProductById(Long id);
	
	//
	ApiResponse addImagesForProduct(Long productId, MultipartFile image) throws IOException;
	
	//
	public byte[] downloadImage(Long productImageId) throws IOException;
	
	//
	public ApiResponse addProductToCart(CartDTO cartDto);
	
	//
	public ApiResponse increaseInventory(Long prodId,Long newQuantity);

	//
	ApiResponse rateProduct(RemarkDTO remark);
	
	//
	List<RemarkDTO> getAllRemarks(Long productId);
	
	//
	ApiResponse describeProduct(ProductDescDTO description);
	ProductDescription getDescription(Long prodId);

	//
	List<ProductDTO> getProductsBySellerId(Long sellerId);
	
	//
	List<ProductDTO> getAllProduct();

	//
	ApiResponse removeProductFromCart(Long cartId);
	
}

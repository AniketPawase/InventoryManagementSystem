
package com.app.Controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.DTO.ApiResponse;
import com.app.DTO.CartDTO;
import com.app.DTO.ProductDTO;
import com.app.DTO.ProductDescDTO;
import com.app.DTO.RemarkDTO;
import com.app.POJOS.Product;
import com.app.POJOS.ProductDescription;
import com.app.Service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class ProductController {

	//
	@Autowired
	private ProductService prodService;

	//

	// add new product :
	@PostMapping("/addProduct")
	public ApiResponse addNewProduct(@RequestBody @Valid ProductDTO prodDto) {

		//
		System.out.println("inside addNewProduct ProductController");

		//
		return prodService.addNewProduct(prodDto);
	}

	// finding the product using the id.
	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@PathVariable Long id) {

		//
		System.out.println("inside getProductById ProductController");

		//
		return ResponseEntity.status(HttpStatus.OK).body(prodService.getProductById(id));
	}

	// updating the product info :
	@PutMapping("/editProduct")
	public ResponseEntity<?> editProduct(@RequestBody @Valid ProductDTO productDto) {

		//
		System.out.println("inside editProduct ProductController");

		//
		return ResponseEntity.status(HttpStatus.OK).body(prodService.addNewProduct(productDto));
	}

	// deleting the product
	@GetMapping("/delete/{productId}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long productId) {

		//
		System.out.println("inside deleteProduct ProductController");

		//
		return ResponseEntity.status(HttpStatus.OK).body(prodService.deleteProductById(productId));
	}

	//
	@PostMapping(value = "/images/{productId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long productId, @RequestParam MultipartFile imageFile)
			throws IOException {

		//
		System.out.println("in upload img ProductController");

		//
		return ResponseEntity.status(HttpStatus.CREATED).body(prodService.addImagesForProduct(productId, imageFile));
	}

	//
	@GetMapping(value = "/images/{imageId}", produces = { IMAGE_GIF_VALUE, IMAGE_JPEG_VALUE, IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadImage(@PathVariable Long imageId) throws IOException {

		System.out.println("in download img ");
		return ResponseEntity.ok(prodService.downloadImage(imageId));
	}

	//
	@PostMapping("/cart")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartDto) {
		return ResponseEntity.status(HttpStatus.OK).body(prodService.addProductToCart(cartDto));
	}

	@GetMapping("/increInventory/{prodId}/{newQuantity}")
	public ResponseEntity<?> increaseStock(@RequestParam Long prodId,@RequestParam Long newQuantity){
		return ResponseEntity.status(HttpStatus.OK).body(prodService.increaseInventory(prodId, newQuantity));
	}
	
	@PostMapping("/addRemark")
	public ResponseEntity<?> remarkproduct(@RequestBody RemarkDTO remark){
		//
		return ResponseEntity.status(HttpStatus.OK).body(prodService.rateProduct(remark));
	}
	
	@GetMapping("getAllRemarks/{prodId}")
	public List<RemarkDTO> getAllRemarks(@RequestParam Long prodId){
		return prodService.getAllRemarks(prodId);
	}
	
	@PostMapping("/description")
	public ResponseEntity<?> describeProduct(@RequestBody ProductDescDTO prodDesc){
		return ResponseEntity.status(HttpStatus.OK).body(prodService.describeProduct(prodDesc));
	}
	@GetMapping("/allProducts/{id}")
	  public ResponseEntity<?> getAllProductsBySellerId(@PathVariable Long id) {
		System.out.println("in controller "+ id);
	    return ResponseEntity.status(HttpStatus.OK).body(prodService.getProductsBySellerId(id));
	  }
	@GetMapping("/allProducts")
	public ResponseEntity<?> getAllProducts(){
		System.out.println("in controller ");
		return ResponseEntity.status(HttpStatus.OK).body(prodService.getAllProduct());
	}
	@DeleteMapping("/remCart/{cartId}")
	public ResponseEntity<?> removeProductFromCart(@PathVariable Long cartId){
		System.out.println("jhcxvksv");
		return ResponseEntity.status(HttpStatus.OK).body(prodService.removeProductFromCart(cartId));
	}
	@GetMapping("/description/{prodId}")
	public ProductDescription getProdDescription(@PathVariable Long prodId) {
		return prodService.getDescription(prodId);
	}
	
}
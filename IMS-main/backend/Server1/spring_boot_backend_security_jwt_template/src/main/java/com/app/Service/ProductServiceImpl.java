package com.app.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.DTO.ApiResponse;
import com.app.DTO.CartDTO;
import com.app.DTO.ProductDTO;
import com.app.DTO.ProductDescDTO;
import com.app.DTO.RemarkDTO;
import com.app.POJOS.Cart;
import com.app.POJOS.Image;
import com.app.POJOS.Product;
import com.app.POJOS.ProductDescription;
import com.app.POJOS.ProductStatus;
import com.app.POJOS.Remarks;
import com.app.POJOS.SubSubCategory;
import com.app.POJOS.Supplier;
import com.app.POJOS.User;
import com.app.Repository.CartRepository;
import com.app.Repository.ProductDescriptionRepository;
import com.app.Repository.ProductImageRepository;
import com.app.Repository.ProductRepository;
import com.app.Repository.RemarkRepository;
import com.app.Repository.SubSubCategoryRepository;
import com.app.Repository.SupplierRepository;
import com.app.Repository.UserRepository;
import com.app.customException.ResourceNotFoundException;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	//
	@Autowired
	private ProductRepository prodRepos;
	@Autowired
	private SupplierRepository supplierRepos;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private SubSubCategoryRepository categoryRepos;
	@Autowired
	private ProductImageRepository prodImageRepos;
	@Autowired
	private UserRepository userRepos;
	@Autowired
	private CartRepository cartRepos;
	@Autowired
	private RemarkRepository remarkRepos;
	@Autowired
	private ProductDescriptionRepository prodDescRepos;
	
	
	// add product
	@Override
	public ApiResponse addNewProduct(ProductDTO prodDto) {

		//
		System.out.println("inside addNewProduct ProductServiceImpl");

		//
		Supplier supplier = supplierRepos.findById(prodDto.getSellerId()).orElseThrow();
		SubSubCategory category = categoryRepos.findById(prodDto.getCategoryId()).orElseThrow();

		//
		Product product = mapper.map(prodDto, Product.class);
		product.setSeller(supplier);
		product.setCategory(category);
		product.setStatus(ProductStatus.ADDED);

		//
		Product p = prodRepos.save(product);

		//
		return new ApiResponse(p.getId().toString());
	}

	// Get the product by using id.
	@Override
	public ProductDTO getProductById(Long id) {
		
		//
		System.out.println("inside getProductById ProductServiceImpl");
		
		//
		Product product = prodRepos.findById(id).orElseThrow();
		List<Image> productImages = prodImageRepos.findByProducts(product);
		
		ProductDTO productDto = mapper.map(product, ProductDTO.class);
		productDto.setCategoryId(product.getCategory().getId());
		productDto.setSellerId(product.getSeller().getId());
		List<Long> list = new ArrayList<>();
		for(Image pi : productImages) {
		      list.add(pi.getId());
		 }
		productDto.setProdImageIds(list);
		return productDto;
	}

	// deleting the product
	@Override
	public ApiResponse deleteProductById(Long id) {
		
		//
		Product product = prodRepos.findById(id).orElseThrow();
		
		//
		product.setStatus(ProductStatus.REMOVED);
		
		//
		return new ApiResponse("Product deleted successfully...");
	}

	// uploading the image for the product
	@Override
	public ApiResponse addImagesForProduct(Long productId, MultipartFile image) throws IOException {
		
		//
		Image prodImage = new Image();
		Product product = prodRepos.findById(productId).orElseThrow();
		
		//
		prodImage.setImage(image.getBytes());
		prodImage.setProducts(product);
		
		//
		prodImageRepos.save(prodImage);
		
		//
		return new ApiResponse("image for product-id "+prodImage.getProducts().getId()+" is added successfully..");
	}

	@Override
	public byte[] downloadImage(Long productImageId) throws IOException {
		
			// 
			Image image = prodImageRepos.findById(productImageId).orElseThrow();
		   
		    //
		    return image.getImage();  
	}
	
	@Override
	  public ApiResponse addProductToCart(CartDTO cartDto) {
	    
	    User user = userRepos.findById(cartDto.getUserId()).orElseThrow();
	    Product product = prodRepos.findById(cartDto.getProductId()).orElseThrow();
	    
	    Cart tempCart = cartRepos.findByUserAndProduct(user, product);
	    
	    if(tempCart == null) {
	    	Cart cart = new Cart();
	    	cart.setProduct(product);
		    cart.setUser(user);
		    cart.setQuantity(cartDto.getQuantity());
		    cartRepos.save(cart);
		    return new ApiResponse("Product added to cart");
	    }
	   if(cartDto.getQuantity() == 1)
	   tempCart.setQuantity(tempCart.getQuantity() + 1);
	   else tempCart.setQuantity(tempCart.getQuantity() - 1);
	    System.out.println(tempCart.getQuantity());
	    return new ApiResponse("Product quantity changed to cart");
	  }

	//
	@Override
	public ApiResponse increaseInventory(Long prodId, Long newQuantity) {
		
		//
		Product product = prodRepos.findById(prodId).orElseThrow();
		
		//
		product.setQuantity(newQuantity);

		//
		return new ApiResponse("quantity of product is increased..");
	}

	//
	@Override
	public ApiResponse rateProduct(RemarkDTO remark) {
		
		//
		User employee = userRepos.findById(remark.getUserId()).orElseThrow();
		
		//
		Product product = prodRepos.findById(remark.getProductId()).orElseThrow();
		
		//
		Remarks temp = new Remarks();
		
		temp.setEmplId(employee);
		temp.setProduct(product);
		temp.setRating(remark.getRating());
		temp.setRemark(remark.getRemark());
		
		//
		remarkRepos.save(temp);
		
		//
		return new ApiResponse("remark is added..");
	}

	@Override
	public List<RemarkDTO> getAllRemarks(Long productId) {
		// 
		Product product = prodRepos.findById(productId).orElseThrow();
		
		//
	    List<Remarks> reviews = remarkRepos.findAllByProduct(product);
	    
	    //
	    return reviews.stream()
	        .map(review -> mapper.map(review, RemarkDTO.class))
	        .collect(Collectors.toList());
	}

	@Override
	public ApiResponse describeProduct(ProductDescDTO description) {
		
		System.out.println(description);
		//
		Product product = prodRepos.findById(description.getProductId()).orElseThrow(()->new ResourceNotFoundException("invalid product Id"));
		
		ProductDescription pd = mapper.map(description, ProductDescription.class);
		pd.setProduct(product);
		//
		prodDescRepos.save(pd);
		//
		return new ApiResponse("product description is added..");
	}
	
//	@Override
//	  public List<ProductDTO> getProductsBySellerId(Long sellerId) {
//		
//
//		Supplier seller = supplierRepos.findById(sellerId).orElseThrow(() -> new ResourceNotFoundException("Invalid Id"));
//	    List<Product> products = prodRepos.findAllBySeller(seller);
//	    return products.stream()
//	        .map(product -> {
//	          ProductDTO productDto = mapper.map(product, ProductDTO.class);
//	          productDto.setSellerId(sellerId);
//	          productDto.setCategoryId(product.getCategory().getId());
//	          System.out.println(productDto);
//	          return productDto;
//	        })
//	        .collect(Collectors.toList());
//	  }
	@Override
	  public List<ProductDTO> getProductsBySellerId(Long sellerId) {
		Supplier seller = supplierRepos.findById(sellerId).orElseThrow(() -> new ResourceNotFoundException("Invalid Id"));
	    List<Product> products = prodRepos.findAllBySeller(seller);
	    
	    return products.stream()
	        .map(product -> {
	          ProductDTO productDto = mapper.map(product, ProductDTO.class);
	          
	          //
	          List<Image> productImages = prodImageRepos.findByProducts(product);
	          List<Long> list = new ArrayList<>();

	          for (Image pi : productImages) {
	            list.add(pi.getId());
	          }
	          
	          productDto.setProdImageIds(list);
	          
	          //
	          productDto.setSellerId(sellerId);
	          productDto.setCategoryId(product.getCategory().getId());
	          
	          return productDto;
	        })
	        .collect(Collectors.toList());
	  }

	@Override
	public List<ProductDTO> getAllProduct() {
		
		List<Product> allProduct = prodRepos.findAll();
		return allProduct.stream()
				.map(product -> {
			          ProductDTO productDto = mapper.map(product, ProductDTO.class);
			          List<Image> productImages = prodImageRepos.findByProducts(product);
			          List<Long> list = new ArrayList<>();

			          for (Image pi : productImages) {
			            list.add(pi.getId());
			          }
			          
			          productDto.setProdImageIds(list);
			          productDto.setSellerId(product.getSeller().getId());
			          productDto.setCategoryId(product.getCategory().getId());
			          return productDto;
			        })
			        .collect(Collectors.toList());
	}

	@Override
	public ApiResponse removeProductFromCart(Long cartId) {
		
		cartRepos.deleteById(cartId);
		return new ApiResponse("product has been deleted from cart");
	}

	@Override
	public ProductDescription getDescription(Long prodId) {

		//
		Product product = prodRepos.findById(prodId).orElseThrow(()->new ResourceNotFoundException("invalid id") );
		
		//
		return prodDescRepos.findByProduct(product);
	}
}

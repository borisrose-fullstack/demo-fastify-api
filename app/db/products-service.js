import { Product } from "../models/Product.js";
import { Seller } from "../models/Seller.js";

export class ProductsService {
  static fetchProducts() {
    const products = [
      new Product(
        "Woman musing on stars",
        "https://cdn.pixabay.com/photo/2024/01/23/17/45/woman-8527930_1280.jpg",
        2000,

        new Seller("bianca@vandijk.com", "Bianca", "VanDijk", "seller"),

        "Woman looking at the stars, wishing to be one"
      ),
      new Product(
        "Black Woman with beautiful ways",
        "https://cdn.pixabay.com/photo/2024/01/19/21/22/woman-8519926_960_720.jpg",
        3000,
        new Seller("bianca@vandijk.com", "Bianca", "VanDijk", "seller"),

        "Black Woman with such a beautiful face"
      ),
      new Product(
        "The Bicycle I never saw",
        "https://cdn.pixabay.com/photo/2024/01/10/20/43/bicycle-8500329_1280.jpg",
        3000,
        new Seller("bianca@vandijk.com", "Bianca", "VanDijk", "seller"),
        "The Bicycle I want to ride"
      ),
    ];

    return products;
  }
}

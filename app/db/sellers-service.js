import { Seller } from "../models/Seller.js";
import { ProductsService } from "./products-service.js"

export class SellersService {
  static fetchSellers() {
    const sellers = [
      new Seller(
        "bianca@vandijk.com",
        "Bianca",
        "VanDijk",
        "seller",
        ProductsService.fetchProducts().filter(
          (product) => product.owner.email == "bianca@vandijk.com"
        )
      ),
    ];

    return sellers;
  }
}

;

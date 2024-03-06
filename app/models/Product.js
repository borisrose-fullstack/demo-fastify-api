import { Seller } from "./Seller.js"

export class Product {

    constructor(name, url, price, owner, description){
        this.name = name
        this.url = url 
        this.price = price
        const { email, lastname, firstname, role  } = owner
        this.owner = new Seller(email, lastname, firstname, role);

    }
}
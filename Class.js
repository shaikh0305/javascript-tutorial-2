/* Declaring a Class */
class Product {
    constructor(itemName, price, discount , ProductCode){
        this.itemName =itemName;
        this.price = price;
        this.discount = discount;
        this.ProductCode = ProductCode;
    }
}

let pen = new Product('pen', 15 , 4, 'P14');


const Product1 = class Product {
    constructor(itemName, price, discount , ProductCode){
        this.itemName =itemName;
        this.price = price;
        this.discount = discount;
        this.ProductCode = ProductCode;
    }
}    

let phone = new Product1('Rog 6', 19000 , 20 , 'R12');
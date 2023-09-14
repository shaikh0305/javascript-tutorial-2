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

    /* Getter and Setter */

    get getDiscountValue(){
        return this.discount;
    }
    set setDiscountValue(Value){
        this.discount = Value; 
    }

    discountvalue(){
        return this.discount*this.price/100
    }

}    

let phone = new Product1('Rog 6', 19000 , 20 , 'R12');


/* Declaring a Class */
class  Product {
    constructor(itemName , price){
        console.log('Pass by Furniture ' + itemName + price);
        this.itemName =itemName;
        
    }
    getItemName(){
        return this.itemName + " is a product";
    }
}

class Furniture extends Product{
    constructor(itemName , price){
        super(itemName, price);
    }

    getItemName(){
        return this.itemName + " is a Furniture "
        
    }
}

// let pen = new Product('pen' , 40);
let Chair = new Furniture('Chair ', 4000  , 20 , '  C20');
 



// const Product1 = class Product {
//     constructor(itemName, price, discount , ProductCode){
//         this.itemName =itemName;
//         this.price = price;
//         this.discount = discount;
//         this.ProductCode = ProductCode;
//     }

//     /* Getter and Setter */

//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(Value){
//         this.discount = Value; 
//     }
    
//     discountvalue(){
//         return this.discount*this.price/100
//     }

// }    

// let phone = new Product1('Rog 6', 19000 , 20 , 'R12');
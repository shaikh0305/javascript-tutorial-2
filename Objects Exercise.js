// Exercise using Objects
// itemName 
// price 
// discount
// itemCode


const product = {
    itemName: 'Books',
    price: 50,
    discount:15,
    itemCode: 'M120'
}

function createProducts(name, price ,discount, itemCode) {
    return {
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
    
}

const football = createProducts('football',500,20,'F25');

function Product(name, price ,discount, itemCode){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;
    this.discountValue = function(){
        return price * discount/100;
    }
}

const mobile = new Product('Redmi 8', 15000, 10, 'R140')


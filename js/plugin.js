//1
const rectangle ={
    width: 20,
    height: 30,
    getSquare: function(){
        return this.width * this.height;
    },
};
console.log(rectangle.getSquare());
//2
const price = {
    price: 10,
    discount: '15%',
    getPrice: function(){
        return this.price;
    },
    getPriceWithDiscount: function(){
        return this.price - this.price * parseFloat(this.discount)/100;
    }
}
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());
//3
const user = {
    name: 'Abraham'
}
getUserName = function(){
    return this.name;
}
user.getName = getUserName;
console.log(user.getName());
//4
const obj = {
    height: 10,
    increaseHeight: function(){
        return ++this.height;
    }
}
console.log(obj.height);
console.log(obj.increaseHeight());
console.log(obj.height);
//5
const numerator = {
    value: 1,
    double: function(){
        this.value *= 2;
        return this;
    },
    plusOne: function(){
        ++this.value;
        return this;
    },
    minusOne: function(){
        --this.value;
        return this;
    }
}
console.log((numerator.double().plusOne().plusOne().minusOne()).value);
//6
const userA = {
    name: 'Abraham'
},
otherUser = {
    name: 'John',
    getName: function(){
        return this.name;
    }
}
userA.getName; // undefined т.к. в объекте user метод getName не определен;
userA.getName = otherUser.getName; // объект user заимствует метод getName у объекта otherUser;
userA.getName(); // "Abraham"  выводится возвращаемое значение метода getName объекта user;
otherUser.getName(); // "John" метод getName объекта otherUser.

//1
function getList(){
    return this.list;
}
let users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
}
console.log(getList()); // undefined функция вызывается глобально
users.getList = getList;
console.log(users.getList()); // ['Abraham', 'James', 'John', 'Steven'] создается и вызывается метод getList() для объекта users
console.log(getList.call(users)); // ['Abraham', 'James', 'John', 'Steven'] функция getList вызывается для объекта users

//2
const products = {
    price: 50,
    amount: 200,
    totalPrice: function(){
        return this.price * this.amount;
    }
}

//3
const details = {
    price: 30,
    amount: 15,
}
details.totalPrice = products.totalPrice;
console.log(details.totalPrice());

//4
let sizes = {width: 5, height: 10},
getSquare = function(){return this.width * this.height};
console.log(getSquare.call(sizes));

//5
let numbers = [4, 12, 0, 10, -2, 4];
console.log(Math.min.apply(Math, numbers));

//6
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function(){
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
    }
};
console.log(element.getFullHeight());
const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
}
block.getFullHeight = element.getFullHeight;
console.log(block.getFullHeight());

//7
let elementNew = {
    height: 25,
    getHeight: function(){
        return this.height;
    }
}
let getElementHeight = elementNew.getHeight.bind(elementNew);
console.log(getElementHeight());

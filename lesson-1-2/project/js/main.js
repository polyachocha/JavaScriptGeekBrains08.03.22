class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.sumOfProducts();//метод, определяющий стоимость всех товаров
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: 'notebook.jpeg'},
            {id: 2, title: 'Mouse', price: 20, img: 'mouse.png'},
            {id: 3, title: 'Keyboard', price: 200, img: 'keyboard.jpeg'},
            {id: 4, title: 'Gamepad', price: 50, img: 'gamepad.jpeg'},
        ];
    }
    
   
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }

    sumOfProducts(){
        let totalSum = 0;
        for (let priceOfGoods of this.goods){
            totalSum += priceOfGoods.price;
        }
        console.log(totalSum);
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render(){
           return `<div class="product-item">
                <img class="img-product" src="./img/${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket{
    constructor(containerOfBasket='.btn-cart'){
        this.containerOfBasket = containerOfBasket;
        this.goodsInBasket = [];
        this.fillGoods();//Заполняет массив товарами, которые будут добавлены в корзину
        this.renderProductInBasket();//Отрисовывает продукт в корзине
        this.totalCountOfBusket();//Считает количество товаров в корзине
        this.totalSumInBasket();//Считает сумму товаров в корзине
    }
}

class ProductInBasket{
    constructor(product){
        this.id = id;
        this.title = title;
        this.price = price;
        this.countOfProducts();//Считает количество одного товара, добавленного в корзину
        this.totalSumOfProduct();//Считает сумму одного товара, добавленного в корзину
        this.renderProduct();//Верстка для вставки в разметку страницы одного товара
    }
}

let list = new ProductList();



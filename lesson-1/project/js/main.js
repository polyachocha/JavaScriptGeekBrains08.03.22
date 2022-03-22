const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'notebook.jpeg'},
    {id: 2, title: 'Mouse', price: 20, img: 'mouse.png'},
    {id: 3, title: 'Keyboard', price: 200, img: 'keyboard.jpeg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'gamepad.jpeg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (a) => {
    return `<div class="product-item">
                <img class="img-product" src="./img/${a.img}" alt="${a.img}">
                <h3>${a.title}</h3>
                <p>${a.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);
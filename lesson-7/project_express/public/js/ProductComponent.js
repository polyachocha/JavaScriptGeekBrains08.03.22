Vue.component('products', {
   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: [],
           imgProduct: 'https://placehold.it/200x150'
       }
   },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    item.imgPath = `img/${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
   template: `<div class="products">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="imgProduct"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
});
Vue.component('product', {
    props: ['product'],
    template: `
            <ul class="products__list">
                <li class="products__item">
                    <img class="products__item-img" :src="product.img" alt="product_1">
                    <div class="overlay"></div>
                    <h3 class="products__item-title">{{product.product_name}}</h3>
                    <p class="products__item-text">{{product.product_desc}}</p>
                    <p class="products__item-price">{{product.price}}</p>
                    <button class="products__item-btn" type="button"><img src="./img/basket.svg" alt="basket" width="26" height="24"> Add to Cart</button>
                </li>
            </ul>
    `
})
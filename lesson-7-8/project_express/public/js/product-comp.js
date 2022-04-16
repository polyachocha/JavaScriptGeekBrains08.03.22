Vue.component('ProductComp', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: []
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
         this.$parent.getJson(`/api/products`)
             .then(data => {
                 for (let el of data){
                     this.products.push(el);
                     this.filtered.push(el);
                 }
             });
     },
     
    template: `
            <section class="products container">
                <h2 class="products__title">Fetured Items</h2>
                <p class="products__subtitle">Shop for items based on what we featured in this week</p>
                <ul class="products__list">  
                 <product-item-comp v-for="product of filtered" 
                 :key="product.id_product" 
                 :product="product"></product-item-comp>
                 </ul> 
                 <div class="products__btn">
                    <a class="products__btn_link" href="#">Browse All Product</a>
                </div>
            </section>
    
    `
 });
Vue.component('ProductItemComp', {
    props: ['product'],
    template: `
            <li class="products__item">
                <img class="products__item-img" :src="product.img" alt="product_1">
                <div class="overlay"></div>
                <h3 class="products__item-title">{{product.product_name}}</h3>
                <p class="products__item-text">{{product.product_desc}}</p>
                <p class="products__item-price">{{product.price}}</p>
                    <button class="products__item-btn" type="button" @click="$root.$refs.cart.addProduct(product)"><img src="./img/basket.svg" alt="basket" width="26" height="24">Add to Cart</button>
            </li>  
  `
})
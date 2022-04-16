Vue.component('SalesComp', {
    template:`
    <section class="sales container">
        <h2 class="visually-hidden">sales</h2>
        <ul class="sales__list">
            <li class="sales__item sales__item-woman">
                <p class="sales__item-text">30% off</p>
                <h3 class="sales__item-title">for women</h3>
            </li>
            <li class="sales__item sales__item-men">
                <p class="sales__item-text">hot deal</p>
                <h3 class="sales__item-title">for men</h3>
            </li>
            <li class="sales__item sales__item-kids">
                <p class="sales__item-text">new arrivals</p>
                <h3 class="sales__item-title">for kids</h3>
            </li>
            <li class="sales__item sales__item-accesories">
                <p class="sales__item-text">luxirous & trendy</p>
                <h3 class="sales__item-title">accesories</h3>
            </li>
        </ul>
    </section>
    `
});
Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `<img class="header__search-img" src="./img/loupe.svg" alt="loupe">
    <form class="header__search-form container" action="#" method="get" @submit.prevent="$parent.$refs.products.filter(userSearch)">
        <label for="search" class="visually-hidden">search</label>
        <input class="header__search-input" type="text" id="search" v-model="userSearch">
        <button type="submit" class="btn-search">
            <i class="fas fa-search"></i>
        </button>
    </form>`
})
const linkListSection = document.getElementById('menu');
const menu = [
  { nameSection: 'man', link: '#', name1: 'Accessories', name2: 'Bags', name3: 'Denim', name4: 'T-Shirts'},
  { nameSection: 'woman', link: '#', name1: 'Accessories', name2: 'Jackets & Coats', name3: 'Polos', name4: 'T-Shirts'},
  { nameSection: 'kids', link: '#', name1: 'Accessories', name2: 'Bags', name3: 'Denim', name4: 'T-Shirts'}
];
const renderMenu = (nameSection, link, name1, name2, name3, name4) => 
`<ul class="header__nav-list">
    <ul class="header__nav-list">
        <li class="header__nav-item nav-sub-item">
        <a class="nav-sub-item__link" href="#">${nameSection}</a>
            <ul class="nav-sub-item__list">
                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="${link}">${name1}</a></li>
                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="${link}">${name2}</a></li>
                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="${link}">${name3}</a></li>
                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="${link}">${name4}</a></li>
            </ul>
        </li>
    </ul>`;
const renderLinkList = (list) => {
    const linkList = list.map(item => renderMenu(item.nameSection ,item.link, item.name1, item.name2, item.name3, item.name4));
    document.querySelector('.header__nav').innerHTML = linkList.join('');
    }
renderLinkList(menu);

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },


    },
    mounted(){


    }

});
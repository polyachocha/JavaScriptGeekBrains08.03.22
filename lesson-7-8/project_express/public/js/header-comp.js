Vue.component('HeaderComp', {
    data() {
        return {
            showMenu: false,
            showCart: false,
        }
    },
    template: `
    <header class="header">
        <div class="header__wrp container">
            <div class="header__logo-form-wrp">
                <a class="header__logo" href="#">
                    <img src="./img/logo.svg" alt="logo">
                </a>
            <search-comp></search-comp>
        </div>
            <div class="header__menu">
                <button class="header__menu-btn" type="button">
                <svg class="header__menu-btn-svg" width="32" height="23" viewBox="0 0 32 23" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"/>
                </svg>
                </button>
                <nav-comp></nav-comp>
                <a class="header__link" href="#">
                    <svg class="header__link-svg" width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z"/>
                    </svg>
                </a>
                <button class="header__link-cart" @click='showCart = !showCart'>
                        <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.199 29C26.5512 28.9738 25.9396 28.6948 25.4952 28.2227C25.0509 27.7506 24.8094 27.1232 24.8225 26.475C24.8356 25.8269 25.1023 25.2097 25.5653 24.7559C26.0283 24.3022 26.6508 24.048 27.2991 24.048C27.9474 24.048 28.5697 24.3022 29.0327 24.7559C29.4957 25.2097 29.7624 25.8269 29.7755 26.475C29.7886 27.1232 29.5471 27.7506 29.1028 28.2227C28.6585 28.6948 28.0468 28.9738 27.399 29H27.199ZM7.75098 26.32C7.75098 25.79 7.90815 25.2718 8.20264 24.8311C8.49712 24.3904 8.91569 24.0469 9.4054 23.844C9.8951 23.6412 10.434 23.5881 10.9539 23.6915C11.4737 23.7949 11.9512 24.0502 12.326 24.425C12.7009 24.7998 12.9562 25.2773 13.0596 25.7972C13.163 26.317 13.1098 26.8559 12.907 27.3456C12.7041 27.8353 12.3606 28.2539 11.9199 28.5483C11.4792 28.8428 10.9611 29 10.431 29C10.0789 29.0003 9.73017 28.9311 9.40479 28.7966C9.0794 28.662 8.78374 28.4646 8.53467 28.2158C8.28559 27.9669 8.08805 27.6713 7.95325 27.3461C7.81844 27.0208 7.74902 26.6721 7.74902 26.32H7.75098ZM11.551 20.686C11.2916 20.6868 11.039 20.6024 10.8322 20.4457C10.6253 20.2891 10.4756 20.0689 10.406 19.819L5.573 2.36401H2.18005C1.86657 2.36401 1.56591 2.23947 1.34424 2.01781C1.12257 1.79614 0.998047 1.49549 0.998047 1.18201C0.998047 0.868519 1.12257 0.567873 1.34424 0.346205C1.56591 0.124537 1.86657 5.81268e-06 2.18005 5.81268e-06H6.46106C6.72055 -0.00080736 6.97309 0.0837201 7.17981 0.240568C7.38653 0.397416 7.53589 0.617884 7.60498 0.868006L12.438 18.323H25.616L29.999 8.27501H15.399C15.2409 8.27961 15.0834 8.25242 14.9359 8.19507C14.7884 8.13771 14.6539 8.05134 14.5404 7.94108C14.4269 7.83082 14.3366 7.69891 14.275 7.55315C14.2134 7.40739 14.1816 7.25075 14.1816 7.0925C14.1816 6.93426 14.2134 6.77762 14.275 6.63186C14.3366 6.4861 14.4269 6.35419 14.5404 6.24393C14.6539 6.13367 14.7884 6.0473 14.9359 5.98994C15.0834 5.93259 15.2409 5.90541 15.399 5.91001H31.812C32.0077 5.90996 32.2003 5.95866 32.3724 6.05172C32.5446 6.14478 32.6908 6.27926 32.798 6.44301C32.9058 6.60729 32.9714 6.79569 32.9889 6.99145C33.0063 7.18721 32.9752 7.38424 32.8981 7.565L27.493 19.977C27.4007 20.1876 27.249 20.3668 27.0565 20.4927C26.864 20.6186 26.6391 20.6858 26.4091 20.686H11.551Z" fill="#E8E8E8"/>
                        </svg>
                </button> 
            </div>
        </div>
    </header>    
`
});

Vue.component('SearchComp', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `
        <div class="header__search">
            <img class="header__search-img" src="./img/loupe.svg" alt="loupe">
            <form class="header__search-form container" action="#" @submit.prevent="$root.$refs.products.filter(userSearch)">
                <input class="header__search-input" type="text" id="search" v-model="userSearch">
                <button type="submit" class="btn-search">
                </button>
            </form>
        </div>
    `
});

Vue.component('NavComp', {
    template: `
                <nav class="header__nav">
                    <h2 class="header__nav-title">menu</h2>
                    <ul class="header__nav-list">
                        <li class="header__nav-item nav-sub-item">
                            <a class="nav-sub-item__link" href="#">man</a>
                            <ul class="nav-sub-item__list">
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Accessories</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Bags</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Denim</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">T-Shirts</a></li>
                            </ul>
                        </li>
                        <li class="header__nav-item nav-sub-item">
                            <a class="nav-sub-item__link" href="#">woman</a>
                            <ul class="nav-sub-item__list">
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Accessories</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Jackets & Coats</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Polos</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">T-Shirts</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Shirts</a></li>
                            </ul>
                        </li>
                        <li class="header__nav-item nav-sub-item">
                            <a class="nav-sub-item__link" href="#">kids</a>
                            <ul class="nav-sub-item__list">
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Accessories</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Jackets & Coats</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Polos</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">T-Shirts</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Shirts</a></li>
                                <li class="nav-sub-item__item"><a class="nav-sub-item__list-link" href="#">Bags</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
    `
});
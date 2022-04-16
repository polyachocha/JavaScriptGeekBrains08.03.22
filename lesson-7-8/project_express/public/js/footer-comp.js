Vue.component('FooterComp', {
    template:`
    <footer class="footer">
            <section class="footer__bck">
                <div class="footer__quoteform container">
                    <div class="footer__quote-wrp">
                        <img class="footer__quote-img container" src="./img/woman.png" alt="woman">
                        <p class="footer__quote-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
                    </div>
                    <div class="footer__form-wrp">
                        <h3 class="footer__form-title"> <span class="footer__form-subtitle"> subscribe </span>for our newletter and promotion</h3>
                        <form class="footer__form-form container" action="#">
                            <label for="email" class="visually-hidden">email</label>
                            <input class="footer__form-input" type="email" id="email" placeholder="Enter Your Email">
                            <button class="footer__form-btn" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
            <section class="footer__bckcolor">
                <div class="footer__developer container">
                    <p class="footer__developer-text">© 2021 Brand All Rights Reserved.</p>
                    <ul class="footer__developer-list">
                        <li class="footer__developer-item">
                            <a class="footer__developer-link" href="#">
                                <img class="footer__developer-img" src="./img/facebook.jpg" alt="instagram">
                            </a>
                        </li>
                        <li class="footer__developer-item">
                            <a class="footer__developer-link" href="#">
                                <img class="footer__developer-img" src="./img/instagram.jpg" alt="instagram">
                            </a>
                        </li>
                        <li class="footer__developer-item">
                            <a class="footer__developer-link" href="#">
                                <img class="footer__developer-img" src="./img/pinterest.jpg" alt="pinterest">
                            </a>
                        </li>
                        <li class="footer__developer-item">
                            <a class="footer__developer-link" href="#">
                                <img class="footer__developer-img" src="./img/twitter.jpg" alt="twitter">
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
    </footer>
    `
})
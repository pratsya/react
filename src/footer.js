import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Компанія</h4>
            <ul>
              <li>
                <a href="/about">Про нас</a>
              </li>
              <li>
                <a href="/services">наші послуги</a>
              </li>
              <li>
                <a href="/privacy">політика конфіденційності</a>
              </li>
              <li>
                <a href="/loyalty">програма лояльності</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Допопога</h4>
            <ul>
              <li>
                <a href="/faq">Поширені запитання</a>
              </li>
              <li>
                <a href="/delivery">Доставка</a>
              </li>
              <li>
                <a href="/returns">повернення</a>
              </li>
              <li>
                <a href="/order">статус замовлення</a>
              </li>
              <li>
                <a href="/payments">види оплати</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>онлайн замовлення</h4>

            <ul>
              <li>
                <a href="/products">продукти</a>
              </li>
              <li>
                <a href="/cars">автомобілі</a>
              </li>
              <li>
                <a href="/people">людей &#128521;</a>
              </li>
              <li>
                <a href="/clothes">одяг</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Слідкувати за нами</h4>
            <div class="social-links">
              <a href="/social-links">
                <i class=" fab fa-facebook-f"></i>
              </a>
              <a href="/instagram">
                <i class=" fab fa-instagram"></i>
              </a>
              <a href="/youtube">
                <i class=" fab fa-youtube"></i>
              </a>
              <a href="/telegram">
                <i class=" fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <span class="footerLast">&#169;Всі права захищені мною. 31.07.2023</span>
    </div>
  );
}

export default Footer;

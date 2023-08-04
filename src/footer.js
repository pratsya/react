/* eslint-disable jsx-a11y/anchor-is-valid */
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
                <a href="#">Про нас</a>
              </li>
              <li>
                <a href="#">наші послуги</a>
              </li>
              <li>
                <a href="#">політика конфіденційності</a>
              </li>
              <li>
                <a href="#">програма лояльності</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Допопога</h4>
            <ul>
              <li>
                <a href="#">Поширені запитання</a>
              </li>
              <li>
                <a href="#">Доставка</a>
              </li>
              <li>
                <a href="#">повернення</a>
              </li>
              <li>
                <a href="#">статус замовлення</a>
              </li>
              <li>
                <a href="#">види оплати</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>онлайн замовлення</h4>

            <ul>
              <li>
                <a href="#">продукти</a>
              </li>
              <li>
                <a href="#">автомобілі</a>
              </li>
              <li>
                <a href="#">людей &#128521;</a>
              </li>
              <li>
                <a href="#">одяг</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Слідкувати за нами</h4>
            <div class="social-links">
              <a href="#">
                <i class=" fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class=" fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class=" fab fa-youtube"></i>
              </a>
              <a href="#">
                <i class=" fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <span class="footerLast">&#169;Всі права захищені мною. 5.08.2023</span>
    </div>
  );
}

export default Footer;

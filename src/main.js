/* eslint-disable jsx-a11y/anchor-is-valid */
// beforeHeader.js
import React from "react";

import "./main.css";

function Main() {
  return (
    <div className="main">
      <div class="leftSide">
        <div class="mainLeft">
          <a href="/mainLeftLink" className="mainLeftLink">
            <img src="images/pp.jpg" alt="house" className="mainRightImage" />
            <h3 class="mainLeftText">
              Сьогодні, 30 липня, близько третьої години ночі до вежі ділового
              центру «Москва-Сіті» потрапив безпілотник. Про це повідомив
              російський інформаційний ресурс "Війна близько". Тут кажуть, що
              близько 3:00 мешканців довколишніх будинків розбудив звук вибуху,
              а на вулиці з'явився дим. У будівлі спрацювала сигналізація, йде
              евакуація.Карма-вона така...
              &#128293;&#128640;&#128293;&#9730;....
            </h3>
          </a>
        </div>

        <div class="mainLeft">
          <a href="/mainLeftLink" className="mainLeftLink">
            <img src="images/koln.jpg" alt="house" className="" />
            <h3 class="mainLeftText">
              Місто розташоване на річці Рейн. Тут знаходиться знаменитий
              Кельнський собор (нім. Kölner Dom) — резиденція католицького
              архієпископа Кельна. Кельн — також економічна і культурна столиця
              регіону Рейнланд. У місті знаходиться більше ніж 30 музеїв і сотні
              галерей. Тут проводять численні виставки — від розкопок залишок
              римської цивілізації до сучасних графічних робіт і скульптури. У
              2005 р.
            </h3>
          </a>
        </div>
      </div>

      <div class="mainRight">
        <ul>
          <li>
            <a href="/mainRightLink" className="mainRightLink">
              <img src="images/111.jpg" alt="Jeims Gip" />
              <h3 class="mainRightText">
                "Україна поки що відповідає нашим очікуванням. Вони загалом
                виконують план, який розробили разом із нами, американцями та
                іншими протягом минулої зими. Це не голлівудський фільм..."
              </h3>
            </a>
          </li>
          <li>
            <a href="/mainRightLink" className="mainRightLink">
              <img src="images/st.jpg" alt="Stalker2" />
              <h3 class="mainRightText">
                <span>S.T.A.L.K.E.R 2 </span>Відкрийте новий розділ історії
                Зони, і в ролі сталкера-одиначки почніть власну пригоду у
                просторому та відкритому світі постапокаліпсису. Боріться за
                виживання з грізними супротивниками та аномальним оточенням.
              </h3>
            </a>
          </li>
          <li>
            <a href="/mainRightLink" className="mainRightLink">
              <img src="images/my.jpg" alt="MikeTyson" />
              <h3 class="mainRightText">
                Поява Тайсона в шоу Jimmy Kimmel Live.пов'язана ще й з недавнім
                виходом прев'ю майбутнього серіалу Hulu під назвою "Майк", в
                якому історія життя боксера "Він літає, як метелик, а жалить, як
                бджола", - так представив боксера ведучий. І Майк з'явився у
                образі бджоли.
              </h3>
            </a>
          </li>
          <li>
            <a href="/mainRightLink" className="mainRightLink">
              <img src="images/p.jpg" alt="Plushki" />
              <h3 class="mainRightText">
                Шоу має підрубрику у якій її ведучий Богдан Лисевський бере
                інтерв'ю у різних зірок, задаючи навмисне провокаційні та дурні
                питання, надаючи випускам настрій абсурдності.епізоди шоу
                опиняються в епіцентрі скандалів через негативну реакцію гостей
                на дії ведучого
              </h3>
            </a>
          </li>
          <li>
            <a href="/mainRightLink" className="mainRightLink">
              <img src="images/bar.jpg" alt="barbie" />
              <h3 class="mainRightText">
                Фільм починається з розповіді історії Барбі: вона створювалася,
                щоб дати можливість дівчаткам мріяти про більше, показати, що
                будь-яка мала, коли виросте, зможе стати ким тільки забажає. Але
                в реальному світі ніхто навіть не здогадується, що всі ляльки
                мають свій реальний прототип, який живе у справжньому
                Барбіленді.
              </h3>
            </a>
          </li>
          <li class="pogoda">
            <h3>Погода в чернівцях:</h3>
            <h4>
              завжди сонячно і спекотно як у каліфорнії{" "}
              <span class="temp">&#9925;+28</span>
            </h4>
          </li>
        </ul>

        {/* <h4>завжди сонячно як у калыфорнії +28</h4> */}
      </div>
    </div>
  );
}

export default Main;

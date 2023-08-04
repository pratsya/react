/* eslint-disable jsx-a11y/anchor-is-valid */
// beforeHeader.js
import React from "react";

import "./beforeHeader.css";

function BeforeHeader() {
  return (
    <div className="beforeHeader">
      <div className="first">
        <ul>
          <li className="oneNews">
            <img src="images/j.jpg" alt="Jet" className="newsImage" />
            <a href="#">
              російські окупаційні війська 1 червня обстріляли місто Берислав
              Херсонської області, внаслідок чого постраждали троє людей.
            </a>
          </li>
          <li className="twoNews">
            <img src="images/f.jpg" alt="Jet" className="newsImage" />
            <a href="#">
              Ford опублікував масове відкликання в США понад 870 000 своїх
              пікапів F-150 28 липня через проблему з електричним стоянковим
              гальмом, яке, як виявила компанія, може активуватися без
              попередження.
            </a>
          </li>
          <li className="threeNews">
            <img src="images/z.jpg" alt="Jet" className="newsImage" />
            <a href="#">
              Україна викладає ЧОТИРИ кроки, які Путін повинен зробити, щоб
              покласти край війні: «Шлях чистий»,«Якщо Москва хоче вести
              переговори, шлях ясний».Потім він виклав чотири ключові кроки,
              які...
            </a>
          </li>
          <li className="fourNews">
            <img src="images/b.jpg" alt="Jet" className="newsImage" />
            <a href="#">
              Польща може повністю закрити свій кордон з Білоруссю, якщо
              вважатиме такий крок необхідною відповіддю на будь-яку «серйозну
              провокацію» з боку Мінська, заявив 27 липня 
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default BeforeHeader;
  
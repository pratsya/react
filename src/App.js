
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import "./styles.css";

// function App() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetch("/articles.json")
//       .then((response) => response.json())
//       .then((data) => setArticles(data))
//       .catch((error) => console.error("Ошибка при загрузке данных", error));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="proba">
//           <ul class="torchit">
//             <li className="lftBordr">
//               <a href="#">Головна</a>
//               <ul className="submenu"></ul>
//             </li>
//             <li className="news">
//               <a href="#">Новини</a>
//               <ul className="submenu1"></ul>
//             </li>
//             <li className="events">
//               <a href="#">Події</a>
//               <ul className="submenu2"></ul>
//             </li>
//             <li className="society">
//               <a href="#">Суспільство</a>
//             </li>
//             <li className="rghtBorder">
//               <a href="#">За кордоном</a>
//             </li>
//           </ul>
//         </div>
//       </header>

      
//       {articles.map((article) => (
//         <div key={article.id}>
//           <h2>{article.title}</h2>
//           <p>{article.content}</p>
          
//           <img src={article.photo} alt={article.title} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import Header from "./Header"; // Импортируйте компонент Header
import "./App.css";
import "./styles.css";

function App() {
  // Ваш существующий код...

  return (
    <div className="App">
      <Header /> {/* Используйте компонент Header здесь */}
      {/* Ваш существующий код... */}
    </div>
  );
}

export default App;

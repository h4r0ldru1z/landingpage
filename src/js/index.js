import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Cards from "./component/cards.jsx";
import Footer from "./component/footer.jsx";

function App() {
  let img = [
    "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/06/14/FE439D12-FDF3-46DF-816E-49C5B5E2F2BE/one-punch-man_98.jpg?crop=639,360,x0,y0&width=1900&height=1069&optimize=high&format=webply",
    "https://www.xtrafondos.com/wallpapers/resoluciones/19/monkey-d-luffy-de-one-piece_3840x2160_4015.jpg",
    "https://i2.wp.com/www.senpai.com.mx/wp-content/uploads/2021/06/Asi-se-ve-Naruto-Uzumaki-como-un-personaje-de-Among-Us.jpg?fit=1280%2C720&ssl=1",
    "https://img2.rtve.es/i/?w=1600&i=1657019155649.jpg",
  ];
  let alt = ["Saitama", "Luffy", "Naruto", "Goku"];
  let tittle = [
    "Saitama",
    "Monkey D. Luffy",
    "Naruto Uzumaki",
    "Son Goku",
  ];
  let description = [
    "Saitama entrenó tan duro, que logró llegr al punto de poder derrotar a sus enemigos de un solo puño.",
    "Luffy es un pirata que comió una fruta del diablo, que permite que pueda estirar su cuerpo, pero le quitó la habilidad de nadar. En sus aventuras, desea conquistar el One Piece, el legendario tesoro al final del mar, solamente conquistado por Roger Gold.",
    "Un ninja de la aldea oculta de la hoja, Konoha, repudiado por sus colegas, por poseer en su interior un espíruto destructivo, sueña con hacerse el líder de la aldea y ser reconocido por todos. Lo logrará, a través de una aventura llena de pérdidas y mucho sacrificio.",
    "Un niño con una extraordinaria fuerza, sale de las montañas en búsqueda de las esferas del dragón, para lograr cumplir su deseo. Es bastante inocente, y esto le permitirá hacer muchos amigos, y salvr el mundo más de una vez!.",
  ];
  let link = [
    "https://es.wikipedia.org/wiki/One_Punch-Man",
    "https://es.wikipedia.org/wiki/One_Piece",
    "https://es.wikipedia.org/wiki/Naruto_Uzumaki",
    "https://es.wikipedia.org/wiki/Dragon_Ball",
  ];
  let desLink = ["Wiki", "Wiki", "Wiki", "Wiki"];

  return (
    <div>
      <Navbar />,
      <div className="container">
      <Jumbotron />,
      <div className="container d-flex">   
      {img.map((singleimg, i) => {
        return <Cards key={i}  img={singleimg} alt={alt[i]} tittle={tittle[i]} description={description[i]} link={link[i]} desLink={desLink[i]} />;
      })}
      </div>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
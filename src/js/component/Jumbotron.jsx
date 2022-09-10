import React from "react";
import PropType from "prop-types";

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-primary">
      <h1 className="display-4 text-center fw-bold fst-italic">Buenas y Santas las tengas</h1>
      <p className="lead text-center">
        Vamos a definir esto de una vez. No solo somos Geeks por programar, sino que también lo somos porque algunos amamos el anime. 
        Si eres team de alguno de los siguientes héores, déjanos tu voto para ver quién es el mejor de una vez por todas.
      </p>
      <p className="lead gap-4">
        <a className="btn btn-secondary btn-lg d-grid gap-2 col-3 mx-auto" href="#" role="button">
          Suscríbete a Nuestro Blog!
        </a>
      </p>
    </div>
	);
};
export default Jumbotron;

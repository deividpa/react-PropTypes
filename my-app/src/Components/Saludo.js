import React from "react";
import PropTypes from "prop-types";

export default function Saludo({ nombre, apellido }) {
  return <h1>Hola, este es un saludo de parte de {nombre}</h1>;
}

Saludo.propTypes = {
  nombre: PropTypes.string.isRequired,
};

Saludo.defaultProps = {
  apellido: "Soy un apellido por defecto",
};

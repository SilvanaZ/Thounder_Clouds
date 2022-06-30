/* Una biblioteca que le permite validar los accesorios que se pasan a su componente. */
import PropTypes from "prop-types";

/**
 * FirstApp es una función que toma un objeto con tres propiedades (título, subtítulo, nombre) y
 * devuelve un componente React que muestra los valores de esas propiedades
 * returns JSX
 */
export const FirstApp = ({ title, subTitle, name }) => {
  //console.log(props);

  return (
    <>
      <h1>{title}</h1>
      {/*<code>{JSON.stringify(newMessage)}</code>*/}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

/* Una validación de los accesorios que se pasan al componente. */
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

/* Un valor predeterminado para los accesorios. */
FirstApp.defaultProps = {
  name: "Rocío Fernandez",
  subTitle: "No hay subtitulos",
  title: "No hay titulo",
};

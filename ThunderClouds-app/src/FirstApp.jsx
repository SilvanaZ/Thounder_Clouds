import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  //console.log(props);

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/*<code>{JSON.stringify(newMessage)}</code>*/}
      <p>{name}</p>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
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

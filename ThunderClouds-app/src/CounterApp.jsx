import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const handleAdd = (event) => {
    // console.log(event);
    console.log('+1');
    value += 1;
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

/* <button onClick={(event) => handleAdd(event, "Hola Ro")}>
        clickeame
      </button>   -> esto va en el RETURN

      const handleAdd = (event, newValue) => {
  console.log(newValue); ->SE PIDE QUE VAYA FUERA DE LA FUNCION PERO LA PRUEBA FUE DENTRO DE FUNCION Y ANTES DEL RETURN
};*/

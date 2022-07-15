import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // console.log(event);
    // setCounter (counter + 2);
    setCounter((c) => c + 2);
  };

  const handleDecrease = () => setCounter(counter - 2);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>Reset</button>
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

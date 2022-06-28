//import { Fragment } from "react";

/* const getSaludo = {
  message: 10 / 3,
  title: "Chipi",
};
export const FirstApp2 = () => {
  return (
    <>
      <h1>Hola yo doy {getSaludo.message}</h1>
      {<code>{JSON.stringify(newMessage)}</code>}
      <p>Hey!! Soy un subtitulo con un {getSaludo.title}</p>
    </>
  );
}; */

export const FirstApp = (props) => {
  console.log(props);

  return (
    <>
      <h1>{props.title}</h1>
      {/*<code>{JSON.stringify(newMessage)}</code>*/}
      <p>Hey!! Soy un subtitulo chipitense!!</p>
    </>
  );
};

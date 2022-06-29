import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle /*= "Hola mondo"*/ }) => {
  //console.log(props);

  return (
    <>
      <h1>{title}</h1>
      {/*<code>{JSON.stringify(newMessage)}</code>*/}
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
};

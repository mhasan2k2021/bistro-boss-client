import "./Heading.css";

const Heading = ({ heading, color }) => {
  const style = {
    color: color ? color : "",
  };
  return (
    <h3 className={`order_heading `} style={style}>
      {heading}
    </h3>
  );
};

export default Heading;

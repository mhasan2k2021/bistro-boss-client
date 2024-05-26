import "./Heading.css";

const Heading = ({ heading, style }) => {
  return (
    <h3 className={`order_heading `} style={style}>
      {heading}
    </h3>
  );
};

export default Heading;

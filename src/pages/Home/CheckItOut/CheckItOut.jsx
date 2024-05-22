import Heading from "../../../componets/Heading/Heading";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import "./CheckItOut.css";

const CheckItOut = () => {
  const img =
    "https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603575/bistro-boss/home/featured_igjlti.jpg";
  return (
    <div className="checkItOut_container">
      <ShortHeading shortHading="---Check it out---"></ShortHeading>
      <Heading
        heading="FROM OUR MENU"
        className="newHeading"
        color="#fff"
      ></Heading>

      <div className="getSome">
        <img src={img} alt="" />
        <div className="get_some_detail">
          <h6>
            March 20, 2023
            <br />
            WHERE CAN I GET SOME?
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default CheckItOut;

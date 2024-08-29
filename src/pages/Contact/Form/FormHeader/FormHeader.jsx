import React from "react";
import ShortHeading from "../../../../componets/ShortHeading/ShortHeading";
import Heading from "../../../../componets/Heading/Heading";

const FormHeader = () => {
  return (
    <div>
      <ShortHeading shortHading={"---Send Us a Message---"}></ShortHeading>
      <Heading heading={"CONTACT FORM"}></Heading>
    </div>
  );
};

export default FormHeader;

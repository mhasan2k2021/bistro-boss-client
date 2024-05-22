import Heading from "../../../componets/Heading/Heading";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import CommentSlider from "./CommentSlider/CommentSlider";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials_container">
      <ShortHeading shortHading="---What Our Clients Say---"></ShortHeading>
      <Heading heading="TESTIMONIALS"></Heading>
      <div className="comment_container">
        <CommentSlider></CommentSlider>
      </div>
    </div>
  );
};

export default Testimonials;

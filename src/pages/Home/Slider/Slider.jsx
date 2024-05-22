import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel className="slider">
      <div>
        <img src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603694/bistro-boss/home/01_h2jypi.jpg" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603670/bistro-boss/home/02_entbpi.jpg" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603651/bistro-boss/home/06_smrdrd.png" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603621/bistro-boss/home/04_cqy6ce.jpg" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603620/bistro-boss/home/05_p0ow3f.png" />
      </div>
    </Carousel>
  );
};

export default Slider;

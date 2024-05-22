import "./FoodList.css";

const FoodList = ({ food }) => {
  const { name, detail, image } = food;
  return (
    <div className="food_card">
      <img src={image} alt="" />
      <div className="food_card_detail">
        <h6>{name}</h6>
        {detail.length > 40 ? <p>{detail.slice(0, 40)}...</p> : <p>{detail}</p>}
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default FoodList;

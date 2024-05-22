import "./OneMenu.css";

const OneMenu = ({ m }) => {
  const { image, name, price, detail } = m;
  return (
    <div className="oneMenu">
      <img src={image} alt="" />
      <div className="food_detail">
        <div className="name_price">
          <h6>{name} ------------------</h6>
          <p>${price}</p>
        </div>
        {detail.length > 50 ? (
          <p className="detail">{detail.slice(0, 80)}...</p>
        ) : (
          <p className="detail">{details}</p>
        )}
      </div>
    </div>
  );
};

export default OneMenu;

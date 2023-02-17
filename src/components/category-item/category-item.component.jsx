import "./category-item.styles.scss";

const CategoryItem = ({ id, title, imageUrl }) => {
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;

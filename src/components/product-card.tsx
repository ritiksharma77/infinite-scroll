import "./product-card.css";
interface productType {
  key: number;
  id: number;
  title: string;
  price: number;
}
export const ProductCard = ({ id, title, price }: productType) => {
  return (
    <div className="product-card-container" key={id}>
      <div className="product-id">{id}</div>
      <div className="product-title">{title}</div>
      <div className="product-price">${price}</div>
    </div>
  );
};

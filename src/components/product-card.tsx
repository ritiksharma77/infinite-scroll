import "./product-card.css";
interface productType {
  key: number;
  id: string;
  title: string;
  pageNumber: string;
}
export const ProductCard = ({ id, title, pageNumber }: productType) => {
  return (
    <div className="product-card-container" key={id}>
      <div className="product-id">{id}</div>
      <div className="product-title">{title}</div>
      <div className="product-price">{pageNumber}</div>
    </div>
  );
};

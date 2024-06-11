import { useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/product-card";
import { fetchData } from "./components/fetch-data";

function App() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      {data &&
        data.map((item: any) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        ))}
    </div>
  );
}

export default App;

import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/product-card";
import { fetchData } from "./components/fetch-data";

function App() {
  const [data, setData] = useState<any>(new Set());
  const [pageNumber, setPageNumber] = useState(1);

  const addUniqueItems = (prevSet: any, newItems: any) => {
    const updatedSet = new Set(prevSet);

    newItems.forEach((item: any) => {
      if (
        ![...updatedSet].some(
          (existingItem: any) => existingItem.id === item.id
        )
      ) {
        updatedSet.add(item);
      }
    });

    return updatedSet;
  };

  const getData = useCallback(() => {
    fetchData(pageNumber).then((data) =>
      setData((prev: any) => addUniqueItems(prev, data))
    );
    setPageNumber((prev) => prev + 1);
  }, [pageNumber]);
  useEffect(() => {
    getData();
  }, [getData]);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 5
      ) {
        setPageNumber((prev) => prev + 1);
        getData();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNumber, getData]);

  return (
    <div className="App">
      {data &&
        Array.from(data).map((item: any) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.userId}
          />
        ))}
    </div>
  );
}

export default App;

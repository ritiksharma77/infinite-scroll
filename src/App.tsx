import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/product-card";
import { fetchData } from "./components/fetch-data";

function App() {
  const scrollableDivRef = useRef<any>(null);
  const [data, setData] = useState<any>([]);
  const [pagination, setPagination] = useState({ page: 1 });

  useEffect(() => {
    fetchData(pagination.page).then((resultData: any) => {
      if (resultData.length > 0) {
        const updatedData = [...data, ...resultData];
        setData(updatedData);
      }
    });
  }, [pagination]);

  const loadMore = () => {
    const scrollableDiv = scrollableDivRef.current;
    if (
      scrollableDiv.scrollTop + scrollableDiv.clientHeight >=
      scrollableDiv.scrollHeight
    ) {
      setPagination({
        page: pagination.page + 1,
      });
    }
  };

  return (
    <div className="App" ref={scrollableDivRef} onScroll={loadMore}>
      <ProductCard key={99999} id="ID" title="TITLE" pageNumber="Page Number" />
      {data &&
        Array.from(data).map((item: any) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            pageNumber={item.userId}
          />
        ))}
    </div>
  );
}

export default App;

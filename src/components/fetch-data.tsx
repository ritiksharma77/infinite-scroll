const url = "https://dummyjson.com/products?limit=20";
export const fetchData = async () => {
  try {
    const data = await fetch(url);
    let response = await data.json();
    response = response.products;
    return response;
  } catch {
    throw new Error("Failed to Fetch data");
  }
};

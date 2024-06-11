export const fetchData = async (pageNumber: number) => {
  const url = `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20`;

  try {
    const data = await fetch(url);
    let response = await data.json();
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

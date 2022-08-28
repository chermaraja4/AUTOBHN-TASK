export const FetchData = () => {
  return fetch(
    "https://jsonplaceholder.typicode.com/todos".then((res) => {
      if (res.status === 200) return res.json();
      else throw new Error("Invalid");
    })
  );
};

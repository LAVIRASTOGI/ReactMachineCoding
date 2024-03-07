import { useEffect, useState } from "react";
import Autocomplete from "./Components/Autocomplete";
import "./app.css";
import DataComponent from "./Components/DataComponent";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) =>
        setData(
          result?.products?.map((ele) => ({
            id: ele?.id,
            productName: ele?.title,
            image: ele?.images[0],
          }))
        )
      );
  }, []);
  return (
    <div className="App">
      <div>
        <Autocomplete options={data} />
        <DataComponent />
      </div>
    </div>
  );
}

export default App;

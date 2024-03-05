import { useEffect, useState } from "react";
import Autocomplete from "./Components/Autocomplete";
import './app.css'



function App() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setData(result.products.map(ele=>({id:ele?.id,productName:ele?.title}))));
  }, []);
  return (
    <div className="App">
      <Autocomplete
        options={data}
      />
    </div>
  );
}

export default App;

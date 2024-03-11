import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
 

  useEffect(() => {
    const abortController = new AbortController();
    const {signal}=abortController
    
    fetch(`https://dummyjson.com/products/${count}`,{signal})
    .then((res) => res.json())
    .then((result) =>
      console.log(result)
    ).catch(err=>{
      if (err.name === 'AbortError') {
        console.log('AbortError: Fetch request aborted');
      };
    });

    return ()=>{
      abortController.abort()
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Send</button>
    </div>
  );
}

export default App;

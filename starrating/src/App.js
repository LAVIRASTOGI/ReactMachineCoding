import DataComponent from "./DataComponent";
import StarRating from "./StarRating";


function App() {
  return (
    <div className="container mx-auto bg-gray-100 h-screen ">
    <DataComponent topicTitle='star Rating'/>
      <StarRating />
   </div> 
  );
}

export default App;

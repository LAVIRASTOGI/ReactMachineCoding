import DataComponent from "./DataComponent";
import Trafficlight from "./Trafficlight";




function App() {
  return (
    <div className="container mx-auto bg-gray-100 h-screen ">
    <DataComponent topicTitle='Build Traffic Light'/>
    <Trafficlight/>
   </div> 
  );
}

export default App;

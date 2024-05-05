import DataComponent from "./DataComponent";
import ProgressBar from "./ProgressBar";

function App() {
  return (
    <div className="container mx-auto bg-gray-100 h-screen ">
    <DataComponent topicTitle='Progress Bar'/>
    <ProgressBar maxValue={100}/>
   </div> 
  );
}

export default App;

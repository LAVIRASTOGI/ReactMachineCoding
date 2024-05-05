import DataComponent from "./DataComponent";
import ImageSlider from "./ImageSlider";



function App() {
  return (
    <div className="container mx-auto bg-gray-100 h-full">
    <DataComponent topicTitle='Carousel'/>
    <ImageSlider/>
   </div> 
  );
}

export default App;

import "./App.css";
import DataComponent from "./Components/DataComponent";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./theme-context";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <DataComponent/>
      </div>
    </ThemeProvider>
  );
}

export default App;

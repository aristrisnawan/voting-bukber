import logo from "./logo.svg";
import BannerComponent from "./components/BannerComponent";
import VotingComponent from "./components/VotingComponent";
import ResultComponent from "./components/ResultComponent";
import Laptop from "./components/Laptop";

function App() {
  return (
    <div>
      <Laptop />
      <BannerComponent />
      <VotingComponent />
      <ResultComponent />
    </div>
  );
}

export default App;

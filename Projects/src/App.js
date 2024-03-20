import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-darker-mode";
function App() {
  return (
    <div className="App">
      <Accordian />
      <ModalTest />
      <TabTest />
      <GithubProfileFinder />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LightDarkMode />
    </div>
  );
}

export default App;

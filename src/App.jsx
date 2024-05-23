import "./App.css";

import AboutMe from "./components/AboutMe";
import Food from "./components/Food";
import FreeTime from "./components/FreeTime";
import Hobbies from "./components/Hobbies";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <AboutMe
        name={"Jonatan"}
        movie={"Avengers"}
        music={"Avenged Sevenfold"}
      />

      <Hobbies
        hobbie1={"Leer"}
        hobbie2={"Ver series"}
        hobbie3={"Jugar fútbol"}
      />

      <FreeTime 
      FT1={"Leer"} 
      FT2={"Corremos"} 
      FT3={"Tomo fotografias"} />

      <Food
      food1={"Sorrentinos"} 
      food2={"Milanesa"} 
      food3={"Polenta"} />

      <Technologies
      tech1={"React"} 
      tech2={"Python"} 
      tech3={"JavaScript"} />
    </div>
  );
}

export default App;

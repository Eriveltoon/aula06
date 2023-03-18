import ListaVideo from "./ListaVideo";
import Header from "./Headers";
import Buscar from "./Buscar";
import {videos} from "./data/videos";
import { VideoContext } from "./VideoContext";

function App() {
  return (
    <div className="container">
      <VideoContext.Provider value={videos}>
        <Header />
        <Buscar/>
        <ListaVideo  />
      </VideoContext.Provider>
    </div>
  )
}

export default App;

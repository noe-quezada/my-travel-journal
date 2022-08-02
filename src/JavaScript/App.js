import "../Css/App.css";
import data from "../Data/data";
import { Header } from "../Components/Header";
import { MainContent } from "../Components/MainContent";

function App() {
  const MapData = data.map((elements) => {
    return (
      <MainContent
        img={elements.imageUrl}
        {...elements}
        // location={data.location}
        // gmaps={data.googleMapsUrl}
        // title={data.title}
        // startDate={data.startDate}
        // endDate={data.endDate}
        // description={data.description}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      {MapData}
    </div>
  );
}

export default App;

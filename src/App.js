import "./App.css";
import reactsvg from "./image/react.svg";
import Data from "./helper/data";
import Card from "./component/card";

function App() {
  return (
    <div className="general-div">
      <header>
        <img src={reactsvg} />
      </header>
      <div className="container">
        <h2>Languages</h2>
        <div className="line">
          <div className="cards-div">
            {Data.map((items) => {
              return (
                <Card
                  key={items.name}
                  name={items.name}
                  img={items.img}
                  options={items.options}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

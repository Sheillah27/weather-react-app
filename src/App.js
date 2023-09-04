import "./App.css";
function App() {
  return (
    <div className="App">
      <h2>React Weather App</h2>

      <form>
        <input type="search" placeholder="Type City" />

        <input type="submit" value="Search" />
      </form>
      <div className="Container">
        <div className="row">
          <div className="Col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
            <span>26 ℃</span>
            <div>Monday 4th 3:40 pm</div>
            <div>Description</div>
          </div>
        </div>
      </div>
      <div classNameclassName="col 6">
        <ul>
          <li>Humidity</li>
          <li>Wind speed</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import data from "./mockData.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      setFilteredData(data);
    } else {
      let filtered = filteredData.filter((item) =>
        item.company.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-2 m-8">Search Bar</h1>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          placeholder="enter your text here"
          className="border-2 border-black rounded-lg p-4 m-6 text-xl"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="bg-black text-white rounded-lg p-4 m-6 text-xl">
          Search
        </button>
      </form>
      <div className="text-center text-xl">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center m-2 p-2"
          >
            <p className="mr-4">{item.id}</p>
            <p>{item.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

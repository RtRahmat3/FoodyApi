import { data } from "autoprefixer";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/shared/Card";
function App() {
  const [meals, setmeals] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setmeals(data.meals));
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="bg-[url('src/images/bg.food.jpeg')] bg-cover bg-center h-[100%] m-3 border-t-8 border-indigo-500 border-b-8 flex items-center justify-center flex-col">
        <div className="flex flex-col bg-cover bg-center">
          <div>
            <h1 className="text-center text-5xl text-orange-500 font-bold m-5">
              Khai Dai <br />
              Tobla Bajai
            </h1>
          </div>
          <div>
            <input
              type="text"
              className="border rounded-xl m-2 px-4 py-2 "
              placeholder="Search here"
              onChange={handleChange} // Consider onChange for real-time updates
            />
            <button
              className="border bg-indigo-400  h-10 py-2 text-white rounded-lg"
              onClick={handleChange}
            >
              Search Here
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 m-4 ">
          {meals && meals.length > 0 ? (
            meals.map((meal, index) => (
              <Card data={meal} key={index} index={1} />
            ))
          ) : (
            <p className="text-3xl flex items-center justify-center text-white  h-[100vh] w-[100vw]">
              No meals found , Please try a different search.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

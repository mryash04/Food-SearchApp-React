import React, {useEffect, useState} from "react";
import "./App.css";
import Receipe from "./Receipe";

const App = () =>{

  const APP_ID = "675a2905";

  const APP_KEY = "2e6383788f850ab35e8fce24ab2ce423";

  const [counter, setCounter] = useState(0);

  const [receipes, setReceipes] = useState([]);

  const [search, setSearch] = useState("");

  const[query, setQuery] = useState("chicken");

  const foodSearch = (event) =>{
    setSearch(event.target.value);
    console.log(search);
  }

  const getSearch = (event) =>{
    event.preventDefault();
    setQuery(search);
    console.log(query);
  }

  useEffect(() =>{
    getRecipes();
  }, [query]);
  
    const getRecipes = async () =>{
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();

    console.log(data);
    setReceipes(data.hits);
  }

  // const getRecipes = () =>{
  //   fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}
  //   &from=0&to=3&calories=591-722&health=alcohol-free`).then((response) =>{
  //     return response.json()
  //   }).then((actualdata) =>{
  //     console.log(actualdata);
  //   })
  // }



  return(
    <React.Fragment>
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input onChange={foodSearch} className="search-bar" type="text" value={search}/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="receipe">
        {receipes.map(receipe => (
          <Receipe title={receipe.recipe.label}
          calories={receipe.recipe.calories}
          image={receipe.recipe.image}
          /> 
        ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;

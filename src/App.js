import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    return setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));

  return (
    <div className="app">
      <button type="button" onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default App;

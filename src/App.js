import "./styles.css";
import { useState } from "react";

var stateFoodList = {
  punjab: [
    "Sarso ka Saag and Makki di Roti",
    "Amritsari Kulcha",
    "Chhole-Bhature",
    "Lassi"
  ],
  maharashtra: [
    "Kaju Kothimbir Vadi",
    "Pav Bhaji",
    "Misal Pav",
    "Puran Poli",
    "Batata Vada"
  ],
  westBengal: ["Kathi Rolls", "Rasgullas", "Ilish Maach", "Kosha Mangsho"],
  gujarat: ["Khakra", "Thepla", "Fafda-jalebi", "Khandvi", "Gathiya"],
  kerela: ["Idiyappam with curry", "Erissery", "Appam with ishtu"],
  rajasthan: [
    "Gatte ki subzi",
    "Bajra ki roti with lasun chutney",
    "Onion kachori",
    "Ghevar"
  ]
};

export default function App() {
  var [foodList, setFoodState] = useState("");

  var arrFoodList = []; // new array declared to store food list

  //this makes a new array to traverse with map
  for (var i = 0; i < foodList.length; i++) {
    arrFoodList[i] = foodList[i];
  }

  function buttonClickHandler(state) {
    var userClick = state.target.value;
    var foodList = stateFoodList[userClick];
    setFoodState(foodList);
  }

  return (
    <div className="App">
      <h1>goodfood</h1>
      <h3>
        Checkout my favourite food from different Indian States. Select a Indian
        State to get started.
      </h3>
      <button onClick={buttonClickHandler} value="punjab">
        Punjab
      </button>
      <button onClick={buttonClickHandler} value="maharashtra">
        Maharashtra
      </button>
      <button onClick={buttonClickHandler} value="westBengal">
        West Bengal
      </button>
      <button onClick={buttonClickHandler} value="gujarat">
        Gujarat
      </button>
      <button onClick={buttonClickHandler} value="kerela">
        Kerela
      </button>
      <button onClick={buttonClickHandler} value="rajasthan">
        Rajasthan
      </button>
      <hr className="style-two" />
      <div>
        {arrFoodList.map((food) => {
          return <p key={food}>{food}</p>;
        })}
      </div>
    </div>
  );
}

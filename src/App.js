import "./styles.css";
import { useState } from "react";

var stateFoodList = {
  punjab: [
    "4/5 Sarso ka Saag and Makki di Roti",
    "3/5Amritsari Kulcha",
    "4/5Chhole-Bhature",
    "5/5Lassi"
  ],
  maharashtra: [
    "5/5 Kaju Kothimbir Vadi",
    "4/5 Pav Bhaji",
    "4/5 Misal Pav",
    "3/5 Puran Poli",
    "4/5 Batata Vada"
  ],
  westBengal: [
    "3/5 Kathi Rolls",
    "4/5 Rasgullas",
    "4/5 Ilish Maach",
    "5/5 Kosha Mangsho"
  ],
  gujarat: [
    "5/5 Khakra",
    "3/5 Thepla",
    "4/5 Fafda-jalebi",
    "5/5 Khandvi",
    "4/5 Gathiya"
  ],
  kerela: ["4/5 Idiyappam with curry", "3/5 Erissery", "4/5 Appam with ishtu"],
  rajasthan: [
    "4/5 Gatte ki subzi",
    "5/5 Bajra ki roti with lasun chutney",
    "5/5 Onion kachori",
    "4/5 Ghevar"
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

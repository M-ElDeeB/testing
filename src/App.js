import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./UserData";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#CCC",'#00f','#F00','yellow'],
        borderRadius: "5",
        borderWidth: "1",
        borderColor: "#DDD",
        hoverOffset: 4
      },
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["#CCC",'#00f','#F00','yellow'],
        borderRadius: "5",
        borderWidth: "1",
        borderColor: "#DDD",
        hoverOffset: 4
      },
      
    ],
    
  });
  return (
    <div className="App">
      <div style={{ width: 600 }}>
        <BarChart userData={userData} />
      </div>
      <div style={{ width: 600 }}>
        <LineChart userData={userData} />
      </div>
      <div style={{ width: 600 }}>
        <PieChart userData={userData} />
      </div>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import './App.css';
import Stopwatch from "./Components/Stopwatch/Stopwatch";
import StopwatchList from "./Components/Stopwatch/StopwatchList";

function App() {

    return (
        <div className="App">
            <StopwatchList />
        </div>
    );
}

export default App;

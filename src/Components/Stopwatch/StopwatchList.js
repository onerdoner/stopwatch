import Stopwatch from "./Stopwatch";
import React, {useState, useEffect} from "react";

const StopwatchList = () => {
    const [watchList, setWatchList] = useState([])
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);

    const addStopWatch = () => {
        setWatchList([...watchList, <Stopwatch key={watchList.length} active={active} time={time} />]);
    }


    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else if (!active) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active]);


    const pauseTime = () => {
        setActive(false);
    }

    const startTime = () => {
        setActive(true);
    }

    const resetTime = () => {
        setActive(false);
        // setTime(0);
    }

    return <div>
        <button onClick={addStopWatch}>Add stopwatch</button>
        <div>
            <button onClick={startTime}>Start</button>
            <button onClick={resetTime}>Reset</button>
            <button onClick={pauseTime}>Pause</button>
        </div>
        {watchList}


    </div>
}

export default StopwatchList
import { useEffect, useState } from "react";

function StopWatchingTimer() {
  const [userTime, setUserTime] = useState(0);
  const [timeLift, setTimeLift] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLift > 0) {
      timerId = setInterval(() => {
        setTimeLift((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning, timeLift]);

  const handleInputs = (e) => {
    const inputValue = Number(e.target.value);
    setUserTime(inputValue);
    setTimeLift(inputValue);
    setIsRunning(false);
  };

  const handleStart = () => {
    if (timeLift > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLift(userTime);
    setUserTime(userTime);
  };

  console.log(userTime);
  console.log("timeLift", timeLift);
  return (
    <div>
      <h2>Countdown Timer</h2>
      <span>Set Time (seconds) : </span>
      <input type="text" value={userTime} onChange={handleInputs} />
      <p>Time Left: {timeLift}</p>
      <button onClick={handleStart} disabled={isRunning || timeLift === 0}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatchingTimer;

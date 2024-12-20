import React, { useState, useEffect } from "react";
import TimerStyle from './Timer.module.css';

const Timer = () => {
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [remainingHour, setRemainingHour] = useState(0);
    const [remainingMinute, setRemainingMinute] = useState(0);
    const [remainingSecond, setRemainingSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning && (remainingHour > 0 || remainingMinute > 0 || remainingSecond > 0)) {
            timer = setInterval(() => {
                setRemainingSecond((previous) => {
                    if (previous > 0) return previous - 1;

                    if (remainingMinute > 0 || remainingHour > 0) {
                        setRemainingMinute((previousMinute) => {
                            if (previousMinute > 0) return previousMinute - 1;

                            if (remainingHour > 0) {
                                setRemainingHour((previousHour) => previousHour - 1);
                                return 59;
                            }
                            return 0;
                        });
                        return 59;
                    }

                    return 0;
                });
            }, 1000);
        } else if (isRunning && remainingHour === 0 && remainingMinute === 0 && remainingSecond === 0) {
            setIsRunning(false);
            alert("Time's up!");
        }

        return () => clearInterval(timer);
    }, [isRunning, remainingHour, remainingMinute, remainingSecond]);

    const startCountdown = () => {
        if (hour || minute || second) {
            setRemainingHour(hour === "" ? 0 : +hour);
            setRemainingMinute(minute === "" ? 0 : +minute);
            setRemainingSecond(second === "" ? 0 : +second);
            setIsRunning(true);
        }
    };

    const stopCountdown = () => {
        setIsRunning(false);
    };

    const resetCountdown = () => {
        setIsRunning(false);
        setHour("");
        setMinute("");
        setSecond("");
        setRemainingHour(0);
        setRemainingMinute(0);
        setRemainingSecond(0);
    };

    return (
        <div className={TimerStyle.timerContainer}>
            <div className={TimerStyle.timerCard}>
                <h1 className={TimerStyle.timerHeading}>Set a Timer</h1>
                <div className={TimerStyle.main}>
                    <div className={TimerStyle.timerInput}>
                        <div className={TimerStyle.inputValues}>
                            <p>Hour</p>
                            <p>Minute</p>
                            <p>Second</p>
                        </div>
                        <div className={TimerStyle.inputTime}>
                            <input
                                className={TimerStyle.input}
                                type="number"
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                                disabled={isRunning}
                            />
                            :
                            <input
                                className={TimerStyle.input}
                                type="number"
                                value={minute}
                                onChange={(e) => setMinute(e.target.value)}
                                disabled={isRunning}
                            />
                            :
                            <input
                                className={TimerStyle.input}
                                type="number"
                                value={second}
                                onChange={(e) => setSecond(e.target.value)}
                                disabled={isRunning}
                            />
                        </div>
                        <div className={TimerStyle.inputButton}>
                            <button className={TimerStyle.button} onClick={startCountdown} disabled={isRunning}>
                                Start
                            </button>
                            <button className={TimerStyle.button} onClick={resetCountdown}>
                                Reset
                            </button>
                            <button className={TimerStyle.button} onClick={stopCountdown}>
                                Stop
                            </button>
                        </div>
                    </div>
                    <div className={TimerStyle.outputCard}>
                        <div className={TimerStyle.output}>
                            <p>{isRunning ? remainingHour : (hour || "0")}</p>:
                            <p>{isRunning ? remainingMinute : (minute || "0")}</p>:
                            <p>{isRunning ? remainingSecond : (second || "0")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;

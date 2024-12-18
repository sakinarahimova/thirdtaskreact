import React, { useState, useEffect } from 'react';
import StopWatchStyle from './StopWatch.module.css';

const StopWatch = () => {
    const [textSecond, setTextSecond] = useState(0);
    const [textMinute, setTextMinute] = useState(0);
    const [textHour, setTextHour] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTextSecond((previous) => {
                    if (previous + 1 === 60) {
                        setTextMinute((minutePrevious) => {
                            if (minutePrevious + 1 === 60) {
                                 setTextHour((hourPrevious) => hourPrevious + 1);
                                return 0;
                            }
                            return minutePrevious + 1;
                        });
                        return 0;
                    }
                    return previous + 1;
                });
            }, 1000);
            setIntervalId(interval);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning((previous) => !previous);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTextSecond(0);
        setTextMinute(0);
        setTextHour(0);
    };

    return (
        <div className={StopWatchStyle.main}>
            <div className={StopWatchStyle.container}>
                <h1>Stopwatch</h1>
                <div className={StopWatchStyle.text}>
                    <p>{textHour < 10 ? `0${textHour}` : textHour}</p>:
                    <p>{textMinute < 10 ? `0${textMinute}` : textMinute}</p>:
                    <p>{textSecond < 10 ? `0${textSecond}` : textSecond}</p>
                </div>
                <div className={StopWatchStyle.buttons}>
                    <button onClick={handleStartStop}>
                        {isRunning ? 'Stop' : 'Start'}
                    </button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;

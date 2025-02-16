import { View, Text, Button, Pressable, TouchableOpacity, AppState } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './style'
import { commonStyles } from '../../common/styles/styles'
import BackgroundTimer from 'react-native-background-timer';


const StopWatch = () => {
    console.log("stopwatch screen ...")
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [isResetDisabled, setIsResetDisabled] = useState(true);

    useEffect(() => {
        console.log('stopwatch effect ...');
        console.log('time value --> ', time);
        let timerId;
        if (running) {
            timerId = BackgroundTimer.setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
            console.log("timerId ---> ", timerId)
        } else {
            BackgroundTimer.clearInterval(timerId);
        }
        return () => BackgroundTimer.clearInterval(timerId);
    }, [running]);

    // useEffect(() => {
    //     console.log('stopwatch effect ...');
    //         console.log('time value --> ', time);
    //         let timerId;
    //         if (running) {
    //             timerId = setInterval(() => {
    //                 setTime(prevTime => prevTime + 10);
    //             }, 10);
    //             console.log('timerId value --> ', timerId);
    //     } else {
    //         clearInterval(timerId);
    //     }
    //     return () => clearInterval(timerId);
    // }, [running]);

    // useEffect(() => {
    //     let timerId;
    //     if (running) {
    //         timerId = BackgroundTimer.runBackgroundTimer(() => {
    //             setTime(prevTime => prevTime + 10);
    //         }, 10);
    //     } else {
    //         BackgroundTimer.stopBackgroundTimer(); // Stops the timer when not running
    //     }
    //     return () => BackgroundTimer.stopBackgroundTimer();
    // }, [running]);
    


    function handleReset() {
        setTime(0)
        setRunning(false)

        setIsResetDisabled(true)
    };

    const handlePlayPause = () => {
        if (running) {
            setRunning(false);
        } else {
            setRunning(true);
            setIsResetDisabled(false);
        }
    };

    const formatTime = (time) => {
        const getMilliseconds = `0${time % 1000}`.slice(-2);

        const seconds = Math.floor(time / 1000);
        const getSeconds = `0${seconds % 60}`.slice(-2);

        const minutes = Math.floor(time / 60000);
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
    };


  return (
    <View>
            <Text style={[commonStyles.textCenter, commonStyles.paddingUpDown, commonStyles.mediumfont]} >Stopwatch</Text>
            <View style={{ height: "100%", justifyContent: "space-around" }} >
                <Text style={[styles.center, styles.timeText]}>{formatTime(time)}</Text>
                <View style={[styles.buttonContainer]} >
                    <TouchableOpacity
                        style={[styles.button, { borderWidth: 1 }]}
                        onPress={handlePlayPause}
                    >
                        <Text>{running ? 'Pause' : 'Start'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ isResetDisabled ? [styles.button,{ backgroundColor: "rgb(235,235,228)" }] : styles.button} onPress={handleReset} disabled={isResetDisabled}  >
                        <Text>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

  )
}

export default StopWatch
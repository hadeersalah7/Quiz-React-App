import React, {useEffect, useState} from 'react'

export default function QuizTimer({ onTimeout, timer }) {
    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(() => {
        console.log("TIMEOUT")
        const timeOut = setTimeout(onTimeout, timer)
        return () => {
            clearTimeout(timeOut)
        }
    }, [onTimeout, timer])

    useEffect(() => {
        console.log("TIME STARTING")
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100)
        }, 100)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <progress id='question-time' max={timer} value={remainingTime}/>
    )
}

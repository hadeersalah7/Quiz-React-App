import React, {useEffect, useState} from 'react'

export default function QuizTimer({ onTimeout, timer }) {
    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(() => {
        setTimeout(onTimeout, timer)
    }, [onTimeout, timer])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100)
        }, 100)
    }, [])
    return (
        <progress id='question-time' max={timer} value={remainingTime}/>
    )
}

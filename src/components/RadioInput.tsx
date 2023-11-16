import { useState } from "react";

export type radioProps = {
    id: string;
    fetchLetter: (id: string, status: string) => void;
    UpdateLetter: (id: string) => void;
}

const RadioInput = ({ id, fetchLetter, UpdateLetter }: radioProps) => {

    const [show, setShow] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('new')
    const [timer, setTimer] = useState<number>()
    const startInterval = () => {
        const intervel = setInterval(() => {
            UpdateLetter(id)
            setShow(true)
            setStatus('stop')
            // setCheck(true)
        }, 2000)
        setTimer(intervel)
    }
    const stopInterval = () => {
        clearInterval(timer)
        setShow(false)
        setStatus('restart')
    }
    return (
        <>
            {show ? <input type='radio' onClick={() => {
                stopInterval()
            }}
                checked
            /> : <input type='radio' onClick={() => {
                if (status == 'new') {
                    fetchLetter(id, 'new')
                }
                startInterval()
            }}
            />}
        </>
    )
}

export default RadioInput
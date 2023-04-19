import { useEffect, useState } from 'react'

const Reserves = () => {
    const [err, setErr] = useState(false)
    const onThrow = () => {
        setErr(true)
    }

    useEffect(() => {
        if (err) {
            throw new Error()
        }
    }, [err])

    return (
        <div>
            <button onClick={onThrow}>
                Throw error
            </button>
        </div>
    )
}

export default Reserves

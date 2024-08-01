import { useEffect, useRef, useState } from "react"
import { eventBusService } from "../services/event-bus.service.js"

export function UserMsg() {

    const [msg, setMsg] = useState(null)
    // const [isShown, setIsShown] = useState(false)
    const timeoutIdRef = useRef()

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', (msg) => {
            setMsg(msg)
            if (timeoutIdRef.current) {
                timeoutIdRef.current = null
                clearTimeout(timeoutIdRef.current)
            }
            timeoutIdRef.current = setTimeout(closeMsg, 6000)
        })
        return unsubscribe
    }, [])

    function closeMsg() {
        // setIsShown(false)
        setMsg(null)
    }

    if (!msg) return <span></span>
    return (
        <section className={`user-msg ${msg.type}`}>
            {/* <section className={`user-msg ${msg.type} ${isShown ? 'shown' : ''}`}> */}
            {msg.txt}
        </section>
    )
}

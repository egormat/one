import { useEffect, useRef } from 'react'

const useClickOutside = (handler) => {
    const domNode = useRef()

    useEffect(() => {
        const hookHandler = (event) => {
            if (!domNode.current?.contains(event.target)) {
                handler()
            }
        }

        document.addEventListener("mousedown", hookHandler, false)

        return () => {
            document.removeEventListener("mousedown", hookHandler, false)
        }
    }, [])

    return domNode
}

export default useClickOutside
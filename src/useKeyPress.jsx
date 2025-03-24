import { useEffect, useState } from "react"


function useKeyPress(key) {
    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === key) setIsPressed(true)
        }

        function handleKeyUp(e) {
            if (e.key === key) setIsPressed(false)
        }

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("keyup", handleKeyUp)
        }
    }, [])
    return isPressed
}

export default useKeyPress
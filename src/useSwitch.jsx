import { useState } from "react"


function useSwitch(initialValue = false) {
    const [isOn, setIsOn] = useState(initialValue)

    function toggle() {
        setIsOn(!isOn)
    }

    return [isOn, toggle]
}

export default useSwitch
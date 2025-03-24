import { useState } from "react"


function useSwitch() {
    const [value, setValue] = useState(false)

    function toggle() {
        setValue(!value)
    }

    return [value, toggle]
}

export default useSwitch
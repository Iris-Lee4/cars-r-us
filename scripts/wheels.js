import { setWheel } from "./transientState.js";

const handleWheelChange = (change) => {
    if(change.target.id === 'wheels') {
        setWheel(parseInt(change.target.value))
    }
}

export const wheelsOptions = async () => {
    const response = await fetch('http://localhost:8088/wheels')
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChange)

    let wheelsHTML = '<select id="wheels"><option value=0>Select a wheel style</option>'

    const wheelsString = wheels.map((wheel) => {
            return `<option value="${wheel.id}">${wheel.type}
            </option>`
        }
    )
    wheelsHTML += wheelsString.join("")
    wheelsHTML += '</select>'

    return wheelsHTML;
};
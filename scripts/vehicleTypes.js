import { setVehicleType } from "./transientState.js";

const handleVehicleTypeChange = (change) => {
    if(change.target.name === 'vehicleType') {
        setVehicleType(parseInt(change.target.value))
    }
}

export const vehicleTypes = async () => {
    const response = await fetch('http://localhost:8088/vehicleTypes')
    const vehicles = await response.json()

    document.addEventListener("change", handleVehicleTypeChange)

    let vehiclesHTML = ''

    const vehiclesString = vehicles.map((vehicle) => {
            return `<div><input type ='radio' name='vehicleType' value='${vehicle.id}' /> ${vehicle.type}</div>`
        }
    )
    vehiclesHTML += vehiclesString.join("")

    return vehiclesHTML;
};
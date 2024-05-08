import { setInterior} from "./transientState.js";

const handleInteriorChange = (change) => {
    if(change.target.id === 'interiors') {
        setInterior(parseInt(change.target.value))
    }
}

export const interiorOptions = async () => {
    const response = await fetch('http://localhost:8088/interiors')
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChange);

    let interiorsHTML = '<select id="interiors"><option value=0>Select an interior material</option>'

    const interiorsString = interiors.map((interior) => {
            return `<option value="${interior.id}">${interior.type}
            </option>`
        }
    )
    interiorsHTML += interiorsString.join("")
    interiorsHTML += '</select>'

    return interiorsHTML;
};
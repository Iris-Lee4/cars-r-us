import { setColor } from "./transientState.js";

const handleColorChange = (change) => {
    if(change.target.id === 'colors') {
        setColor(parseInt(change.target.value))
    }
}

export const colorOptions = async () => {
    const response = await fetch('http://localhost:8088/colors')
    const colors = await response.json()

    document.addEventListener("change", handleColorChange)

    let colorsHTML = '<select id="colors"><option value=0>Select a paint color</option>'

    const colorsString = colors.map((color) => {
            return `<option value="${color.id}">${color.type}
            </option>`
        }
    )
    colorsHTML += colorsString.join("")
    colorsHTML += '</select>'

    return colorsHTML;
};
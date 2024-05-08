import { setTech } from "./transientState.js";

const handleTechChange = (change) => {
    if(change.target.id === 'techs') {
        setTech(parseInt(change.target.value))
    }
}

export const techOptions = async () => {
    const response = await fetch('http://localhost:8088/tech')
    const techs = await response.json()

    document.addEventListener("change", handleTechChange);

    let techsHTML = '<select id="techs"><option value=0>Select a technology package</option>'

    const techsString = techs.map((tech) => {
            return `<option value="${tech.id}">${tech.type}
            </option>`
        }
    )
    techsHTML += techsString.join("")
    techsHTML += '</select>'

    return techsHTML;
};
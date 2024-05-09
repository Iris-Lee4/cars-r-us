const transientState = {
    "colorsId": 0,
    "interiorsId": 0,
    "wheelsId": 0,
    "techsId": 0
}

//setter functions below
export const setColor = (chosenColor) => {
    transientState.colorsId = chosenColor
    console.log(transientState)
}

export const setInterior = (chosenInterior) => {
    transientState.interiorsId = chosenInterior
    console.log(transientState)
}
export const setWheel = (chosenWheel) => {
    transientState.wheelsId = chosenWheel
    console.log(transientState)
}
export const setTech = (chosenTech) => {
    transientState.techsId = chosenTech
    console.log(transientState)
}

//add new object to database

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}
const transientState = {
    "colorId": 0,
    "interiorId": 0,
    "wheelId": 0,
    "techId": 0
}

//setter functions below
export const setColor = (chosenColor) => {
    transientState.colorId = chosenColor
    console.log(transientState)
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}
export const setWheel = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}
export const setTech = (chosenTech) => {
    transientState.techId = chosenTech
    console.log(transientState)
}

//add new object to database

// export const placeOrder = async () => {
//     const postOptions = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(transientState)
//     }
// }

// const response = await fetch("http://localhost:8088/orders", postOptions)

// const customEvent = new CustomEvent("newOrderCreated")
// document.dispatchEvent(customEvent)

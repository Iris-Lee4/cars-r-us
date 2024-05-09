import { placeOrder } from "./transientState.js";

//add click event for button
const handlePlacedOrder = (clickEvent) => {
    if (clickEvent.target.id === 'placeOrder') {
        placeOrder();
    }
}

//add button to place order
export const placeOrderButton = () => {

    document.addEventListener('click', handlePlacedOrder)

    return "<div><button id='placeOrder'>Place Car Order</button></div>"
}

//html for orders placed
export const Orders = async () => {
    //fetch order info
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=colors&_expand=interiors&_expand=techs&_expand=wheels")
    const orders = await fetchResponse.json()

    let ordersHTML = ''
        const ordersString = orders.map((order) => {
            const orderPrice = order.colors.price + order.interiors.price + order.techs.price + order.wheels.price
            const orderPriceFormatted = orderPrice.toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        })
            return `<div class="orders_detail">${order.colors.type} car with ${order.wheels.type} wheels, ${order.interiors.type} interior, and the ${order.techs.type} for a total cost of ${orderPriceFormatted}</div>`
        }
    )
    ordersHTML += ordersString.join("")
    return ordersHTML;
}
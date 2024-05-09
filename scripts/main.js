import { wheelsOptions } from "./wheels.js";
import { colorOptions } from "./colors.js";
import { interiorOptions } from "./interiors.js";
import { techOptions } from "./tech.js";
import { placeOrderButton } from "./orders.js";
import { Orders } from "./orders.js";

const container = document.querySelector('#container');

const render = async () => {
    const wheelsHTML = await wheelsOptions();
    const colorsHTML = await colorOptions();
    const interiorHTML = await interiorOptions();
    const techHTML = await techOptions();
    const orderButtonHTML = await placeOrderButton();
    const ordersHTML = await Orders();

    const containerHTML = `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    <article class="choices">
        <section class="choices_paints options">
            <h2>Paints</h2>
            ${colorsHTML}
            </section>
        <section class="choices_interior options">
            <h2>Interior</h2>
            ${interiorHTML}
            </section>
        <section class="choices_wheels options">
            <h2>Wheels</h2>
            ${wheelsHTML}
            </section>
        <section class="choices_tech options">
            <h2>Technologies</h2>
            ${techHTML}
            </section>
    </article>
    <article class="orderButton">
        ${orderButtonHTML}
    </article>
    <article class="orders">
        <h2>Custom Car Orders</h2>
        <section class="orders_list">
        ${ordersHTML}
        </section>
    </article>
    `
    container.innerHTML = containerHTML;
}
//listening to custom event that was added and will render each time
//this is where the event was dispatched to
document.addEventListener("newOrderCreated", render);

render();
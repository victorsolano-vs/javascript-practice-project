import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


Promise.all([
    loadProductsFetch(), 
    new Promise((resolve) => {
        loadCart(() => {
            resolve()
        })
    })

]).then((values) => {
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary();
})


async function loadPage(){
    console.log('heyyy')
}
loadPage().then((value) => {
    console.log('yoooo')
})

// Promise.all([
//     new Promise((resolve) => {
//         loadProducts(() => {
//             resolve()
//         })
//     }), 
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve()
//         })
//     })

// ]).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// })


/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1')
    })

}).then((value) => {

    console.log(value)
    return new Promise((resolve) => {
        loadCart(() => {
            resolve()
        })
    })
    
}).then(() => {
        renderOrderSummary();
        renderPaymentSummary();
})
*/
// loadProducts(() =>{
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     })
    
// });

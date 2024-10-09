import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


async function loadPage(){

    try{
        await loadProductsFetch()

        await new Promise((resolve) =>{
            loadCart(() => {
                resolve()
            })
        })

    } catch (error) {
        console.log('unexpected error. Please try again later.')
    }


    

    renderOrderSummary();
    renderPaymentSummary();


}
loadPage()


// Promise.all([
//     loadProductsFetch(), 
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve()
//         })
//     })

// ]).then((values) => {
//     console.log(values)
//     renderOrderSummary();
//     renderPaymentSummary();
// })




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

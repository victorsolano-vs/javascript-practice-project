export const orders = JSON.parse(localStorage.getItem('orders')) || []

export function addOrder(order) {
    orders.unshift(order)
    //unshift adds to the front of array not back
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders))
}
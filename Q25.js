function findMostFrequentCustomer(orders) {
    let maxCustomer = "";
    let maxCount = 0;

    for (let i = 0; i < orders.length; i++) {
        let count = 0;

        for (let j = 0; j < orders.length; j++) {
            if (orders[i] === orders[j]) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            maxCustomer = orders[i];
        }
    }

    return maxCustomer;
}   

console.log(findMostFrequentCustomer(["Rahul", "Amit", "Rahul", "Sita", "Rahul"]));
function getOrderInfo<T>(info: T): T {
    return info;
}

console.log(getOrderInfo<string>("Order  Delivered"));

console.log(getOrderInfo<number>(500));

console.log(getOrderInfo<{ id: number; item: string }>({
    id: 1,
    item: "Pizza"
}));
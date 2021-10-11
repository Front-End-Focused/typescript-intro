/**
 * Классы
 */
class Cart {
    constructor(items, currency) {
        this.total = 0;
        this.items = items;
        this.currency = currency;
    }
    static calcTotal(items) {
        // we cannot access this content inside static method!
        return items.map((item) => item.price).reduce((prevValue, currentValue) => prevValue + currentValue);
    }
    // constructor(
    //     public items: Item[],
    //     readonly currency: string,
    // ) {}
    getTotalPrice() {
        this.total = Cart.calcTotal(this.items);
        return this.total;
    }
}
const itemsList = [{ id: 1, price: 10 }, { id: 2, price: 15 }, { id: 3, price: 20 }];
// Cart.calcTotal(itemsList)
const firstCart = new Cart(itemsList, 'USD');
// firstCart.total = 350;
firstCart.getTotalPrice(); // 45

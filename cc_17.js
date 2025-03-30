// Task 1: Create a Customer Class
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.purchaseHistory = [];
  }

  addPurchase(amount) {
    this.purchaseHistory.push(amount);
  }

  getTotalSpent() {
    return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
  }
}

// Testing Task 1
console.log("Task 1: Customer Class");
const customer1 = new Customer("Lebron James", "lebronjames@gmail.com");
console.log("New customer created:", customer1);

customer1.addPurchase(100);
customer1.addPurchase(250);
customer1.addPurchase(75);

console.log(`${customer1.name} has spent a total of $${customer1.getTotalSpent()}`);

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


// Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    addClient(customer) {
      this.clients.push(customer);
    }
  
    getClientTotal(name) {
      const client = this.clients.find((client) => client.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }
  
  // Testing Task 2
  console.log("\nTask 2: SalesRep Class");
  const salesRep1 = new SalesRep("Maria");
  salesRep1.addClient(customer1);
  console.log("Sales rep's clients:", salesRep1.clients);
  console.log(`Total spent by ${customer1.name}: $${salesRep1.getClientTotal(customer1.name)}`);
  
  // Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
  
    getTotalSpent() {
      return super.getTotalSpent() * 1.1; // Add 10% bonus
    }
  }
  
  // Testing Task 3
  console.log("\nTask 3: VIPCustomer Class");
  const vipCustomer1 = new VIPCustomer("Serena Williams", "serena@gmail.com", "Platinum");
  vipCustomer1.addPurchase(500);
  vipCustomer1.addPurchase(1000);
  console.log(`${vipCustomer1.name} has spent a total of $${vipCustomer1.getTotalSpent()}`);

  // Task 4: Build a Client Report System
console.log("\nTask 4: Client Report System");
const customers = [customer1, vipCustomer1];
const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
const highSpenders = customers.filter((customer) => customer.getTotalSpent() > 500);
const customerSummary = customers.map((customer) => ({
  name: customer.name,
  totalSpent: customer.getTotalSpent(),
}));

console.log("Total revenue:", totalRevenue);
console.log("High-spending customers:", highSpenders);
console.log("Customer summary:", customerSummary);
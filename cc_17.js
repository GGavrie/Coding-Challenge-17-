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
    return parseFloat(this.purchaseHistory.reduce((total, amount) => total + amount, 0).toFixed(2));
  }
}

// Function to display customer information in the HTML
function displayCustomerInfo(customer) {
  const productContainer = document.getElementById('product-container');
  const customerDiv = document.createElement('div');
  customerDiv.innerHTML = `<h2>${customer.name}</h2><p>Email: ${customer.email}</p><p>Total Spent: $${customer.getTotalSpent().toFixed(2)}</p>`;
  productContainer.appendChild(customerDiv);
}

// Testing Task 1
console.log("Task 1: Customer Class");
const customer1 = new Customer("Lebron James", "lebronjames@gmail.com");
console.log("New customer created:", customer1);

customer1.addPurchase(100);
customer1.addPurchase(250);
customer1.addPurchase(75);

console.log(`${customer1.name} has spent a total of $${customer1.getTotalSpent().toFixed(2)}`);

// Display customer1 information on the webpage
displayCustomerInfo(customer1);

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
  console.log(`Total spent by ${customer1.name}: $${salesRep1.getClientTotal(customer1.name).toFixed(2)}`);
  
  // Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
  
    getTotalSpent() {
      return parseFloat((super.getTotalSpent() * 1.1).toFixed(2)); // Add 10% bonus
    }
  }
  
  // Testing Task 3
  console.log("\nTask 3: VIPCustomer Class");
  const vipCustomer1 = new VIPCustomer("Serena Williams", "serena@gmail.com", "Platinum");
  vipCustomer1.addPurchase(500);
  vipCustomer1.addPurchase(1000);
  console.log(`${vipCustomer1.name} has spent a total of $${vipCustomer1.getTotalSpent().toFixed(2)}`);

  // Display VIP customer information on the webpage
  displayCustomerInfo(vipCustomer1);

  // Task 4: Build a Client Report System
console.log("\nTask 4: Client Report System");
const customers = [customer1, vipCustomer1];
const totalRevenue = parseFloat(customers.reduce((total, customer) => total + customer.getTotalSpent(), 0).toFixed(2));
const highSpenders = customers.filter((customer) => customer.getTotalSpent() > 500);
const customerSummary = customers.map((customer) => ({
  name: customer.name,
  totalSpent: parseFloat(customer.getTotalSpent().toFixed(2)),
}));

console.log("Total revenue:", totalRevenue.toFixed(2));
console.log("High-spending customers:", highSpenders);
console.log("Customer summary:", customerSummary);
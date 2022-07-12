"use strict";

////////////////////////////// Creating a class for shop //////////////////////////////

class EShop {
	constructor(name, owner, address, billingInfo) {
		this.name = name;
		this.owner = owner;
		this.address = address;
		this.billingInfo = billingInfo;
		this.products = [];
		this.clients = [];
		this.carts = [];
	}
}

////////////////////////////// Creating a class for products  //////////////////////////////

class Product {
	constructor(description, price, images, title, code) {
		this.description = description;
		this.price = price;
		this.images = images;
		this.title = title;
		this.code = code;
	}
}

////////////////////////////// Creating a class for Product Manager //////////////////////////////

class ProductManager {
	constructor(products) {
		this.products = products;
	}

	addItem(...products) {
		this.products.push(...products);
	}

	deleteItem(product) {
		const indexFound = this.products.findIndex(
			(item) => item.code === product.code
		);

		if (indexFound > -1) {
			this.products.splice(indexFound, 1);
		} else {
			console.log("Product not found");
		}
	}

	listOfItems() {
		this.products;
	}
}

////////////////////////////// CREATING A SHOP  //////////////////////////////

const shop = "Simple stuff";

const shopAddress = {
	street: "Berlinerstr",
	number: 100,
	postCode: 13595
};

const shopBillingInfo = {
	...shopAddress,
	vat: "123",
	shop
};

const simpleStuff = new EShop(
	shop,
	"Natalia Banz",
	shopAddress,
	shopBillingInfo
);

////////////////////////////// CREATING THE PRODUCTS //////////////////////////////

const painting = new Product(
	"This is my first painting",
	130,
	"https://www.gevshop.com/?product_id=116086360_38",
	"Landscape from my village",
	0001
);

const handmadeToy = new Product(
	"Selfmade Toy",
	150,

	"https://www.flipkart.com/destino-pink-unicorn-plush-toy-stuffed-animal-pillow-cushion-soft-toys-baby-kids-24-cm/p/itm00a6254e46e9c",
	"Unicorn",
	0002
);
const ceramic = new Product(
	"Ceramic Vase",
	250,
	"https://www.thoughtco.com/ceramic-definition-chemistry-4145312",
	"Vase",
	0003
);

const productsManager = new ProductManager(simpleStuff.products);

////////////////////////////// CREATING A CLASS FOR A CLIENT //////////////////////////////

class Client {
	constructor(name, email, address, bday) {
		this.name = name;
		this.email = email;
		this.address = address;
		this.bday = bday;
	}
}

const jan = new Client("Jan", "jankowalski@email.com", "Berlin", "11/3/1970");
const maria = new Client(
	"Maria",
	"mariamarina@email.com",
	"Munchen",
	"1/12/1984"
);
const sebastian = new Client(
	"Sebastian",
	"sebastiansebastian@email.com",
	"Heidenheim",
	"1/3/1992"
);

////////////////////////////// CREATING A CLASS FOR A CLIENT MANAGER//////////////////////////////

class ClientManager {
	constructor(clients) {
		this.clients = clients;
	}

	addClient(...clients) {
		this.clients.push(...clients);
	}

	removeClient(client) {
		const index = this.clients.findIndex(
			(item) => item.name === client.name
		);

		if (index > -1) {
			this.clients.splice(index, 1);
		} else console.log("Client not found");
	}

	listClients() {
		this.clients;
	}
}

const clientManager = new ClientManager(simpleStuff.clients);

////////////////////////////// CREATING A CLASS FOR A CART//////////////////////////////

class Cart {
	constructor(client) {
		this.client = { ...client };
		this.products = [];
	}
}

const janCart = new Cart(jan);
const mariaCart = new Cart(maria);
const sebastianCart = new Cart(sebastian);

class CartManager {
	constructor(carts) {
		this.carts = carts;
	}
	addCart(...carts) {
		this.carts.push(...carts);
	}

	addProduct(client, product) {
		const indexCart = this.carts.findIndex(
			(item) => item.client.email === client.email
		);

		if (indexCart > -1) {
			this.carts[indexCart].products.push(product);
			console.log(
				"Cart for client after adding a product:",
				this.carts[indexCart].products
			);
		} else console.log("Client not found, no product added");
	}

	removeProduct(client, product) {
		const clientIndex = this.carts.findIndex(
			(item) => item.client.email === client.email
		);

		if (clientIndex > -1) {
			const productIndex = this.carts[clientIndex].products.findIndex(
				(item) => item.code === product.code
			);

			if (productIndex > -1) {
				this.carts[clientIndex].products.splice(productIndex, 1);
			} else {
				console.log("Product not found. Nothing removed");
			}
		} else console.log("Client not found, no product removed");
	}

	emptyCart(client) {
		const clientIndex = this.carts.findIndex(
			(item) => item.client.email === client.email
		);

		if (clientIndex > -1) {
			this.carts[clientIndex].products = [];
		} else console.log("Client not found, no cart was emptied");
	}

	listProductsForClient(client) {
		const clientIndex = this.carts.findIndex(
			(item) => item.client.email === client.email
		);

		if (clientIndex > -1) {
			console.log(
				"Cart for client contains:",
				this.carts[clientIndex].products
			);
		} else console.log("Client not found, no products listed");
	}

	calcTotalForClient(client) {
		const clientIndex = this.carts.findIndex(
			(item) => item.client.email === client.email
		);

		if (clientIndex > -1) {
			const total = this.carts[clientIndex].products.reduce(
				(total, item) => (total += item.price),
				0
			);

			console.log("Total for client is:", total);
		} else console.log("Client not found, no total was calculated");
	}
}

const cartManager = new CartManager(simpleStuff.carts);
cartManager.addCart(janCart, mariaCart, sebastianCart);
console.log("---------------------------");
cartManager.addProduct(jan, painting);
cartManager.addProduct(sebastian, ceramic);
cartManager.addProduct(maria, painting);
cartManager.addProduct(maria, handmadeToy);
cartManager.addProduct("somebody", ceramic);
console.log("---------------------------");
cartManager.removeProduct(jan, painting);
cartManager.removeProduct(jan, "not existed product");
console.log("---------------------------");

cartManager.emptyCart(jan);
cartManager.emptyCart("unknown user");
console.log("---------------------------");

cartManager.listProductsForClient(maria);
cartManager.listProductsForClient("unknown user");
console.log("---------------------------");
cartManager.calcTotalForClient(sebastian);
cartManager.calcTotalForClient(jan);
cartManager.calcTotalForClient(maria);
cartManager.calcTotalForClient("unknown user");

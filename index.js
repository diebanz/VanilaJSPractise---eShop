"strict mode";

// Creating a class for shop

class Eshop {
	construct(name, owner, address, billingInfo) {
		this.name = name;
		this.owner = owner;
		this.address = address;
		this.billingInfo = billingInfo;
		this.products = [];
		this.clients = [];
		this.carts = [];
	}
}

// Creating a class for products

class Product {
	constructor(description, price, images, title, code) {
		this.description = description;
		this.price = price;
		this.images = images;
		this.title = title;
		this.code = code;
	}
}

// Creating a class for Product Manager

class ProductManager {
	constructor(products) {
		this.products = products;
	}

	addItem(...products) {
		this.products.push(...products);
		console.log("Products after addition: ", this.products);
	}

	deleteItem(product) {
		const indexFound = this.product.findIndex(
			(item) => item.code === product.code
		);

		if (indexFound > -1) {
			this.products.splice(index, 1);
			console.log("Products array after deletion", this.products);
		} else {
			console.log("Product not found");
		}
	}
}

// Creating a company with the class Eshop

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

console.log(shopBillingInfo);

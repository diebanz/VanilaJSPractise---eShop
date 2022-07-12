"strict mode";

// Creating a class for shop

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
	}

	deleteItem(product) {
		const indexFound = this.products.findIndex(
			(item) => item.code === product.code
		);

		if (indexFound > -1) {
			this.products.splice(indexFound, 1);
			console.log("Products array after deletion", this.products);
		} else {
			console.log("Product not found");
		}
	}

	listOfItems() {
		//console.log("List all Products:", this.products);
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

const simpleStuff = new EShop(
	shop,
	"Natalia Banz",
	shopAddress,
	shopBillingInfo
);

////////// Creating the products with class Product

const painting = new Product(
	"This is my first painting",
	130,
	["https://www.gevshop.com/?product_id=116086360_38"],
	"Landscape from my village",
	0001
);

const handmadeToy = new Product(
	"Selfmade Toy",
	150,
	[
		"https://www.flipkart.com/destino-pink-unicorn-plush-toy-stuffed-animal-pillow-cushion-soft-toys-baby-kids-24-cm/p/itm00a6254e46e9c"
	],
	"Unicorn",
	0002
);
const ceramic = new Product(
	"Ceramic Vase",
	250,
	["https://www.thoughtco.com/ceramic-definition-chemistry-4145312"],
	"UVase",
	0003
);

/// ADDING PRODUCTS

const productsManager = new ProductManager(simpleStuff.products);
productsManager.addItem(painting);
productsManager.addItem(ceramic);
productsManager.deleteItem(painting);
console.log(simpleStuff);

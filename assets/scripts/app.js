class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title,imageUrl,description,price)
    {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

};

class ProductItem {
    constructor(product)
    {
        this.product = product;
    }

    render(){
        const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src = "${this.product.imageUrl}" alt = "${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button> Add to cart </button>
                </div>
            </div>
            `;
            return prodEl;
    }
};

class ProductList {
    products = [
        new Product('A Pillow','https://nymag.com/strategist/article/best-throw-pillows.html','A soft pillow', 2.33),
        new Product('A Carpet', 'https://www.thespruce.com/overview-of-carpet-choices-1315092','A good quality carpet', 5.33)
    ];

    constructor(){ }

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for(const prod of this.products)
        {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
} 

const productList = new ProductList();
productList.render();
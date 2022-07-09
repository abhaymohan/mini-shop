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
    };

    some () {
        console.log(hello);
    }
}

//class 

console.log(new Product);

const productList = {
    products : [
        new Product('A Pillow','https://nymag.com/strategist/article/best-throw-pillows.html','A soft pillow', 2.33),
        new Product('A Carpet', 'https://www.thespruce.com/overview-of-carpet-choices-1315092','A good quality carpet', 5.33)
    ],

    

    render : function ()  {

        console.log(this);
        console.log(this.products[0]);
        console.log(this.products[1]);
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for(const prod of this.products)
        {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src = "${prod.imageUrl}" alt = "${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button> Add to cart </button>
                </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }

};

productList.render();
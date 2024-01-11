// OOP:  Adding all products, the array, rendering logic and methods in a single object.
// Classes allow us to provide the blueprint for objects. They make the creation of multiple similar objects easier.
// You can add the normal object structure to a class along with the methods to go with it (called constructor).

class Product {
    title = 'DEFAULT';
    imgUrl;
    description;
    price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imgUrl = image;
        this.description = desc;
        this.price = price
    }
}

const productList = {

    products: [
        new Product('A Pillow', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nPo4n21o_n6pOKLsFq2a0VitqCNCrhRDlw&usqp=CAU', 'A soft pillow', 19.99),
        new Product('A Carpet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUCECCg5FY-YNazTKUAM-Et5QsReMGWh3Kg&usqp=CAU', 'A soft carpet', 89.99)

    ],
    render() {
        const renderHook = document.getElementById('app')
        const prodList = document.createElement('ul')
        prodList.className = 'product-list'
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `<div>
                <img src="${prod.imgUrl} alt=${prod.title}" />
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                     <h3>${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button> Add to Cart </buttton>
                </div>
            </div>`;
            prodList.append(prodEl)
        }
        renderHook.append(prodList)
    }
}

productList.render()
const URI_BACKEND = "http://127.0.0.1:8000";

const cardProduct = (product) => (`
    <div class="col-md-4 my-2" >
    <div class="card">
    <img style="height:350px;" src="${product.url_image ? product.url_image : 'img/not_found_image.png'}" class="card-img-top" alt="imagen de producto">
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">$${product.price}</p>
    </div>
    </div>
    </div>`);

const mostrarData = (data) => {
    let content = document.getElementById('data');
    content.innerHTML = "";
    let body = '';
    for (const product of data) {
        body += cardProduct(product);
    }

    content.innerHTML = body;
}

fetch(`${URI_BACKEND}/api/product`)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const searchInput = document.getElementById("search");

searchInput.addEventListener('keyup', (event) => {
    if (event.code == 'Enter') findProduct();
})

const findProduct = () => {
    console.log("Buscando producto... " + searchInput.value);
    fetch(`${URI_BACKEND}/api/searchProduct`, {
        method: 'POST',
        body: JSON.stringify({ search: searchInput.value }),
        headers: { "Content-type": "application/json; charset=UTF-8" }

    }).then(res => res.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error));
}
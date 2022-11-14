    
    const cardProduct = (product) => (`
    <div class="col-md-4 my-2" >
    <div class="card">
    <img style="height:350px;" src="${product.url_image?product.url_image:'/img/not_found_image.png'}" class="card-img-top" alt="imagen de producto">
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">$${product.price}</p>
    </div>
    </div>
    </div>`

    )
     
    let url= "http://127.0.0.1:8000/api/product/"
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) =>{
        console.log(data)
        let body = ''
        for (let i = 0; i < data.length; i++) {
            body += cardProduct(data[i])
            
        }

        document.getElementById('data').innerHTML = body

    }
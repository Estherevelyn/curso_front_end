

const container = document.querySelector('.container')

fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
           .then(json=>{
            console.log(produto)
            
            produto.array.forEach(produto => {
                container.innerHTML += ` <h2>${Eletrônicos.tittle}</h2>
                <div class="all-products">
                  <div class="product">
                    <img src=${produto.image}"../../Imagens/AirPod 2nd Gen.jpg">
                    <div class="${produto.description}product-info">
                      <h4 class="product-title">AirPod 2nd Gen
                      </h4>
                      <p class="product-price">${produto.price}R$849,00</p>
                      <a class="product-btn" href="#">Comprar</a>
            
                    </div>
                  </div>
                  <div class="product">
                    <img src="../../Imagens/apple-watch-pcq.jpg">
                    <div class="product-info">
                      <h4 class="product-title">Apple Watch
                      </h4>
                      <p class="product-price">R$1861,00</p>
                      <a class="product-btn" href="#">Comprar</a>
            
                    </div>
                  </div>
                  <div class="product">
                    <img src="../../Imagens/iphone 14.jpg">
                    <div class="product-info">
                      <h4 class="product-title">iPhone 14
                      </h4>
                      <p class="product-price">R$7.099,00</p>
                      <a class="product-btn" href="#">Comprar</a>
            
                    </div>
                  </div>
                  <div class="product">
                    <img src="../../Imagens/ipad-pro.jpg">
                    <div class="product-info">
                      <h4 class="product-title">iPan Pro
                        </h4>
                      <p class="product-price">R$6.080,00</p>
                      <a class="product-btn" href="#">Comprar</a>
            
                    </div>
                  </div>
                </div>
                </article>`
            });
        
           })
var products = document.querySelectorAll(".container-items li")
var btn = document.getElementById("btn")
var show_product = document.querySelector(".show-products p")
var total_price = document.querySelector("#total-price p")
var parent = document.getElementById("total-price")
var total = 0
var count = 0


products.forEach( function(item){
    var cart = item.querySelector(".plus")
    var heart = item.querySelector(".heart")
    heart.onclick = function(){
        heart.style.color = "#5a189a"
    }
    cart.onclick = function() {
        if( count >= 20){
            total = total
            show_product.style.color = "#5b0d0dd2"
            show_product.innerHTML = "You can't order more than 20"
        }
        count++
    cart.style.backgroundColor = "#5a189a"
    var product_name =  item.querySelector("h4 span") 
    show_product.innerHTML += product_name.textContent + "  -  "
    var price = item.querySelector("h6 span").textContent
    total += +(price)
       if(show_product.innerHTML != ""){
        btn.style.display = "block"
        parent.style.display = "block"
    }

    }
        btn.onclick = function(){
    btn.style.backgroundColor  = "rgb(5, 78, 5)"
    btn.style.transition = ".3s"
    btn.style.transform  = "scale(1.1)"
    total_price.innerHTML = total
    back()
    }  
})
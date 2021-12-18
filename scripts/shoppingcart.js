
var shoppingCartDataX=[
    {image:`https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202151/0209/img54j.jpg`,
    name:"Raylan Recycled Glass USB Table Lamp, Bronze & Brass",
    price: 500,
   id:"#84-6871521"},
   {image:`https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202134/4681/img90j.jpg`,
    name:`60" Spitfire Indoor/Outdoor Ceiling Fan, Black Motor with White Blades`,
    price: 500,
   id:"#84-6871521"},

   {image:`https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202151/0209/img54j.jpg`,
   name:"Raylan Recycled Glass USB Table Lamp, Bronze & Brass",
   price: 500,
  id:"#84-6871521"},
  {image:`https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202134/4681/img90j.jpg`,
  name:`60" Spitfire Indoor/Outdoor Ceiling Fan, Black Motor with White Blades`,
  price: 500,
 id:"#84-6871521"}
]

localStorage.setItem("ShoppingCartData",JSON.stringify(shoppingCartDataX))

var CartData=JSON.parse(localStorage.getItem("ShoppingCartData"))

console.log(CartData)


var totolPrice=0;
var totalArr=[]
appendCartItem()



function appendCartItem(){
    var shoppogDiv=document.getElementById("cartItemsDiv")
    shoppogDiv.innerHTML=null
    CartData.forEach((item,index) => {
        var subtotal=item.price;
        // console.log(index)
        totalArr[index]=subtotal

        var itemDiv=document.createElement("div")
        itemDiv.id="cartItembox"
        shoppogDiv.append(itemDiv)


        var imgDiv=document.createElement("div")
        imgDiv.id="imgDiv"
        var pimage=document.createElement("img")
        pimage.src=item.image


        var removeDiv=document.createElement("div")
        var save=document.createElement("p")
        save.textContent="Save For Later"
        var removebtn=document.createElement("p")
        removebtn.textContent="Remove"



        removebtn.addEventListener("click",function(){
            CartData.splice(index, 1)
            totalArr.splice(index, 1)
            localStorage.setItem("ShoppingCartData",JSON.stringify(CartData))
           console.log("clicked",CartData)
           appendCartItem()
           total()
            
        })

        removeDiv.append(save,` |`,removebtn)
        imgDiv.append(pimage,removeDiv)
        

        var nameDiv=document.createElement("div")

        var productName=document.createElement("h3")
        productName.textContent=item.name

        
        var priceDiv=document.createElement("div")
        priceDiv.id="priceDiv"
        var price=document.createElement("p")
       price="$"+item.price
       
       var qdiv=document.createElement("div")
       qdiv.id="qdiv"

       var qinput=document.createElement("input")
       qinput.id="qinput"
       qinput.placeholder="1"
       
       var updateBtn=document.createElement("p")
       updateBtn.innerHTML="<b>Update</b>"



       updateBtn.addEventListener("click",function(){
        subtotal=item.price;
        subtotal*=qinput.value;
           console.log(subtotal)
           totext1.textContent="$"+subtotal
           totalArr[index]=subtotal
           total()
           
       })

       qdiv.append(qinput,updateBtn)

       var totolDiv=document.createElement("div")

       var totext=document.createElement("p")
       totext.textContent="Item Total"
       
       var totext1=document.createElement("p")
       totext1.textContent="$"+item.price

       totolDiv.append(totext,totext1)

       priceDiv.append(price,qdiv,totolDiv)



        

        var text=document.createElement("p")
        text.innerHTML="<b>Delivery Estimate:</b>"

        var text2=document.createElement("p")
        text2.textContent="Enter Postal Code for a better delivery estimate."
        nameDiv.append(productName,priceDiv,text,text2)
        itemDiv.append(imgDiv,nameDiv)
    });
}

function total(){
    totolPrice=0;
    totalArr.forEach(item => {
        totolPrice+=item
        var disTotal=document.getElementById("cartTotalPrice")
disTotal.innerHTML=`<b>$ ${totolPrice}</b>`
    
    });
}
total()


var disItem=document.getElementById("cartTotalItem")
disItem.textContent=`(${CartData.length} Item)`
console.log(totolPrice)

var checkoutBtn=document.getElementById("cartCheckout")


checkoutBtn.onclick=function(){
    window.location.href="checkout.html"
}
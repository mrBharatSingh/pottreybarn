var applyflag=true

var checkoutApply=document.getElementById("checkoutApply")

checkoutApply.addEventListener("click", function(){
    console.log("click")
    if(applyflag)
    {
        document.getElementById("checkoutApplyDiv").style.display="block"
        applyflag=false
    }
    else{
        document.getElementById("checkoutApplyDiv").style.display="none"
        applyflag=true
    }
})

promoflag=true
var promo=document.getElementById("promoCodeinputH3")

promo.addEventListener("click",function(){
    if(promoflag){
        document.getElementById("promoCodeinputDivINP").style.display="flex"
        promoflag=false
    }
    else{
        document.getElementById("promoCodeinputDivINP").style.display="none"
        promoflag=true
    }

})

var box1=document.getElementById("addMainBox")
var box2=document.getElementById("addMainBox1")
var box3=document.getElementById("addMainBox2")

var continueBtn=document.getElementById("CheckoutAddConti")

continueBtn.addEventListener("click",function(){

    var name=document.getElementById("cfullname").value;
    var address=document.getElementById("cAddress").value;
    var city=document.getElementById("cCity").value;
    var select=document.getElementById("checkoutState").value;
    var zip=document.getElementById("czip").value;
    var phone=document.getElementById("cphone").value;
   
    if(name.length>=4 && address.length>=4 && city.length>=4 && select!="state" && zip.length>=4 && phone.length==10)
    {
        console.log("pass")
        console.log(name,address,city,select,zip,phone)
        box1.style.display="none"
        box2.style.display="block"
    }
    
})

var continueBtn1=document.getElementById("CheckoutAddConti1")
 
continueBtn1.addEventListener("click",function(){
    box2.style.display="none"
    box3.style.display="block"
})


var continueBtn2=document.getElementById("CheckoutAddConti2")
 
continueBtn2.addEventListener("click",function(){
    

    var cardno=document.getElementById("cCardNo").value
    var Exp=document.getElementById("checkoutExp").value
    var Cvv=document.getElementById("checkoutCVV").value

    if(cardno.length>=16 && Exp.length>=4 && Cvv.length==3)
    {
        alert("your order is placed")
        console.log(cardno,Exp,Cvv)
        // checkoutData=[]
        qtyarr=[]

        var CartData=JSON.parse(localStorage.getItem("ShoppingCartData"))

        CartData=[]

        localStorage.setItem("ShoppingCartData" ,JSON.stringify(CartData))
        localStorage.setItem("qtyarr" ,JSON.stringify(qtyarr))
       
        window.location.href="index.html"
        
    }
    else("Please valid Card Detail")

})

var cartIcon=document.getElementById("checkoutCart")
cartIcon.onclick=function(){
    window.location.href="shoppingcart.html"
}

var cartlen=document.getElementById("CartIconP")
var cartlenX=document.getElementById("yourItem")

function cartTlength(){
    var cartArrdataxx=JSON.parse(localStorage.getItem("ShoppingCartData"))
    cartlen.textContent="Cart("+cartArrdataxx.length+")"
    cartlenX.textContent="Your Order("+cartArrdataxx.length+" "+"Item)"

}
cartTlength()

var checkoutData=JSON.parse(localStorage.getItem("ShoppingCartData"))
var qtyarr=JSON.parse(localStorage.getItem("qtyarr"))
var qtyarr=qtyarr.map(Number)
console.log(checkoutData,qtyarr)

var totalCkeck=0;

function checkoutAppend(){
    var appendDiv=document.getElementById("displaypp")
    checkoutData.forEach((item,index) => {
        var itemdiv=document.createElement("div")
        itemdiv.id="itemdivCk"
        appendDiv.append(itemdiv)
        var est=document.createElement("p")
        est.id="est"
        est.textContent="ESTIMATED DELIVERY DATE"

        var today=new Date()
        today=today.getDate()

        const monthx = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

        const d = new Date();
        let month = monthx[d.getMonth()];

        var date=document.createElement("p")
        date.id="date"
        date.textContent=month+(today+7)+"-"+month+(today+8)



        var infodiv=document.createElement("div")
        infodiv.id="infodivCk"
        var imge=document.createElement("img")
        imge.id="checkimgapp"
        imge.src=item.image


        var namediv=document.createElement("div")
        var name=document.createElement("div")
        name.textContent=item.name
        var id=document.createElement("div")
        id.textContent=item.id;
        var qty=document.createElement("div")
        qty.textContent="QTY: "+" "+qtyarr[index];

        namediv.append(name,id,qty)

        totalCkeck+=item.price*qtyarr[index];
        var price=document.createElement("p")
        price.innerHTML=`<b>$${item.price*qtyarr[index]}</b>`

        infodiv.append(imge,namediv,price)

        var next=document.createElement("p")
        next.id="ckNext"
        next.textContent="This item is not eligible for Next Day shipping."

        itemdiv.append(est,date,infodiv,next)


    });


}

checkoutAppend()

var finalPrice=document.getElementById("finalPrice")
var finalPrice1=document.getElementById("finalPrice1")

finalPrice.textContent="$"+totalCkeck;
finalPrice1.textContent="$"+totalCkeck;
console.log(totalCkeck)

var secondlogo=document.getElementById("secondlogo")
secondlogo.onclick=function(){
    window.location.href="index.html"
}
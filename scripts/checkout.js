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
        
    }

})
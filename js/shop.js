function sell(){
    const inputField=document.getElementById("input-field");
    inputField.value="SELL200";
}

function apply(){
    const inputField=document.getElementById("input-field");
    const totalField=document.getElementById("total");
    const totalValue=parseFloat(totalField.innerText);
    if(inputField.value==="SELL200"){
        const discountField=document.getElementById("discount");
        const totalField=document.getElementById("total");
        const totalValue=parseFloat(totalField.innerText);
        const discountValue=(totalValue*0.2).toFixed(2);
        discountField.innerText=discountValue;
        totalField.innerText=(totalValue-discountValue).toFixed(2);
    }
    else{
        alert("Use valid coupon");
    }
}

function priceCalculation(product){
    console.log(product);
    const name=product+"-name";
    const price=product+"-price";
    const nameField=document.getElementById(name);
    const priceField=document.getElementById(price);
    const productName=nameField.innerText;
    const productPrice=priceField.innerText;
    console.log(productName);
    console.log(productPrice);
    const li=document.createElement('li');
    const cart=document.getElementById("cart");
    const count=cart.childElementCount;
    li.innerHTML=`${count+1}. ${productName}`;
    cart.appendChild(li);
    document.getElementById("hr").hidden = false;

    const totalPriceField=document.getElementById("total-price");
    const totalPrice=totalPriceField.innerText;
    newPrice=(parseFloat(totalPrice)+parseFloat(productPrice)).toFixed(2);
    totalPriceField.innerText=newPrice;
    document.getElementById("total").innerText=newPrice;
    if(newPrice>=200){
        const element=document.getElementById("apply-btn")
        element.disabled=false;
        element.style.backgroundColor = "#E527B2";
    }
}
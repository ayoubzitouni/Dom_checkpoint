var plsbtn=document.querySelectorAll('.pbtn')

var mnbtn=document.getElementsByClassName("mbtn")

var xbtn=document.getElementsByClassName("delete")
var total=Number(document.getElementById("price").innerHTML)
var qty =Number(document.getElementById("qtt").innerHTML)

for(let btn of plsbtn){
    btn.addEventListener("click",function(){
        price=Number(btn.parentNode.children[1].children[1].children[0].innerHTML)
        qty++;  
        total=total+price
        document.getElementById("price").innerHTML=total
        document.getElementById("qtt").innerHTML=qty
    })
}

for(let btn of mnbtn){
    btn.addEventListener('click',function(){
        price=Number(btn.parentNode.children[1].children[1].children[0].innerHTML)
        if(total>0 ){
            total-=price
            qty-=1
            document.getElementById("price").innerHTML=total
            document.getElementById("qtt").innerHTML=qty
        }           
    })
}
for(let btn of xbtn){
    btn.addEventListener('click',function(){
        let action=confirm("delete item")
        if(action){
            btn.parentNode.remove()
            alert("item removed")
        }else{
        }
        
    })
}

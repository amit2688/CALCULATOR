function display(val){
    document.getElementById("input-text").value+=val
    return val

}
function clearScreen(){
   var clr= document.getElementById("input-text").value=""
return clr
}
function solve(){
    let x=document.getElementById("input-text").value
      let y= eval(x)
      document.getElementById("input-text").value=y
      return y

}











































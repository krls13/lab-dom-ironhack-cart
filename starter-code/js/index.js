function deleteItem(e){
  console.log("delete");
}

function getPriceByProduct(itemNode){
    var elementTotalPrice = 0

    var precioElemento = parseInt(document.getElementsByClassName('price')[itemNode].innerHTML.slice(1,3))
    var cantidadElemento = parseInt(document.getElementsByClassName("quantity")[itemNode].value)

    if(cantidadElemento > 0){
      elementTotalPrice = precioElemento * cantidadElemento
    }
    
    document.getElementsByClassName("totalPrice")[itemNode].innerHTML = "$" + elementTotalPrice + ".00"

    return elementTotalPrice
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() { 
  var totalPrice = 0

  for(i = 0; i <= 1; i++){
    totalPrice += getPriceByProduct(i)
  }

  document.getElementById('final-price').innerHTML = "$" + totalPrice
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

};

function deleteItem(e){
  console.log("delete");
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}



function getTotalPrice() { 
  sum = 0
  for(i = 0; i <= 1; i++){
    var precioElemento = parseInt(document.getElementsByClassName('price')[i].innerHTML.slice(1,3))
    var cantidadElemento = parseInt(document.getElementsByClassName("quantity")[i].value)

    if(cantidadElemento > 0){
      sum = precioElemento * cantidadElemento
    }
    else {
      sum = 0
    }
    document.getElementsByClassName("totalPrice")[i].innerHTML = "$" + sum + ".00"
  } 
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

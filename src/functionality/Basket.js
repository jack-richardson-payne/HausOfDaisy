var Basket = (function() {
    var addItem = function(id, price, title){
        // ID
        var itemArray = [id];
        var retrieved = localStorage.getItem("basketId");
        var basketArray = JSON.parse(retrieved);

        console.log(basketArray);
        if(basketArray === null){
            basketArray = [itemArray];
        }
        else{
            basketArray.push(itemArray);
        }
        localStorage.setItem("basketId", JSON.stringify(basketArray));
        console.log(localStorage.getItem("basketId"));
        // price 
        var priceArray = [price];
        var retrieved2 = localStorage.getItem("basketPrice");
        var basketArray2 = JSON.parse(retrieved2);

        console.log(basketArray2);
        if(basketArray2 === null){
            basketArray2 = [priceArray];
        }
        else{
            basketArray2.push(priceArray);
        }
        localStorage.setItem("basketPrice", JSON.stringify(basketArray2));

        console.log(localStorage.getItem("basketPrice"));
        // title
        var titleArray = [title];
        var retrieved3 = localStorage.getItem("basketTitle");
        var basketArray3 = JSON.parse(retrieved3);

        console.log(basketArray3);
        if(basketArray3 === null){
            basketArray3 = [titleArray];
        }
        else{
            basketArray3.push(titleArray);
        }
        localStorage.setItem("basketTitle", JSON.stringify(basketArray3));

        console.log(localStorage.getItem("basketTitle"));
        console.log("Added"); 
    };

    var removeItem = function(id){

    };

    return {
        addItem: addItem,
        removeItem: removeItem
    };
})();

export default Basket;
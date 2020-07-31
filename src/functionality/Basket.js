/* eslint eqeqeq: 0 */
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
        var idArray = JSON.parse(localStorage.getItem("basketId"));
        var priceArray = JSON.parse(localStorage.getItem("basketPrice"));
        var titleArray = JSON.parse(localStorage.getItem("basketTitle"));
        var idArrayOut = [];
        var priceArrayOut = [];
        var titleArrayOut = [];
        console.log(idArray);
        for(var i = 0; i < idArray.length; i++){
            if(idArray[i] == id[0]){
                
            }
            else{
                idArrayOut.push(idArray[i]);
                priceArrayOut.push(priceArray[i]);
                titleArrayOut.push(titleArray[i]);
            }
        }

        localStorage.clear();
        localStorage.setItem("basketId", JSON.stringify(idArrayOut));
        localStorage.setItem("basketTitle", JSON.stringify(titleArrayOut));
        localStorage.setItem("basketPrice", JSON.stringify(priceArrayOut));
        


    };

    return {
        addItem: addItem,
        removeItem: removeItem
    };
})();

export default Basket;
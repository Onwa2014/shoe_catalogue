var colorDrop = document.querySelector('.color');
var sizeDrop = document.querySelector('.size');
var brandDrop = document.querySelector('.brand');

var search = document.querySelector('.search');
var output = document.querySelector('.output');
var dropD = document.querySelector('.dropdowns');

var add = document.querySelector('.add');
var addSpace = document.querySelector('#addSpace');

var addColor = document.querySelector('.addColor');
var addBrand = document.querySelector('.addBrand');
var addSize = document.querySelector('.addSize');
var addStock = document.querySelector('.addStock');
var addPrice = document.querySelector('.addPrice');
var submit = document.querySelector('.submit');


var myDropDownTemp = document.querySelector('.myDropDwnTemplate');
var dropDTemplateInst = Handlebars.compile(myDropDownTemp.innerHTML);

var myTemp = document.querySelector('.myTemplate');
var myTemplateInst = Handlebars.compile(myTemp.innerHTML);

//Array that contains my stock
var stock = [

];
function uniqList(list, field){
    var uniqList = [];
    var fieldMap = {};
    list.forEach(function(color){
        if (fieldMap[color[field]] === undefined){
          console.log(color[field]);
            uniqList.push(color[field]);
            fieldMap[color[field]] = color;
        }
    });
    return uniqList;
}
colorDrop.innerHTML = dropDTemplateInst({data : uniqList(stock, "color")});
sizeDrop.innerHTML = dropDTemplateInst({data : uniqList(stock, "size")});
brandDrop.innerHTML = dropDTemplateInst({data : uniqList(stock, "brand")});



search.addEventListener('click', function(){
  var shoeArray =[];

  for(var i = 0; i<stock.length;i++){
    var shoe = stock[i];
    if(colorDrop.value === 'all' && sizeDrop.value === 'all' && brandDrop.value === "all"){
      shoeArray.push(shoe);
    }
    else if(colorDrop.value === shoe.color && sizeDrop.value == shoe.size && brandDrop.value === "all"){
      shoeArray.push(shoe);
    }
    else if(colorDrop.value === shoe.color && sizeDrop.value === "all" && brandDrop.value === "all"){
        shoeArray.push(shoe);
    }
    else if(colorDrop.value === 'all' && sizeDrop.value == shoe.size && brandDrop.value === "all" ){
        shoeArray.push(shoe);
    }
    else if(colorDrop.value === 'all' && sizeDrop.value == "all" && brandDrop.value === shoe.brand){
        shoeArray.push(shoe);
    }
  }
  var results = myTemplateInst({matchingShoesKey: shoeArray});
  output.innerHTML = results;
})
add.addEventListener('click', function(){



  addSpace.style.display="inline";
    // colorsTable.innerHTML = colorsTableTemplate({colors : colorList});
    submit.addEventListener('click', function(){
      stock.push({
        color: addColor.value,
        size:addSize.value,
        price : addPrice.value,
        no_stock: addStock.value,
        brand:addBrand.value
      });
      colorDrop.innerHTML = dropDTemplateInst({data : uniqList(stock, "color")});
      sizeDrop.innerHTML = dropDTemplateInst({data : uniqList(stock, "size")});
      brandDrop.innerHTML = dropDTemplateInst({data : uniqList(stock, "brand")});

      addSpace.style.display="none";
    });
    // var addColor.innerHTML = "";
    // // var addBrand.innerHTML = "";
    // // var addSize.innerHTML = "";
    // // var addStock.innerHTML = "";
    // // var addPrice.innerHTML = "";

});

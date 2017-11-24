(function () {

var Pictures = document.querySelectorAll(".data-ref"),
Model = document.querySelector(".modelName"),
Pricing = document.querySelector(".priceInfo"),
Description = document.querySelector(".modelDetails"),
appliedClass;

function ChangeElements(){
let objectIndex = carData[this.id];
Model.firstChild.nodeValue = objectIndex.Car;
Pricing.firstChild.nodeValue = objectIndex.Price;
Description.firstChild.nodeValue = objectIndex.Description;

Pictures.forEach(function(element, index){
  element.classList.add('nonActive');
})

this.classList.remove('nonActive');

appliedClass = this.id;

}


Pictures.forEach(function(element, index){
element.addEventListener('click', ChangeElements, false);
});

})();

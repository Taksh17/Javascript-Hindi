//javascript ke andar ke sare events sequentially run hote hai
//but kuch aise hote hai ko sequentiall nhi hote hai
//syntax me pehle hmlog kya krenge element uthaenge by id ya class
//documnet.queryselect('byid/byclass).addeventlistner('kis type ke event se woh trigger hoga
//  example:-click,scroll etc,function(){},or third parameter hota h false)
//capturing upar se niche ke taraf hota hai isme default parameter true lete hai
//yeh top down approach ke tarha hai
//bubbling jo hai woh bottom up approach hai,isme default parameter false hota hai
// event.stopPropagation(); // stops bubbling
//Stopping Capturing
//We use the same method as with bubbling:
//event.stopPropagation();
//console . log(e.target.parentNode)
//e.target = the element that actually triggered the event.
//Example: if you click a <button> inside a <div>, then:
//e.target → the <button>
//not the <div> or body.
/*<div id="parent">
  <button id="child">Click me</button>
</div>
document.getElementById("child").addEventListener("click", (e) => {
  console.log(e.target);          // <button id="child">Click me</button>
  console.log(e.target.parentNode); // <div id="parent">...</div>
});
Here, e.target = the <button> you clicked

e.target.parentNode = the <div> containing the button*/
//abb agar hmko triggered event ko remove krna hai to
//let removetheelement=e.target.parentnode
//removetheelement.remove()//yeh remove ek function h
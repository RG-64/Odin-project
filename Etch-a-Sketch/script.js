var rah=0.1;
function colorRandom(element,power){
    if(element.getAttribute("class")=="square"){
        element.style.opacity=power;
        return `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }
    else{
        element.style.opacity=Number(element.style.opacity)+power;
        return element.style.backgroundColor;
    }
}
function changeOpacity(){
    var strength=-1;
    while (strength<0 || strength>1)
    {
    strength=Number(prompt("select the new desired strength. (between 0 and 1)"));
    }
    if(strength>0)
    {
        rah=strength;
    }
}
function sqPerSide(){
    var squareNum=0;
    while(squareNum<1||squareNum>62){
    squareNum=Number(prompt("How many squares would you like in a row? (between 1 and 62)"));
    }


const squareDiv=document.createElement("div");
const squaresDiv=document.querySelector("#squares");
const container=document.createElement("div");
const height=625;

squareDiv.setAttribute("class","square");
squareDiv.style.width=`${(height/squareNum)}px`;
squareDiv.style.height=`${(height/squareNum)}px`;
squareDiv.style.backgroundColor="rgb(255,255,255)";

container.setAttribute("id","container");

for(let i=0;i<squareNum*squareNum;i++)
{
    container.appendChild(squareDiv.cloneNode(true));
}
squaresDiv.innerHTML="";
squaresDiv.appendChild(container);

const elements=document.querySelectorAll(".square");
elements.forEach(element=>element.addEventListener('mouseenter',()=>
    {
    element.style.backgroundColor=colorRandom(element, rah);
    element.setAttribute("class","squareSelected")

})

);

}

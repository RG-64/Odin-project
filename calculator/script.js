var runNum1="";
var runNum2="";
var result=""
var op="";
var opCount=0;
var numerical="1234567890";
var memory="0";
function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function multi(a,b)
{
    return a*b;
}
function quo(a,b)
{
    if(b!=0)
    {
        return parseFloat((a/b).toFixed(10));
    };
}
function operate(A,op,B)
{
    var opCopy=op;
    var a=Number(A);
    var b=Number(B);
    opCount=0;
    switch(op)
    {
        case "+":
            result= `${add(a,b)}`;
            break;
        case "-":
            result= `${sub(a,b)}`;
            break;
        case "*":
            result= `${multi(a,b)}`;
            break;
        case "/":
            result= `${quo(a,b)}`;
            break;
        default:
            break;
    }
    lastH.innerHTML=beforeLastH.innerHTML;
    beforeLastH.innerHTML=midH.innerHTML;
    midH.innerHTML=secondH.innerHTML;
    secondH.innerHTML=firstH.innerHTML;
    firstH.innerHTML=`${runNum1} ${op} ${runNum2} = ${result}`;

    A="";
    B="";
    op="";
    runNum2="";
    runNum1="";

    if(b==0 && opCopy=="/")
        {
            display.innerHTML="Cannot divide by 0";
        }
    else{
           display.innerHTML=`${result}`;
    }
}
function storeNum(a)
{
    if(display.innerHTML.length<17)
    {
    if(runNum1=="undefined")
        {
            runNum1=0;
            display.innerHTML="";
        }
    if(opCount==0)
    {
        op="";
        runNum1+=a;
    }
    else
    {
        runNum2+=a;
    }
    display.innerHTML=`${runNum1} ${op} ${runNum2}`;
    }
}
function storeOp(operation)
{
    if(runNum1=="")
    {
        runNum1=result;
    }
    op=operation;
    opCount++;
    display.innerHTML=`${runNum1} ${op} ${runNum2}`;
}
function blank()
{    
    runNum1="";
    runNum2="";
    op="";
    opCount=0;
    display.innerHTML="";
}
function addPoint()
{
        if(opCount==0)
        {
            if(!runNum1.includes("."))
            {
                op="";
                runNum1+='.';
            }
        }
        else 
        {
            if(!runNum2.includes("."))
            {
                runNum2+='.';
            }
        }
    display.innerHTML=`${runNum1} ${op} ${runNum2}`;
}
function back()
{
    if(opCount==0)
    {
        runNum1=runNum1.substring(0,runNum1.length-1);
        op="";
    }
    else
    {
        if(runNum2.length==0)
        {
            op="";
            opCount=0;
        }
        else
        {
            runNum2=runNum2.substring(0,runNum2.length-1);
        }
    }
    display.innerHTML=`${runNum1} ${op} ${runNum2}`;
}
function toggleSign()
{
     if(opCount==0)
    {
        runNum1=-Number(runNum1);
    }
    else
    {
        runNum2=-Number(runNum2);
    }
    display.innerHTML=`${runNum1} ${op} ${runNum2}`;   
}
function memoryPlus()
{
    var opCopy=op;
    var a=Number(runNum1);
    var b=Number(runNum2);
    opCount=0;
    switch(op)
    {
        case "+":
            memory= `${add(a,b)}`;
            break;
        case "-":
            memory= `${sub(a,b)}`;
            break;
        case "*":
            memory= `${multi(a,b)}`;
            break;
        case "/":
            memory= `${quo(a,b)}`;
            break;
        default:
            break;
    }
    stored.innerHTML=`M = ${memory}`;

    lastH.innerHTML=beforeLastH.innerHTML;
    beforeLastH.innerHTML=midH.innerHTML;
    midH.innerHTML=secondH.innerHTML;
    secondH.innerHTML=firstH.innerHTML;
    firstH.innerHTML=`${runNum1} ${op} ${runNum2} = ${result}`;

    op="";
    runNum2="";
    runNum1="";
    if(b==0 && opCopy=="/")
        {
            display.innerHTML="Cannot divide by 0";
        }
    else{
           display.innerHTML=`${memory}`;
    }
}
function memoryM()
{
    display.innerHTML=memory;
}
function memoryR()
{
    if(opCount==0)
    {
        runNum1=memory.toString();
    }
    else
    {
        runNum2=memory.toString();
    }
    display.innerHTML=`${runNum1} ${op} ${runNum2}`;
}
function memoryMinus()
{
    memory="";
}

var display=document.querySelector("#display");
var lastH=document.querySelector("#last");
var beforeLastH=document.querySelector("#beforeLast");
var midH=document.querySelector("#mid");
var secondH=document.querySelector("#second");
var firstH=document.querySelector("#first");
var stored=document.querySelector("#stored");

//keyboard support
document.addEventListener("keydown",(event)=>
    {
        if(numerical.includes(event.key))
        {
            storeNum(event.key);
        }
        if(event.key=="/"||event.key=="+"||event.key=="-"||event.key=="*")
        {
            storeOp(event.key);
        }
        if(event.key=="="||event.key=="Enter")
        {
            operate(runNum1,op,runNum2);
        }
        if(event.key==".")
        {
            addPoint();
        }
        if(event.key=="Backspace")
        {
            back();
        }
        if(event.key=="Tab")
        {
            clear();
        }

    })

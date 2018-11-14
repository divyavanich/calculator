let runingsum = 0 ;
let buffer ="0";
let previousop;
document.querySelector('.cal').addEventListener('click', function(event)
{
  
buttonclick(event.target.innerText);
});
function buttonclick(value)
{
  console.log(" u clicked : ", value);
if (isNaN(parseInt(value)))
{
  handlesymbol(value);
}
else
{
  handlenumber(value);
  document.querySelector('.text').innerText = buffer;
}
}
function handlesymbol(value)
{
switch (value) {
    case '🔙' :
    if(buffer.length=== 1)
    buffer='0';
    else{buffer=buffer.substring(0,buffer.length-1);}
    document.querySelector('.text').innerText = buffer;
    break;
  case '=' :
  if (previousop === null)
  return;
    flushoperation(parseInt(buffer));
    previousop=null;
    buffer=''+runingsum;
    runingsum=0;
    document.querySelector('.text').innerText = buffer;
  break;
case 'C' : 
 buffer='0';
 previousop=null;
 runingsum=0;
 document.querySelector('.text').innerText = buffer;
 break;
 default:
 handlemath(value)
 break;
}
}
function handlenumber(value)
{
  if(buffer === '0' )
  {buffer=value;}
  else{buffer +=value;}
}

function handlemath(value){
  {
    const intbuffer = parseInt(buffer);
    if (runingsum === 0 )
     runingsum = intbuffer;
     else flushoperation(intbuffer);
 previousop = value;
 buffer='0';
  }
}
function flushoperation(intbuffer){
switch(previousop)
{case "➕" :
  runingsum += intbuffer;
 break;
 case "➖":
 runingsum -=intbuffer;
 break;
 case "➗":
 runingsum /=intbuffer;
 break;
 default:
 runingsum *=intbuffer;
 break;
}

}

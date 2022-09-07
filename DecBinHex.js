//defines all the vars we need to do math later

let val = prompt("what is the decimal?");
var l;
var e;
let n = (Number(val).toString(2)) 
e = String(n)

//converts the decimal to unformatted binary

if (e.length<8)
{
    l = e.length
    l = l - 8;
}



// adds the zeros to the front of the binary number

if(l == -7)
{
    console.log(`0000000 ${n.toString(2)}`);
}
else if(l == -6)
{
    console.log(`000000${n.toString(2)}`);
}
else if(l == -5)
{
    console.log(`00000${n.toString(2)}`);
}
else if(l == -4)
{
    console.log(`0000${n.toString(2)}`);
}
else if(l == -3)
{
    console.log(`000${n.toString(2)}`);
}
else if(l == -2)
{
    console.log(`00${n.toString(2)}`);
}
else if(l == -1)
{
    console.log(`0${n.toString(2)}`);;
}
else
{
    console.log(`${Number(n).toString(2)}`);
}

//decimal to hex using .toString
console.log(Math.abs(n).toString(16));
alert(Math.abs(n).toString(16)); 
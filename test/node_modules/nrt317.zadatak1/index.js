let math=require("mathjs");

exports.matIzrazi=[ispisSistema,ispisPitagore,ispisLog,ispisAmstrong,ispisEgipatski];

//1. Sistem linearnih jednacina sa tri nepoznate


function  izracunajSistem(d,dx,dy,dz)
{
    
    if(math.det(d)==0&&math.det(dx)==0&&math.det(dy)==0&&math.det(dz)==0)
        return "Sistem ima beskonacno mnogo resenja!";
    else if(math.det(d)==0&&(math.det(dx)!=0||math.det(dy)!=0||math.det(dz)!=0))
        return "Sistem nema resenja!";
    else
        return "x = "+math.round(math.det(dx)/math.det(d),2)+" y = "+math.round(math.det(dy)/math.det(d),2)+" z = "+math.round(math.det(dz)/math.det(d),2);
}
function ispisSistema()
{
    let x1=math.randomInt(-10,10);
    let x2=math.randomInt(-10,10);
    let x3=math.randomInt(-10,10);
    let y1=math.randomInt(-10,10);
    let y2=math.randomInt(-10,10);
    let y3=math.randomInt(-10,10);
    let z1=math.randomInt(-10,10);
    let z2=math.randomInt(-10,10);
    let z3=math.randomInt(-10,10);
    let t1=math.randomInt(-10,10);
    let t2=math.randomInt(-10,10);
    let t3=math.randomInt(-10,10);
    let d=math.matrix([[x1,y1,z1],[x2,y2,z2],[x3,y3,z3]]);
    let dx=math.matrix([[t1,y1,z1],[t2,y2,z2],[t3,y3,z3]]);
    let dy=math.matrix([[x1,t1,z1],[x2,t2,z2],[x3,t3,z3]]);
    let dz=math.matrix([[x1,y1,t1],[x2,y2,t2],[x3,y3,t3]]);
    return x1+(y1>0?" + ":" - ")+math.abs(y1)+(z1>0?" + ":" - ")+math.abs(z1)+" = "+t1+"\n"+x2+(y2>0?" + ":" - ")+math.abs(y2)+(z2>0?" + ":" - ")+math.abs(z2)+" = "+t2+"\n"+x3+(y3>0?" + ":" - ")+math.abs(y3)+(z3>0?" + ":" - ")+math.abs(z3)+" = "+t3+"\n\n"+izracunajSistem(d,dx,dy,dz);
    
}


//2. Pitagorina teorema primer

function ispisPitagore()
{
    let a=math.randomInt(1,10);
    let b=math.randomInt(1,10);
    return "a = "+ a +" b = "+ b +" c = "+math.round(math.hypot(a,b),2);
}


//3. logaritam racunanje log4 + 2log5 + log6 - log15
function ispisLog()
{
    return "Resenje  log4 + 2log5 + log6 - log15 = "+math.round(math.log10(4)+2*math.log10(5)+math.log10(6)-math.log10(15),2);
}


//4. Amstrongov broj provera

function ispisAmstrong()
{
    let amBr=math.randomInt(100,1000);
    let s=""+amBr;
    let sum=0;

    for (let c of s.split("")) {
        sum+=math.pow(parseInt(c+""),s.split("").length);
    }
    if(sum==amBr)
        return "Broj "+amBr+" Jeste Amstrongov broj!";
    else
        return "Broj "+amBr+" Nije Amstrongov broj!";
}

//5. Egipatski razlomak
function egipatski(raz)
{
    return "1/"+math.round(math.ceil(1/raz))+((raz-1/math.ceil(1/raz)>0)?" + "+egipatski(raz-1/math.ceil(1/raz)):"");
}
function ispisEgipatski()
{
    let x=math.randomInt(1,30);
    let y=math.randomInt(1,30);
    return x+"/"+y+" = "+egipatski(x/y);
}
let mojmodul=require("nrt317.zadatak1")

for(let x =0;x<mojmodul.matIzrazi.length;x++)
{
    console.log("Izraz "+(x+1)+".")
    console.log(mojmodul.matIzrazi[x]())
    console.log()
}
    
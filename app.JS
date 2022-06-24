const empleado = {
bruto: 26000,
hijos: 1,
pagas: 14,
}


let retención;

if (empleado.bruto <12000) {
 retención = bruto;
} else if (empleado.bruto <24000) {
 retención = empleado.bruto * 8 / 100;
} else if (empleado.bruto <34000) {
 retención = empleado.bruto * 16 / 100;
} else if (empleado.bruto >34000) {
 retención = empleado.bruto * 30 / 100;   
}

console.log ("La retención es: " + retención)

const sueldoAnual = empleado.bruto - retención;
const hijos = empleado.hijos >0 ? sueldoAnual -2 : 0;

var descuento = sueldoAnual - (sueldoAnual * 2 / 100)

console.log (descuento / empleado.pagas);









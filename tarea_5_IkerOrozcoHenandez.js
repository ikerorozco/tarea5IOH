function encontrarMenor(Arreglo){
    let menor = Arreglo[0]; 
    let indice = 0;

    for (let i = 0; i < Arreglo.length; i++) { 
        if (menor > Arreglo[i]) {
            menor = Arreglo[i];
            indice = i;  
        }
    }

    return menor;
}

const Arreglo = [7, 5, 8, 2, 3, 5, 0, 6]; 
const menor = encontrarMenor(Arreglo);
Systemoutput("El número más pequeño es:", menor); 


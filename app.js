//declaracion de variables
const television = {
    volumen: 0,
    canal: 0,
    power: false,
};

//referencias al DOM
SeccionTV = document.getElementById("TV")
botonMasVolumen = document.getElementById("btn-VolMas")
botonMenosVolumen = document.getElementById("btn-VolMenos")
botonCanalMas = document.getElementById("btn-CHMas")
botonCanalMenos = document.getElementById("btn-CHMenos")
labelVolumen = document.getElementById("lbl-Vol")
labelCanal = document.getElementById("lbl-CH")
labelPower = document.getElementById("lbl-PWR")
botonPower = document.getElementById("btn-Power")

//Funciones
const AgregarVolumen = () => {
    if(television.volumen + 5 > 100){
        return;
    }
    const volumenAgregado = television.volumen += 5

    renderizarVolumen(volumenAgregado)
}

const ReducirVolumen = () => {
    if(television.volumen - 5 < 0){
        return;
    }
    const volumenReducido = television.volumen -= 5

    renderizarVolumen(volumenReducido)
}

const renderizarVolumen = (NewVolumen) => {
    labelVolumen.innerText = "Vol: " + NewVolumen
}

const AgregarCanal = () => {
    if(television.canal + 1 > 20){
        television.canal = 0
    }
    const CanalAgregado = television.canal += 1;

    renderizarCanal(CanalAgregado)
}

const ReducirCanal = () => {
    if(television.canal - 1 < 1){
        television.canal = 21
    }
    const CanalReducido = television.canal -= 1;

    renderizarCanal(CanalReducido)
}

const renderizarCanal = (NewCanal) => {
    labelCanal.innerText = "CH " + NewCanal
}

const PowerONOFF = () => {
    if(!television.power){
        television.power = true
        labelPower.style.color = "darkgreen"
        labelPower.style.backgroundColor = "green"
        labelVolumen.style.display="block"
        labelCanal.style.display="block"
    }else{
        television.power = false
        labelPower.style.color = "#970303"
        labelPower.style.backgroundColor = "#FF0000"
        labelVolumen.style.display = "none"
        labelCanal.style.display = "none"
    }
}


//Eventos
botonMasVolumen.addEventListener("click", () => {
    AgregarVolumen()
})
botonMenosVolumen.addEventListener("click", () => {
    ReducirVolumen()
})

botonCanalMas.addEventListener("click", () => {
    AgregarCanal()
})

botonCanalMenos.addEventListener("click", () => {
    ReducirCanal()
})

botonPower.addEventListener("click", () => {
    PowerONOFF();
})

//Llamadas a funciones

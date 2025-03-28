function randomBrojevi() {
    const brojevi = [];
    while (brojevi.length < 5) {
        const randomBroj = Math.floor(Math.random() * (27 - 1 + 1)) + 1;
        if (!brojevi.includes(randomBroj)) {
            brojevi.push(randomBroj);
        }
    }
    while (brojevi.length < 10) {
        const randomBroj = Math.floor(Math.random() * ((27+24) - 28 + 1)) + 28;
        if (!brojevi.includes(randomBroj)) {
            brojevi.push(randomBroj);
        }
    }
    while (brojevi.length < 15) {
        const randomBroj = Math.floor(Math.random() * ((27+24+25) - (27+24+1) + 1)) + (27+24+1);
        if (!brojevi.includes(randomBroj)) {
            brojevi.push(randomBroj);
        }
    }
    return brojevi;
}

const brojevi2 = randomBrojevi(); //ovdje ce biti sva pitanja koja se koriste u igri

let brojac=0;
let trenutni=brojevi2[0];

let tajmerInterval;

function zapocniTajmer(){
    let pocetnoVrijeme = 60;
    const tajmerEl = document.getElementById('tajmer');
    tajmerEl.innerHTML = pocetnoVrijeme;
    tajmerInterval = setInterval(()=>{
        pocetnoVrijeme--;
        tajmerEl.textContent = pocetnoVrijeme;
        if (pocetnoVrijeme == 0) {
            clearInterval(tajmerInterval);
            poruka();
        }
    }, 1000);
}


function getPitanje(trenutni){
    zapocniTajmer();
    let parag = document.getElementById("pitaj");
    parag.textContent =nizPitanja[trenutni].pitanje;
    let prvi = document.getElementById("a");
    prvi.textContent =nizPitanja[trenutni].a;
    let drugi = document.getElementById("b");
    drugi.textContent =nizPitanja[trenutni].b;
    let treci = document.getElementById("c");
    treci.textContent =nizPitanja[trenutni].c;
    let cetvrti = document.getElementById("d");
    cetvrti.textContent =nizPitanja[trenutni].d;
}

getPitanje(trenutni);

function getTrenutni(){
    return trenutni;
}

function daLiJeTacan(id){
    //restartuj(pom1,pom2);
    if(brojac == 14 && id === nizPitanja[trenutni].tacan_odgovor) {
        poruka2();
    }
    if(id === nizPitanja[trenutni].tacan_odgovor){
        brojac+=1;
        daa = true;
        trenutni=brojevi2[brojac];
        clearInterval(tajmerInterval);
        promijeniBoju();
        return true;
    } 
}

function poruka2(){
    clearInterval(tajmerInterval);
    var noviParagraf = document.createElement("p");
    noviParagraf.textContent = "ČESTITAM, osvojili ste milion KM.";
    noviParagraf.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    noviParagraf.style.color = 'white';
    noviParagraf.style.width = '600px';
    noviParagraf.style.height = '100px';
    noviParagraf.style.fontSize = '18px';
    noviParagraf.style.margin = 'auto';
    noviParagraf.style.padding = '20px';
    noviParagraf.style.textAlign = 'center';
    noviParagraf.appendChild(document.createElement("br"));
    noviParagraf.appendChild(document.createTextNode("Ako želite početi ispočetka kliknite "));

    var ovdjeTekst = document.createElement("span");
    ovdjeTekst.textContent = "ovdje.";
    ovdjeTekst.style.cursor = "pointer";
    ovdjeTekst.style.textDecoration = "underline";
    ovdjeTekst.style.textUnderlineOffset = "3px";
    ovdjeTekst.addEventListener("click", function() {
        // Postavite novu lokaciju na početnu stranicu
        window.location.href = "kviz.html";
    });

    noviParagraf.appendChild(ovdjeTekst);
    document.getElementById('hajde').innerHTML = '';
    document.getElementById("hajde").appendChild(noviParagraf);
}

let nagrade = [0,100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];

function poruka(){
    clearInterval(tajmerInterval);
    let noviParagraf = document.createElement("p");
    noviParagraf.textContent = "Nažalost, pogriješili ste ili Vam je isteklo vrijeme. Osvojili ste " + nagrade[brojac] + " KM.";
    noviParagraf.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    noviParagraf.style.color = 'white';
    noviParagraf.style.width = '620px';
    noviParagraf.style.height = '120px';
    noviParagraf.style.fontSize = '18px';
    noviParagraf.style.margin = 'auto';
    noviParagraf.style.padding = '20px';
    noviParagraf.style.textAlign = 'center';
    noviParagraf.appendChild(document.createElement("br"));
    noviParagraf.appendChild(document.createTextNode("Ako želite početi ispočetka kliknite "));

    let ovdjeTekst = document.createElement("span");
    ovdjeTekst.textContent = "ovdje.";
    ovdjeTekst.style.cursor = "pointer";
    ovdjeTekst.style.textDecoration = "underline";
    ovdjeTekst.style.textUnderlineOffset = "3px";
    ovdjeTekst.addEventListener("click", function() {
        window.location.href = "kviz.html";
    });

    noviParagraf.appendChild(ovdjeTekst);
    document.getElementById('hajde').innerHTML = '';
    document.getElementById("hajde").appendChild(noviParagraf);
}

function promijeniBoju(){
    let element = document.getElementById(String(brojac+1));
    let element2 = document.getElementById(String(brojac));
    element.style.backgroundColor = '#FFB949';
    element2.style.backgroundColor = 'transparent';
    element.style.color = 'black';
    element2.style.color = 'white';
}

let brojacFifti = 0;
console.log(brojevi2);

let pom1;
let pom2;

function fiftiFifti(){
    if(brojacFifti===0){
        let drugi;
        let treci;
        let slicica = document.getElementById('50-50');
        slicica.style.opacity = 0.4;
        if(nizPitanja[trenutni].tacan_odgovor == 'a'){
            drugi = document.getElementById("b");
            drugi.textContent ='';
            drugi.onclick = null;
            treci = document.getElementById("c");
            treci.textContent ='';
            treci.onclick = null;
        }
        else if(nizPitanja[trenutni].tacan_odgovor == 'd'){
            drugi = document.getElementById("b");
            drugi.textContent ='';
            drugi.onclick = null;
            treci = document.getElementById("c");
            treci.textContent ='';
            treci.onclick = null;
        }
        else if(nizPitanja[trenutni].tacan_odgovor == 'b'){
            drugi = document.getElementById("a");
            drugi.textContent ='';
            drugi.onclick = null;
            treci = document.getElementById("d");
            treci.textContent ='';
            treci.onclick = null;
        }
        else if(nizPitanja[trenutni].tacan_odgovor == 'c'){
            drugi = document.getElementById("a");
            drugi.textContent ='';
            drugi.onclick = null;
            treci = document.getElementById("d");
            treci.textContent ='';
            treci.onclick = null;
        }
        restartuj(drugi,treci);
    }
    brojacFifti++;
}

function restartuj(drugi, treci) {
    drugi.onclick = function() {
        if (daLiJeTacan(this.id)) {
            getPitanje(getTrenutni());
        } else {
            poruka();
        }
    };
  
    treci.onclick = function() {
        if (daLiJeTacan(this.id)) {
            getPitanje(getTrenutni());
        } else {
            poruka();
        }
    };
}

let brojacPitajPrijatelja=0;

function pomocPrijatelja(){
    if(brojacPitajPrijatelja === 0){
        let slicica = document.getElementById('poziv');
        slicica.style.opacity = 0.4;
        let el = document.getElementById('dodaj-odg');
        el.textContent = nizPitanja[trenutni].tacan_odgovor;
        let progres = document.getElementById('prijatelj-odg');
        progres.style.visibility = 'visible';
    }
    brojacPitajPrijatelja++;
    setTimeout(()=>{
        if(brojacPitajPrijatelja===1){
        let progres = document.getElementById('prijatelj-odg');
        progres.style.visibility = 'hidden';
    }},1800);
}

let brojacPitajPubliku = 0;
let nizOdg = [];

function pomocPublike(){
    if(brojacPitajPubliku === 0){
        let slicica = document.getElementById('publika');
        slicica.style.opacity = 0.4;
        if('a' === nizPitanja[trenutni].tacan_odgovor){
            nizOdg.push('b');
            nizOdg.push('c');
            nizOdg.push('d');
        }
        else if('b' === nizPitanja[trenutni].tacan_odgovor){
            nizOdg.push('a');
            nizOdg.push('c');
            nizOdg.push('d');
        }
        else if('c' === nizPitanja[trenutni].tacan_odgovor){
            nizOdg.push('a');
            nizOdg.push('b');
            nizOdg.push('d');
        }
        else{
            nizOdg.push('a');
            nizOdg.push('b');
            nizOdg.push('c');
        }
        let el = document.getElementById('dodaj-odg1');
        el.textContent = nizPitanja[trenutni].tacan_odgovor;
        let el2 = document.getElementById('dodaj-odg2');
        el2.textContent = nizOdg[0];
        let el3 = document.getElementById('dodaj-odg3');
        el3.textContent = nizOdg[1];
        let el4 = document.getElementById('dodaj-odg4');
        el4.textContent = nizOdg[2];
        let progres = document.getElementById('publika-odg');
        progres.style.visibility = 'visible';
    }
    brojacPitajPubliku++;
    setTimeout(()=>{
        if(brojacPitajPubliku===1){
        let progres = document.getElementById('publika-odg');
        progres.style.visibility = 'hidden';
    }},1800);
}





const form1 = document.querySelector("#içerikEkleme");
const buton1 = document.querySelector(".silme");
const buton2 = document.querySelector(".temizle");
const arama = document.querySelector("#içeriklistesi input");
const kaydetButonu = document.querySelector(".kayit");



for (let i = 0 ; i < localStorage.length; i++){
    let localp = document.createElement("p");
    let locals = document.createElement("span");
    let locali = document.createElement("input");
    locali.type = "checkbox";
    locals.textContent = localStorage.getItem(localStorage.key(i));
    localp.appendChild(locali);
    localp.appendChild(locals);
    let yer = document.querySelector(".form2");
    yer.insertBefore(localp,yer.firstChild);


}


form1.addEventListener("submit",todoEkle);



function todoEkle(e){
    e.preventDefault(); 
    let genel = document.createElement("p");
    let metin = document.createElement("span");
    let işaret = document.createElement("input");
    işaret.type = "checkbox";
    genel.appendChild(işaret);
    genel.appendChild(metin);
    metin.textContent = document.querySelector("#içerikEkleme input").value;  
    let yer = document.querySelector(".form2");
    yer.insertBefore(genel,yer.firstChild);
    document.querySelector("#içerikEkleme input").value = "";
    




}





buton1.addEventListener("click",todoSil);

function todoSil(e){
    e.preventDefault();
    let eklenenTodolar = document.querySelectorAll("p input");             
    eklenenTodolar = Array.from(eklenenTodolar);
    eklenenTodolar.forEach(function(eleman){
        if (eleman.checked == true){
            for (let i = 0; i < localStorage.length; i++){
                if (localStorage.getItem(localStorage.key(i)) == eleman.parentElement.children[1].textContent){
                    localStorage.removeItem(localStorage.key(i));
                }
            }
            

            eleman.parentElement.remove();
        }
    buton1.textContent = "Silme Başarılı";
    setTimeout(() => buton1.textContent = "Seçilenleri sil", 2000);


    })
}


 
buton2.addEventListener("click",todoTemizle);
function todoTemizle(e){
    e.preventDefault();
    let eklenenTodolar = document.querySelectorAll("p");          
    eklenenTodolar = Array.from(eklenenTodolar);
    eklenenTodolar.forEach(function(eleman){
        eleman.remove();
    localStorage.clear();
    })
    buton2.textContent = "Temizleme Başarılı";
    setTimeout(() => buton2.textContent = "Tüm Todoları temizle", 2000);
}


 
 
arama.addEventListener("keydown",todoArama);

function todoArama(e){
    if (e.key == "Enter"){
        e.preventDefault();
        let metinListe = document.querySelectorAll("p span"); 
        metinListe = Array.from(metinListe);
        metinListe.forEach(function(eleman){
            if (eleman.textContent.includes(arama.value)){
                eleman.parentElement.style.background = "#5353ec";
            }
        })
     
    }}
   

kaydetButonu.addEventListener("click",kayit);

function kayit(e){
    e.preventDefault();
    let metinListe = document.querySelectorAll("p"); 
    metinListe = Array.from(metinListe);
    let i = 0;
    metinListe.forEach(function(eleman){
        if (eleman.children[0].checked == true){
            localStorage.setItem(i,eleman.children[1].textContent);
            i++;
    kaydetButonu.textContent = "Kaydedildi";
    setTimeout(() => kaydetButonu.textContent = "Seçilenleri kaydet", 2000);

 } })


}























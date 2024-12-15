// Gizli Kelime Bulmaca
const kelime = "dünya";
const harf = "_".repeat(kelime.length).split(" ");
console.log(harf);

while(harf.includes("_"));{
    let tahmin = prompt("Bir harf tahmin edin.");
    for (let i = 0; i < kelime.length; i++) {
        if(kelime[i] === tahmin){
            harf[i] = tahmin;
            console.log(`Doğru tahmin ${harf.join(" ")}`);
        }else{
            console.log(`Yanlış tahmin ${harf.join (" ")}`);
            
        }
        
        
    }

}


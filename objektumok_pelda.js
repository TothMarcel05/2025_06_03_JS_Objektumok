// ===== OBJEKTUM LÉTREHOZÁS =====

// 1. Objektum literál szintaxis
const szemely = {
    nev: "Nagy János",
    kor: 25,
    foglalkozas: "Fejlesztő",
    koszont: function() {
        return `Szia, a nevem ${this.nev}!`;
    }
};

console.log("1. Objektum literál szintaxis:");
console.log("szemely objektum:", szemely);
console.log("-------------------");

// 2. Constructor függvény használata
function Szemely(nev, kor, foglalkozas) {
    this.nev = nev;
    this.kor = kor;
    this.foglalkozas = foglalkozas;
    this.koszont = function() {
        return `Szia, a nevem ${this.nev}!`;
    };
}

const janos = new Szemely("Nagy János", 25, "Fejlesztő");

console.log("2. Constructor függvény:");
console.log("janos objektum:", janos);
console.log("-------------------");

// ===== OBJEKTUM TULAJDONSÁGOK ELÉRÉSE =====

console.log("3. Tulajdonságok elérése:");
console.log("szemely.nev:", szemely.nev);
console.log('szemely["kor"]:', szemely["kor"]);
console.log("szemely.koszont():", szemely.koszont());

console.log("janos.nev:", janos.nev);
console.log('janos["kor"]:', janos["kor"]);
console.log("janos.koszont():", janos.koszont());
console.log("-------------------");

// ===== OBJEKTUM MÓDOSÍTÁSA =====

console.log("4. Objektum módosítása:");

// Janos objektum módosítása
console.log("Janos objektum módosítása előtt:", janos);
janos.email = "janos@pelda.hu";
janos.kor = 26;
delete janos.foglalkozas;
console.log("Janos objektum módosítása után:", janos);

// Szemely objektum módosítása
console.log("Szemely objektum módosítása előtt:", szemely);
szemely.email = "szemely@pelda.hu";
szemely.kor = 27;
delete szemely.foglalkozas;
console.log("Szemely objektum módosítása után:", szemely);
console.log("-------------------");

// ===== OBJEKTUM METÓDUSOK =====

console.log("5. Objektum metódusok:");
console.log("Object.keys(szemely):", Object.keys(szemely));
console.log("Object.values(szemely):", Object.values(szemely));

console.log("Objektum bejárása for...in ciklussal:");
for (let kulcs in szemely) {
    console.log(`${kulcs}: ${szemely[kulcs]}`);
}

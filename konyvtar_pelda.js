// ===== KÖNYVTÁR KEZELŐ RENDSZER PÉLDA =====

// Könyv objektum létrehozása
function Konyv(cim, szerzo, kiadasEve) {
    this.cim = cim;
    this.szerzo = szerzo;
    this.kiadasEve = kiadasEve;
    this.kolcsonozve = false;
    
    this.kolcsonoz = function() {
        if (!this.kolcsonozve) {
            this.kolcsonozve = true;
            return `${this.cim} sikeresen kölcsönözve!`;
        }
        return "A könyv már ki van kölcsönözve!";
    };
    
    this.visszahoz = function() {
        if (this.kolcsonozve) {
            this.kolcsonozve = false;
            return `${this.cim} sikeresen visszahozva!`;
        }
        return "A könyv nincs kikölcsönözve!";
    };
}

// Könyvtár objektum létrehozása
const konyvtar = {
    konyvek: [],
    
    konyvHozzaad: function(konyv) {
        this.konyvek.push(konyv);
        return `${konyv.cim} hozzáadva a könyvtárhoz!`;
    },
    
    konyvKeres: function(cim) {
        return this.konyvek.find(konyv => konyv.cim === cim);
    },
    
    konyvekListaz: function() {
        return this.konyvek.map(konyv => 
            `${konyv.cim} (${konyv.szerzo}, ${konyv.kiadasEve})`
        );
    }
};

// ===== PÉLDA HASZNÁLAT =====

console.log("1. Könyvek létrehozása:");
const konyv1 = new Konyv("JavaScript alapok", "John Doe", 2023);
const konyv2 = new Konyv("Web fejlesztés", "Jane Smith", 2022);
console.log("konyv1:", konyv1);
console.log("konyv2:", konyv2);
console.log("-------------------");

console.log("2. Könyvek hozzáadása a könyvtárhoz:");
console.log(konyvtar.konyvHozzaad(konyv1));
console.log(konyvtar.konyvHozzaad(konyv2));
console.log("-------------------");

console.log("3. Könyvek listázása:");
console.log("Könyvek listája:", konyvtar.konyvekListaz());
console.log("-------------------");

console.log("4. Könyv kölcsönzése és visszahozása:");
console.log("Első kölcsönzés:", konyv1.kolcsonoz());
console.log("Második kölcsönzés (már kölcsönözve):", konyv1.kolcsonoz());
console.log("Könyv visszahozása:", konyv1.visszahoz());
console.log("-------------------");

console.log("5. Könyv keresése:");
const keresettKonyv = konyvtar.konyvKeres("JavaScript alapok");
console.log("Keresett könyv:", keresettKonyv); 
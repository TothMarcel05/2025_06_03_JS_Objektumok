# JavaScript Objektumok - Összefoglaló

## Bevezetés
A JavaScript objektumok kulcs-érték párok gyűjteményei, amelyek adatokat és funkcionalitást tárolnak. Az objektumok a JavaScript egyik legfontosabb adattípusa, és szinte minden JavaScript programban megtalálhatók.

## Objektum létrehozása

### Objektum literál szintaxis
```javascript
// Első objektum létrehozása literál szintaxissal
const szemely = {
    nev: "Nagy János",
    kor: 25,
    foglalkozas: "Fejlesztő",
    koszont: function() {
        return `Szia, a nevem ${this.nev}!`;
    }
};
```

### Constructor függvény használata
```javascript
// Második objektum létrehozása constructor függvénnyel
function Szemely(nev, kor, foglalkozas) {
    this.nev = nev;
    this.kor = kor;
    this.foglalkozas = foglalkozas;
    this.koszont = function() {
        return `Szia, a nevem ${this.nev}!`;
    };
}

const janos = new Szemely("Nagy János", 25, "Fejlesztő");
```

## Objektum tulajdonságok elérése

```javascript
// Pont jelölés - szemely objektummal
console.log(szemely.nev);  // "Nagy János"

// Szögletes zárójel jelölés - szemely objektummal
console.log(szemely["kor"]);  // 25

// Metódus hívása - szemely objektummal
console.log(szemely.koszont());  // "Szia, a nevem Nagy János!"

// Ugyanezek a műveletek a janos objektummal is működnek
console.log(janos.nev);  // "Nagy János"
console.log(janos["kor"]);  // 25
console.log(janos.koszont());  // "Szia, a nevem Nagy János!"
```

## Objektum módosítása

```javascript
// Új tulajdonság hozzáadása a janos objektumhoz
janos.email = "janos@pelda.hu";  // A janos objektumhoz adunk új tulajdonságot

// Tulajdonság módosítása a janos objektumon
janos.kor = 26;  // A janos objektum korát módosítjuk

// Tulajdonság törlése a janos objektumból
delete janos.foglalkozas;  // A janos objektumból töröljük a foglalkozás tulajdonságot

// Ugyanezek a műveletek a szemely objektummal is működnek
szemely.email = "szemely@pelda.hu";
szemely.kor = 27;
delete szemely.foglalkozas;
```

## Gyakori objektum metódusok

```javascript
// Objektum kulcsainak lekérése
Object.keys(szemely);  // ["nev", "kor", "foglalkozas", "koszont"]

// Objektum értékeinek lekérése
Object.values(szemely);  // ["Nagy János", 25, "Fejlesztő", function() {...}]

// Objektum bejárása
for (let kulcs in szemely) {
    console.log(`${kulcs}: ${szemely[kulcs]}`);
}
```


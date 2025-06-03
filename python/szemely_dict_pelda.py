# ===== SZEMÉLY DICTIONARY PÉLDA =====

# Dictionary létrehozása közvetlenül
szemely = {
    "nev": "Nagy János",
    "kor": 25,
    "foglalkozas": "Fejlesztő"
}

print("1. Dictionary létrehozása:")
print(f"szemely: {szemely}")
print("-" * 50)

print("2. Tulajdonságok elérése:")
print(f"Név: {szemely['nev']}")
print(f"Kor: {szemely['kor']}")
print(f"Foglalkozás: {szemely['foglalkozas']}")
print("-" * 50)

print("3. Dictionary módosítása:")
# Új kulcs-érték pár hozzáadása
szemely["email"] = "janos@pelda.hu"
# Érték módosítása
szemely["kor"] = 26
print(f"Módosított dictionary: {szemely}")
print("-" * 50)

print("4. Dictionary bejárása:")
for kulcs, ertek in szemely.items():
    print(f"{kulcs}: {ertek}")
print("-" * 50)

print("5. Kulcs-érték pár törlése:")
del szemely["foglalkozas"]
print(f"Dictionary törlés után: {szemely}")

# Dictionary létrehozása dict() függvénnyel
print("\n6. Dictionary létrehozása dict() függvénnyel:")
masik_szemely = dict(nev="Kovács Péter", kor=30, foglalkozas="Tanár")
print(f"masik_szemely: {masik_szemely}")

# Dictionary létrehozása zip() függvénnyel
print("\n7. Dictionary létrehozása zip() függvénnyel:")
kulcsok = ["nev", "kor", "foglalkozas"]
ertekek = ["Nagy Anna", 28, "Orvos"]
harmadik_szemely = dict(zip(kulcsok, ertekek))
print(f"harmadik_szemely: {harmadik_szemely}") 
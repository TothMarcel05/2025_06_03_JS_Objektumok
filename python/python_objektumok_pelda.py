# ===== PYTHON OBJEKTUMOK PÉLDA =====

class Konyv:
    def __init__(self, cim, szerzo, kiadas_eve):
        self.cim = cim
        self.szerzo = szerzo
        self.kiadas_eve = kiadas_eve
        self.kolcsonozve = False
    
    def kolcsonoz(self):
        if not self.kolcsonozve:
            self.kolcsonozve = True
            return f"{self.cim} sikeresen kölcsönözve!"
        return "A könyv már ki van kölcsönözve!"
    
    def visszahoz(self):
        if self.kolcsonozve:
            self.kolcsonozve = False
            return f"{self.cim} sikeresen visszahozva!"
        return "A könyv nincs kikölcsönözve!"

class Konyvtar:
    def __init__(self):
        self.konyvek = []
    
    def konyv_hozzaad(self, konyv):
        self.konyvek.append(konyv)
        return f"{konyv.cim} hozzáadva a könyvtárhoz!"
    
    def konyv_keres(self, cim):
        for konyv in self.konyvek:
            if konyv.cim == cim:
                return konyv
        return None
    
    def konyvek_listaz(self):
        return [f"{konyv.cim} ({konyv.szerzo}, {konyv.kiadas_eve})" for konyv in self.konyvek]

# ===== PÉLDA HASZNÁLAT =====

print("1. Könyvek létrehozása:")
konyv1 = Konyv("Python alapok", "John Doe", 2023)
konyv2 = Konyv("Web fejlesztés", "Jane Smith", 2022)
print(f"konyv1: {konyv1.__dict__}")
print(f"konyv2: {konyv2.__dict__}")
print("-" * 50)

print("2. Könyvtár létrehozása és könyvek hozzáadása:")
konyvtar = Konyvtar()
print(konyvtar.konyv_hozzaad(konyv1))
print(konyvtar.konyv_hozzaad(konyv2))
print("-" * 50)

print("3. Könyvek listázása:")
print("Könyvek listája:", konyvtar.konyvek_listaz())
print("-" * 50)

print("4. Könyv kölcsönzése és visszahozása:")
print("Első kölcsönzés:", konyv1.kolcsonoz())
print("Második kölcsönzés (már kölcsönözve):", konyv1.kolcsonoz())
print("Könyv visszahozása:", konyv1.visszahoz())
print("-" * 50)

print("5. Könyv keresése:")
keresett_konyv = konyvtar.konyv_keres("Python alapok")
print(f"Keresett könyv: {keresett_konyv.__dict__ if keresett_konyv else 'Nem található'}")


# ===== EGYSZERŰ OBJEKTUM PÉLDA =====

class Szemely:
    def __init__(self, nev, kor, foglalkozas):
        self.nev = nev
        self.kor = kor
        self.foglalkozas = foglalkozas
    
    def koszont(self):
        return f"Szia, a nevem {self.nev}!"

print("\n6. Egyszerű objektum példa:")
szemely = Szemely("Nagy János", 25, "Fejlesztő")
print(f"szemely objektum: {szemely.__dict__}")
print(f"Köszönés: {szemely.koszont()}")
print("-" * 50)

# Objektum módosítása
print("7. Objektum módosítása:")
szemely.email = "janos@pelda.hu"  # új tulajdonság hozzáadása
szemely.kor = 26  # tulajdonság módosítása
print(f"Módosított szemely: {szemely.__dict__}") 
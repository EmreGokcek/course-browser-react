export interface Course {
  id: number
  baslik: string
  egitmen: string
  kategori: "Frontend" | "Backend" | "Fullstack" | "Mobile"
  seviye: "Baslangic" | "Orta" | "Ileri"
  sure: number
  ogrenciSayisi: number
  puan: number
  ucret: number
  aciklama: string
  resim: string
}
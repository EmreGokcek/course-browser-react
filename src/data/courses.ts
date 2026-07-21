import type { Course } from "../types"

export const courses: Course[] = [
  {
    id: 1,
    baslik: "React ile Modern Web Geliştirme",
    egitmen: "Ahmet Yılmaz",
    kategori: "Frontend",
    seviye: "Orta",
    sure: 24,
    ogrenciSayisi: 1250,
    puan: 4.8,
    ucret: 299,
    aciklama: "React hooks, context API ve modern patterns öğrenin.",
    resim: "https://picsum.photos/seed/react/400/200"
  },
  {
    id: 2,
    baslik: "Node.js ve Express ile Backend",
    egitmen: "Mehmet Kaya",
    kategori: "Backend",
    seviye: "Orta",
    sure: 18,
    ogrenciSayisi: 980,
    puan: 4.6,
    ucret: 249,
    aciklama: "REST API geliştirme, authentication ve veritabanı entegrasyonu.",
    resim: "https://picsum.photos/seed/node/400/200"
  },
  {
    id: 3,
    baslik: "TypeScript Temelleri",
    egitmen: "Ayşe Demir",
    kategori: "Frontend",
    seviye: "Baslangic",
    sure: 12,
    ogrenciSayisi: 2100,
    puan: 4.9,
    ucret: 199,
    aciklama: "TypeScript ile tip güvenli kod yazmayı öğrenin.",
    resim: "https://picsum.photos/seed/typescript/400/200"
  },
  {
    id: 4,
    baslik: "Next.js Fullstack Geliştirme",
    egitmen: "Ali Çelik",
    kategori: "Fullstack",
    seviye: "Ileri",
    sure: 32,
    ogrenciSayisi: 750,
    puan: 4.7,
    ucret: 399,
    aciklama: "Next.js App Router, server components ve deployment.",
    resim: "https://picsum.photos/seed/nextjs/400/200"
  },
  {
    id: 5,
    baslik: "React Native ile Mobil Uygulama",
    egitmen: "Zeynep Arslan",
    kategori: "Mobile",
    seviye: "Orta",
    sure: 28,
    ogrenciSayisi: 620,
    puan: 4.5,
    ucret: 349,
    aciklama: "iOS ve Android için cross-platform mobil uygulama geliştirme.",
    resim: "https://picsum.photos/seed/mobile/400/200"
  },
  {
    id: 6,
    baslik: "HTML ve CSS Temelleri",
    egitmen: "Can Yıldız",
    kategori: "Frontend",
    seviye: "Baslangic",
    sure: 10,
    ogrenciSayisi: 3500,
    puan: 4.7,
    ucret: 149,
    aciklama: "Web geliştirmeye sıfırdan başlayın.",
    resim: "https://picsum.photos/seed/html/400/200"
  }
]
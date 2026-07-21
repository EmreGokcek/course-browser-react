import { useState } from "react"
import CourseCard from "./components/CourseCard"
import CourseDetail from "./components/CourseDetail"
import useCourses from "./hooks/useCourses"
import type { Course } from "./types"

type Kategori = "Hepsi" | Course["kategori"]
type Seviye = "Hepsi" | Course["seviye"]
type Siralama = "varsayilan" | "fiyat-artan" | "fiyat-azalan" | "puan"

const kategoriler: Kategori[] = ["Hepsi", "Frontend", "Backend", "Fullstack", "Mobile"]
const seviyeler: Seviye[] = ["Hepsi", "Baslangic", "Orta", "Ileri"]

function App() {
  const { courses, yukleniyor } = useCourses()
  const [arama, setArama] = useState("")
  const [kategori, setKategori] = useState<Kategori>("Hepsi")
  const [seviye, setSeviye] = useState<Seviye>("Hepsi")
  const [siralama, setSiralama] = useState<Siralama>("varsayilan")
  const [secilenKurs, setSecilenKurs] = useState<Course | null>(null)

  let filtrelenmis = courses.filter(course => {
    const aramaUyuyor = course.baslik.toLowerCase().includes(arama.toLowerCase()) ||
      course.egitmen.toLowerCase().includes(arama.toLowerCase())
    const kategoriUyuyor = kategori === "Hepsi" || course.kategori === kategori
    const seviyeUyuyor = seviye === "Hepsi" || course.seviye === seviye
    return aramaUyuyor && kategoriUyuyor && seviyeUyuyor
  })

  if (siralama === "fiyat-artan") {
    filtrelenmis = [...filtrelenmis].sort((a, b) => a.ucret - b.ucret)
  } else if (siralama === "fiyat-azalan") {
    filtrelenmis = [...filtrelenmis].sort((a, b) => b.ucret - a.ucret)
  } else if (siralama === "puan") {
    filtrelenmis = [...filtrelenmis].sort((a, b) => b.puan - a.puan)
  }

  if (yukleniyor) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "16px"
      }}>
        <div style={{
          width: "40px",
          height: "40px",
          border: "3px solid #e2e8f0",
          borderTop: "3px solid #6366f1",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }} />
        <p style={{ color: "#94a3b8", fontSize: "14px" }}>Kurslar yükleniyor...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    )
  }

  if (secilenKurs) {
    return (
      <CourseDetail
        course={secilenKurs}
        onGeri={() => setSecilenKurs(null)}
      />
    )
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <header style={{ marginBottom: "40px" }}>
          <p style={{ color: "#6366f1", fontWeight: 700, fontSize: "13px", letterSpacing: "0.05em", textTransform: "uppercase", margin: "0 0 8px" }}>
            Course Browser
          </p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, margin: "0 0 8px", color: "#0f172a" }}>
            Kursları keşfet
          </h1>
          <p style={{ color: "#64748b", fontSize: "16px", margin: "0 0 28px" }}>
            Mevcut kursları inceleyin ve seviyenize uygun olanı seçin.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", marginBottom: "16px" }}>
            <input
              type="text"
              placeholder="🔍 Kurs veya eğitmen ara..."
              value={arama}
              onChange={(e) => setArama(e.target.value)}
              style={{
                padding: "10px 16px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                width: "300px",
                background: "white"
              }}
            />

            <select
              value={siralama}
              onChange={(e) => setSiralama(e.target.value as Siralama)}
              style={{
                padding: "10px 16px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                background: "white",
                color: "#64748b",
                cursor: "pointer"
              }}
            >
              <option value="varsayilan">Varsayılan sıralama</option>
              <option value="fiyat-artan">Fiyat: Düşükten yükseğe</option>
              <option value="fiyat-azalan">Fiyat: Yüksekten düşüğe</option>
              <option value="puan">En yüksek puan</option>
            </select>
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
            {kategoriler.map(k => (
              <button
                key={k}
                onClick={() => setKategori(k)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: "1px solid",
                  borderColor: kategori === k ? "#6366f1" : "#e2e8f0",
                  backgroundColor: kategori === k ? "#6366f1" : "white",
                  color: kategori === k ? "white" : "#64748b",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 500
                }}
              >
                {k}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {seviyeler.map(s => (
              <button
                key={s}
                onClick={() => setSeviye(s)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: "1px solid",
                  borderColor: seviye === s ? "#0ea5e9" : "#e2e8f0",
                  backgroundColor: seviye === s ? "#0ea5e9" : "white",
                  color: seviye === s ? "white" : "#64748b",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 500
                }}
              >
                {s === "Baslangic" ? "Başlangıç" : s}
              </button>
            ))}
          </div>
        </header>

        <div style={{ marginBottom: "16px", color: "#94a3b8", fontSize: "13px" }}>
          {filtrelenmis.length} kurs bulundu
        </div>

        {filtrelenmis.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <p style={{ fontSize: "48px", margin: "0 0 16px" }}>🔍</p>
            <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 8px", color: "#1e293b" }}>
              Sonuç bulunamadı
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              Farklı bir arama veya filtre kombinasyonu deneyin.
            </p>
            <button
              onClick={() => { setArama(""); setKategori("Hepsi"); setSeviye("Hepsi"); setSiralama("varsayilan") }}
              style={{
                marginTop: "16px",
                padding: "8px 20px",
                background: "#6366f1",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600
              }}
            >
              Filtreleri temizle
            </button>
          </div>
        ) : (
          <section style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px"
          }}>
            {filtrelenmis.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => setSecilenKurs(course)}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  )
}

export default App
import type { Course } from "../types"

interface CourseDetailProps {
  course: Course
  onGeri: () => void
}

const seviyeRenk = {
  "Baslangic": { bg: "#dcfce7", color: "#166534" },
  "Orta": { bg: "#fef9c3", color: "#854d0e" },
  "Ileri": { bg: "#fee2e2", color: "#991b1b" }
}

function CourseDetail({ course, onGeri }: CourseDetailProps) {
  const renk = seviyeRenk[course.seviye]

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        <button
          onClick={onGeri}
          style={{
            background: "none",
            border: "none",
            color: "#6366f1",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "24px",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          ← Tüm kurslara dön
        </button>

        <img
          src={course.resim}
          alt={course.baslik}
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            borderRadius: "16px",
            marginBottom: "32px",
            display: "block"
          }}
        />

        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", color: "#6366f1", fontWeight: 600, background: "#eef2ff", padding: "4px 10px", borderRadius: "20px" }}>
            {course.kategori}
          </span>
          <span style={{ fontSize: "12px", fontWeight: 600, background: renk.bg, color: renk.color, padding: "4px 10px", borderRadius: "20px" }}>
            {course.seviye}
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, margin: "0 0 12px", color: "#0f172a" }}>
          {course.baslik}
        </h1>

        <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "32px" }}>
          <strong>{course.egitmen}</strong> tarafından hazırlandı
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "16px",
          marginBottom: "32px"
        }}>
          {[
            { label: "Süre", value: `${course.sure} saat` },
            { label: "Puan", value: `⭐ ${course.puan}` },
            { label: "Öğrenci", value: course.ogrenciSayisi.toLocaleString() },
            { label: "Seviye", value: course.seviye }
          ].map(item => (
            <div key={item.label} style={{
              background: "white",
              padding: "16px",
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid #e2e8f0"
            }}>
              <p style={{ fontSize: "12px", color: "#94a3b8", margin: "0 0 6px", fontWeight: 500 }}>{item.label}</p>
              <p style={{ fontSize: "18px", fontWeight: 700, margin: 0, color: "#0f172a" }}>{item.value}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: "white",
          padding: "28px",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          marginBottom: "24px"
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#0f172a" }}>
            Kurs Hakkında
          </h2>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8, margin: 0 }}>
            {course.aciklama}
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          padding: "24px 28px",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <div>
            <p style={{ fontSize: "13px", color: "#94a3b8", margin: "0 0 4px" }}>Kurs fiyatı</p>
            <p style={{ fontSize: "36px", fontWeight: 800, margin: 0, color: "#0f172a" }}>₺{course.ucret}</p>
          </div>
          <button style={{
            background: "#6366f1",
            color: "white",
            border: "none",
            padding: "14px 36px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 700,
            cursor: "pointer"
          }}>
            Kursa Kaydol
          </button>
        </div>

      </div>
    </main>
  )
}

export default CourseDetail
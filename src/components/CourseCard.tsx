import { useState } from "react"
import type { Course } from "../types"

interface CourseCardProps {
  course: Course
  onClick: () => void
}

const seviyeRenk: Record<Course["seviye"], { bg: string; color: string }> = {
  "Baslangic": { bg: "#dcfce7", color: "#166534" },
  "Orta": { bg: "#fef9c3", color: "#854d0e" },
  "Ileri": { bg: "#fee2e2", color: "#991b1b" }
}

function CourseCard({ course, onClick }: CourseCardProps) {
  const [hover, setHover] = useState(false)
  const renk = seviyeRenk[course.seviye]

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "white",
        cursor: "pointer",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 12px 24px rgba(0,0,0,0.12)" : "0 1px 3px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease"
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={course.resim}
          alt={course.baslik}
          style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
        />
        <span style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          fontSize: "11px",
          fontWeight: 600,
          background: renk.bg,
          color: renk.color,
          padding: "3px 8px",
          borderRadius: "10px"
        }}>
          {course.seviye === "Baslangic" ? "Başlangıç" : course.seviye}
        </span>
      </div>

      <div style={{ padding: "16px" }}>
        <span style={{ fontSize: "12px", color: "#6366f1", fontWeight: 600 }}>
          {course.kategori}
        </span>
        <h3 style={{ fontSize: "15px", margin: "6px 0", color: "#0f172a", fontWeight: 700, lineHeight: 1.4 }}>
          {course.baslik}
        </h3>
        <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 8px" }}>
          {course.egitmen}
        </p>
        <p style={{ fontSize: "13px", color: "#94a3b8", margin: "0 0 14px", lineHeight: "1.5", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {course.aciklama}
        </p>

        <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
          <span style={{ fontSize: "12px", color: "#64748b" }}>⭐ {course.puan}</span>
          <span style={{ fontSize: "12px", color: "#64748b" }}>🕐 {course.sure} saat</span>
          <span style={{ fontSize: "12px", color: "#64748b" }}>👥 {course.ogrenciSayisi.toLocaleString()}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f1f5f9", paddingTop: "12px" }}>
          <span style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a" }}>
            ₺{course.ucret}
          </span>
          <span style={{
            fontSize: "12px",
            color: "#6366f1",
            fontWeight: 600,
            opacity: hover ? 1 : 0,
            transition: "opacity 0.2s"
          }}>
            Detayları gör →
          </span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
import { useState, useEffect } from "react"
import { courses as tumKurslar } from "../data/courses"
import type { Course } from "../types"

function useCourses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [yukleniyor, setYukleniyor] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCourses(tumKurslar)
      setYukleniyor(false)
    }, 1000)
  }, [])

  return { courses, yukleniyor }
}

export default useCourses
import api from "@/lib/axios"
import { useState } from "react"

export function useResume(){
    const [resumes, setResumes] = useState([])
    const [loading, setLoading] = useState(false)
    const getResume = async () => {
        try {
            setLoading(true)
            const res = await api.get("/resume/")
            setResumes(res.data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        getResume,
        loading,
        resumes
    }
}
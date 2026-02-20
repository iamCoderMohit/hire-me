import api from "@/lib/axios"
import { useState } from "react"

export function useJobs(){
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)

    const getJobs = async (id: string) => {
        try {
            setLoading(true)
            const res = await api.get(`/step-2/job-match/${id}`)
            setJobs(res.data.data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        jobs,
        loading,
        getJobs
    }
}
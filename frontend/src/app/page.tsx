"use client"

import { resumeUpload, resumeUploadTest } from "@/lib/api/resumeUpload";
import api from "@/lib/axios";
import { supabase } from "@/lib/supabase";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const handleClick = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google"
    })
  }
  
  const getInfo = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        console.log(user);
  }

  const verifyUser = async () => {
    const res = await api.get(`/auth/sync-user`)
    console.log(res.data)
  }

  const [file, setFile] = useState<File | null>(null)

  const formData = new FormData()
  formData.append("file", file)
  formData.append("title", "my-resume")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const fetchJobs = async () => {
    await api.post("/step-2/admin/run-job-fetch")
  }

  return (
    <>
      <h1>hey there</h1>
      <button onClick={handleClick}>sign in</button>
      <br />
      <button onClick={getInfo}>getInfo</button>
      <br />
      <button onClick={verifyUser}>verify user</button>

      <form action="">
        <input type="file" onChange={handleChange} />
      </form>
      <button onClick={() => resumeUpload(formData)}>upload</button>
      <br />
      <button onClick={() => resumeUploadTest(formData)}>test</button>
      <br />
      <button onClick={fetchJobs}>fetch jobs</button>
      <br />
    </>
  );
}

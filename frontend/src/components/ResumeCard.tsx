"use client"

import dynamic from "next/dynamic";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ResumeViewer = dynamic(
  () => import("@/components/./ResumeViewer"),
  { ssr: false }
)

export default function ResumeCard({ url, id }: { url: string, id: string }) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/jobs/${id}`)}>
      <ResumeViewer url={url} />
      <Button text="Search Jobs" fromRes textSize="sm" />
    </div>
  );
}

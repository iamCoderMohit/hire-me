import api from "../axios"

export const resumeUpload = async (formData: FormData) => {
    try {
        if(!formData){
            return
        }
        api.post("/step-1/upload-resume", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export const resumeUploadTest = async (formData: FormData) => {
    try {
        if(!formData){
            return
        }
        api.post("/step-1/test", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    } catch (error) {
        console.error(error)
    }
}
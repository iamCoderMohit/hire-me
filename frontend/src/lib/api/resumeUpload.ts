import api from "../axios"

export const resumeUpload = async (formData: FormData) => {
    try {
        if(!formData){
            return
        }
        await api.post("/step-1/upload-resume", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return true
    } catch (error) {
        console.error(error)
    }
}
//fix the upload thing, currently its not uploading
// show loading or something 
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
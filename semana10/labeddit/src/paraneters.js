export const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"
export const config = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}
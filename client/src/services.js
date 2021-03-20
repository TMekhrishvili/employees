import axios from 'axios'

export const employeeSave = data => {
    const url = `add/5/${data.firstname}/${data.lastname}`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                console.log(response)
                resolve(response)
            })
            .catch(error => {
                console.error(error)
                reject(error)
            })
    })
}
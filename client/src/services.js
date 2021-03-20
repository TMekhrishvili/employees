import axios from 'axios'

export const fetchUsers = () => {
    const url = '/'
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const userSet = data => {
    const url = `add/${data.firstname}/${data.lastname}`
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


export const userDelete = id => {
    const url = `del/${id}`
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

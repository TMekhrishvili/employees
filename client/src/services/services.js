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
    const url = 'add'
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const userGet = id => {
    const url = `view/${id}`
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

export const userUpdate = data => {
    const url = 'update'
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const userDelete = id => {
    const url = `delete/${id}`
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}

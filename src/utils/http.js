import fakeData from './fakeData.json'

export const http_get = async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(fakeData)
        }, 1500)
    })
}

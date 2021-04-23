export default class HTTP {
    async get(url) {
        try {
            const data = await fetch(url)
            const json = await data.json()
            return json
        } catch (error) {
            console.error(error)
            return []
        }
    }
}

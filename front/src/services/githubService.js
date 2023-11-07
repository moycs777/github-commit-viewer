export async function fetchCommits(username, repository) {
    try {
        const response = await fetch(
            `http://localhost:10000/github/commits/${username}/${repository}`
        )

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Unable to get history commits.')
        }
    } catch (error) {
        throw error
    }
}

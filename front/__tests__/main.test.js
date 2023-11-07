const { fetchCommits } = require('../src/services/githubService')

global.fetch = jest.fn()

describe('fetchCommits', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should fetch and return data when the response is OK', async () => {
        const mockData = [{ commit: 'Commit 1' }, { commit: 'Commit 2' }]
        const mockResponse = { ok: true, json: async () => mockData }

        fetch.mockResolvedValue(mockResponse)

        const username = 'exampleUsername'
        const repository = 'exampleRepository'

        const result = await fetchCommits(username, repository)

        expect(result).toEqual(mockData)

        expect(fetch).toHaveBeenCalledWith(
            `http://localhost:10000/github/commits/${username}/${repository}`
        )
    })

    it('should throw an error when the response is not OK', async () => {
        const mockResponse = { ok: false, statusText: 'Not Found' }

        fetch.mockResolvedValue(mockResponse)

        const username = 'exampleUsername'
        const repository = 'exampleRepository'

        await expect(fetchCommits(username, repository)).rejects.toThrowError(
            'Unable to get history commits.'
        )
    })

    it('should throw an error when an exception occurs during the request', async () => {
        fetch.mockRejectedValue(new Error('Network error'))

        const username = 'exampleUsername'
        const repository = 'exampleRepository'

        await expect(fetchCommits(username, repository)).rejects.toThrowError(
            'Network error'
        )
    })
})

import React, { useState } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import { CommitsTable } from './components/commits-table'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { fetchCommits } from './services/githubService'

export const GitCommitHistory = () => {
    const [username, setUsername] = useState('moycs777')
    const [repository, setRepository] = useState('github-commit-viewer')
    const [commits, setCommits] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleRepositoryChange = (e) => {
        setRepository(e.target.value)
    }

    const fetchAll = async () => {
        setIsSearching(true)

        if (username === '' || repository === '') {
            setIsSearching(false)
            return toast.error('All fields are required.')
        }

        try {
            const data = await fetchCommits(username, repository) // Call the service function

            setCommits(data)
            setIsSearching(false)
            toast.success('History loaded')
        } catch (error) {
            setIsSearching(false)
            toast.error(
                'Unable to get history commits. Remember, the repository should be public'
            )
            console.error('Error obtaining commits:', error)
        }
    }

    return (
        <div className="w-full pb-4">
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="w-full flex flex-col items-center px-3 md:px-8 ">
                <h1 className="text-center font-bold text-lg mt-4">
                    Git Commits History
                </h1>
                <div className="flex flex-col items-center my-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="GitHub Username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="w-[200px] border border-black px-2 py-1"
                        />
                        <input
                            type="text"
                            placeholder="Repository Name"
                            value={repository}
                            onChange={handleRepositoryChange}
                            className="w-[200px] border border-black px-2 py-1"
                        />
                    </div>

                    <button
                        onClick={fetchAll}
                        className="bg-blue-300 hover:bg-blue-400 flex justify-center w-fit px-2 py-1 mt-2"
                        disabled={isSearching}
                    >
                        {isSearching ? (
                            <MoonLoader size={20} color="#000000" />
                        ) : (
                            <span className="font-semibold">Get Commits</span>
                        )}
                    </button>
                </div>
            </div>

            <div className="md:w-full overflow-x-auto py-2 flex md:justify-center px-3 md:px-8">
                <CommitsTable datos={commits} />
            </div>
        </div>
    )
}

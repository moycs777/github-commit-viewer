import React from 'react'
import { format } from 'date-fns'

export const Commit = ({ item, index }) => {
    return (
        <>
            <td className="border border-black text-center p-1">{index + 1}</td>
            <td className="border border-black text-center min-w-[110px] px-1">
                {item.commit.author.name}
            </td>
            <td className="border border-black px-1 min-w-[250px]">
                {item.commit.message}
            </td>
            <td className="border border-black text-center px-1">{item.sha}</td>
            <td className="border border-black text-center min-w-[150px]">
                {format(new Date(item.commit.author.date), 'dd/MM/yyyy HH:mm')}
            </td>
        </>
    )
}

import { Commit } from './commit'

export const CommitsTable = ({ datos }) => {
    return (
        <>
            <table className="bg-green-400 w-auto">
                <thead>
                    <tr className="bg-red-400">
                        <th className="border bg-blue-300 border-black px-1">
                            #
                        </th>
                        <th className="border bg-blue-300 min-w-[110px] border-black">
                            Author
                        </th>
                        <th className="border bg-blue-300 border-black min-w-[250px]">
                            Message
                        </th>
                        <th className="border bg-blue-300 border-black px-4">
                            SHA
                        </th>
                        <th className="border bg-blue-300 border-black min-w-[150px]">
                            Data
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(datos) && datos.length > 0 ? (
                        datos.map((item, index) => (
                            <tr
                                key={index}
                                className={`${
                                    index % 2 === 0
                                        ? 'bg-gray-300'
                                        : 'bg-gray-100'
                                } border border-black`}
                            >
                                <Commit key={index} item={item} index={index} />
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="border border-black">
                                No hay datos disponibles.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

'use client'
export default function PropsTable({ props }: { props?: Array<{ name: string, type: string, default: string, description: string }> }) {
    return (
        <div>
            {props && <div className="overflow-x-auto rounded-md">
                <table className="min-w-full divide-y divide-neutral-700 text-neutral-300">
                    <thead className="bg-neutral-800">
                        <tr>
                            {headData.map((data, i) => (
                                <th key={i} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{data}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-[#171717] divide-y divide-neutral-700">
                        {props?.map((prop) => (
                            <tr key={prop.name}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{prop.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{prop.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{prop.default}</td>
                                <td className="px-6 py-4 text-sm text-gray-300">{prop.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            {!props && <div className="text-4xl max-sm:text-2xl text-neutral-600 opacity-40 font-bold text-center content-center p-10 pointer-events-none">
                No changes – same as the first.
                </div>}
        </div>
    )
}

const headData = ["Name", "Type", "Default", "Description"]

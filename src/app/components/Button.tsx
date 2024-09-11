export const PrimaryButton = ({ children, onClick }: {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return <div>
        <button onClick={onClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{children}</button>
    </div>
}

export const SecondaryButton = ({ prefix, children, onClick }: {
    prefix?: React.ReactNode,
    children: React.ReactNode,
    onClick: () => void
}) => {
    return <div>
        <button onClick={onClick} type="button" className="flex text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700 dark:border-blue-700">
            <div className="">
                {prefix}
            </div>
            <div className="">
                {children}
            </div>
        </button>
    </div>
}

export const ThridButton = ({ children, onClick }: {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return <div>
        <button onClick={onClick} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">{children}</button>
    </div>
}
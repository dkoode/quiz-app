export default function CardHeader({children} : {children: React.ReactNode}) {
    return(
        <div className='py-4 px-6 w-full border-b-2 border-b-blue-200 bg-blue-100'>
            {children}
        </div>
    )
}
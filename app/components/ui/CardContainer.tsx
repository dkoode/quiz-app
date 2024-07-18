export default function CardContainer({children} : {children: React.ReactNode}){
    return(
        <div className="max-w-2xl text-black mx-auto bg-white overflow-hidden border-[1px] border-blue-200 rounded-xl shadow-md">
            {children}
        </div>
    )
}
export default function QuestionBox({question} : {question: string}) {
    return(
        <div className='px-6 py-4 border-b-[1px] border-b-blue-100'>
        <span className='text-xs rounded-md text-blue-400 inline-block pb-1'>
            Question:
        </span>
        <p className="text-base">{question}</p>
      </div>
    )
}
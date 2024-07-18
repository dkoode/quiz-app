import { AnswerProps } from "@/app/types";
export default function AnswersBox({questions, onAnswerSelect, isAnswerable} : AnswerProps) {
    return(
        <div className="space-y-3 py-4 px-6">
            <span className='text-xs rounded-md text-blue-400 inline-block pb-1'>
                Answers:
            </span>
            {questions.map((option, index) => (
            <button
                key={index}
                onClick={() => onAnswerSelect(option, index)}
                disabled={!isAnswerable}
                className={`w-full text-left py-3 flex items-center gap-x-3 md:block md:min-w-[600px] px-5 transition-all ${isAnswerable ? "hover:bg-blue-100" : "hover:bg-slate-200"} ${isAnswerable ? "cursor-pointer" : "cursor-not-allowed"} ${isAnswerable ? "bg-blue-50" : "bg-slate-100"} rounded-xl `}
            >
            <span className='min-h-8 min-w-8 mr-2 inline-flex items-center justify-center bg-blue-200 text-blue-600 rounded-full'> 
                {['A', 'B', 'C', 'D'][index]}
            </span> 
                {option}
            </button>
            ))}
      </div>
    )
}
import CardContainer from "./ui/CardContainer";
import CardHeader from "./ui/CardHeader"

export default function QuizInfo({onClick}: {onClick: () => void}) {
    return (
        <CardContainer>
          <CardHeader>
            <h2 className="text-2xl text-blue-900 font-semibold">Quiz Information</h2>
          </CardHeader>
          <div className="mx-6 my-4 rounded-xl bg-blue-50 py-4 px-6">
            <p className="text-base text-blue-800">
              The quiz consists of 10 questions in total. You have a total of 30 seconds to answer each question. When the quiz is over, you can view your answers.
            </p>
          </div>
          <div className="px-6 py-4 border-t-[1px] border-t-blue-100 mt-6">
            <span className='text-blue-500 text-sm'>
              Rules:
            </span>  
            <ul className="list-disc list-inside mt-2 flex flex-col gap-y-4">
              <li className="text-blue-900 text-base">
                  You cannot answer questions for the first 10 seconds
              </li>
              <li className="text-blue-900 text-base">
                  You have 30 seconds to answer each question.
              </li>
              <li className="text-blue-900 text-base">
                  You cannot go back to the previous question.
              </li>   
              <li className="text-blue-900 text-base">
                  After 30 seconds you will be directed to the next question.
              </li>
            </ul>
          </div>
          <div className="mt-4 py-4 px-6 border-t-[1px] border-t-blue-100">
            <button
              onClick={onClick}
              className="w-full py-3 px-5 bg-blue-500 font-bold text-white rounded-xl hover:bg-blue-600 transition-all"
            >
              Start the Quiz
            </button>
          </div>
        </CardContainer>
    );
}
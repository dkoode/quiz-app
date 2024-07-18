import { AnswerResult } from "@/app/types"
export default function Table({answers}: {answers: AnswerResult[]}) {
    return(
        <table className="w-full text-sm text-left text-blue-900">
            <thead className="text-xs text-blue-900 uppercase bg-blue-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Question
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Selected
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Answer
                    </th>
                </tr>
            </thead>
            <tbody>
                {answers.map((answer, index) => (
                    <tr key={index} className="bg-white border-b border-b-blue-100">
                    <td scope="row" className="px-6 py-4 font-medium text-blue-900 whitespace-nowra">
                        <span className="rounded-md text-sm font-bold bg-blue-100 min-w-6 min-h-6 inline-flex items-center justify-center">
                            {index + 1}
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        {answer.question}
                    </td>
                    <td className="px-6 py-4">
                        <span className="font-bold text-base text-blue-600">
                            {['A', 'B', 'C', 'D'][answer.selectedAnswerItem as number]}
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        {answer.answer}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
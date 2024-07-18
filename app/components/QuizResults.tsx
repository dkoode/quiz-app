import { Answer } from "../types";
import CardContainer from "./ui/CardContainer";
import CardHeader from "./ui/CardHeader";
import Table from "./ui/Table";
export default function QuizResults({answers} : {answers: Answer[]}) {
    return (
        <CardContainer>
          <CardHeader>
            <h2 className="text-2xl text-blue-900 font-semibold">Quiz Results</h2>
          </CardHeader>
          <div className="relative overflow-auto max-h-[400px]">
            <Table answers={answers} />
          </div>
          <div className="mt-4 py-4 px-6 border-t-[1px] border-t-blue-100">
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-5 font-bold bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
            >
              Go to home page
            </button>
          </div>
        </CardContainer>
    );
}
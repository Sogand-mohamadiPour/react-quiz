import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options"

function Questions() {
    const { questions, index} = useQuiz();
    const question = questions.at(index);
    return (
        <>
            <h4>{question.question}</h4>
            <Options
                question={question}
            />
        </>
    );
}

export default Questions

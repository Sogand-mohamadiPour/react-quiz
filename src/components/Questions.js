import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Questions() {
    const { questions, index } = useQuiz();
    const question = questions[index];

    if (!question) return <p>Loading question...</p>;  

    return (
        <>
            <h4>{question.question}</h4>
            <Options question={question} />
        </>
    );
}

export default Questions;

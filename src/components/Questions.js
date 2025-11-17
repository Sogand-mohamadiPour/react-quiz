import Options from "./Options"

const Questions = ({ question, dispatch, answer }) => {
    console.log(question)
    return (
        <>
            <h4>{question.question}</h4>
            <Options
                question={question}
                dispatch={dispatch}
                answer={answer}
            />
        </>
    );
}

export default Questions

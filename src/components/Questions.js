import Options from "./Options"

const Questions = ({ question }) => {
    console.log(question)
    return (
        <>
            <h4>{question.question}</h4>
            <Options question={question} />
        </>
    );
}

export default Questions

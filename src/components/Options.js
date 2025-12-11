export default function Options({ question }) {
    const { dispatch, answer } = useQuiz();
    const hasAnswered = answer !== null;

    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button
                    key={option}
                    className={`btn btn-option 
                        ${index === answer ? "answer" : ""}
                        ${hasAnswered
                            ? index === question.correctOption
                                ? "correct"
                                : "wrong"
                            : ""}`
                    }
                    disabled={hasAnswered}
                    onClick={() =>
                        dispatch({ type: "newAnswer", payload: index })
                    }
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Timer from "./Timer";
import Footer from "./Footer";


export default function App() {




  return (
    <>
      <div className="app">
        <Header />
        <Main>
          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'ready' && <StartScreen
            numQuestions={numQuestions}
            dispatch={dispatch}
          />}
          {status === 'active' && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
                maxPossiblePoints={maxPossiblePoints}
                answer={answer}
              />
              <Questions
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <Footer>
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                />
                <NextButton
                  dispatch={dispatch}
                  answer={answer}
                  index={index}
                  numQuestions={numQuestions}
                />
              </Footer>
            </>
          )}
          {status === 'finished' && (<FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />)}
        </Main>
      </div>
    </>
  );
}
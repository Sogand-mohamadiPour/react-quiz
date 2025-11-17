import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen";
import Questions from "./Questions";

const initialState = {
  questions: [],

  // 'loading', 'error', 'active', 'finished'
  status: 'loading'
}

function reducer(state, action) {
  switch (action.type) {

    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };

    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      };

    case 'start':
      return { ...state, status: 'active' };

    default:
      throw new Error("action unknown")
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(function () {
    fetch('http://localhost:9000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }))
  }, [])

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
          {status === 'active' && <Questions />}
        </Main>
      </div>
    </>
  );
}
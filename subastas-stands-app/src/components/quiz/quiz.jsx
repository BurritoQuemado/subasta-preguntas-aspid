    import React, { useState, useEffect } from "react";
    import questions from "../../questions";
    import { Link } from "react-router-dom";

    const Quiz = ({user_id}) => {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [result, setResult] = useState(0);
        const [resultQuestions, setResultQuestions] = useState(0);
        const [showResult, setShowResult] = useState(false);
        
        const { question, answers, correct_answer, value } = questions[currentQuestion];
        
        const chooseAnswer = (option) => {
            console.log(result)
            if(currentQuestion < questions.length - 1) {
                if (option === correct_answer) {
                    setResultQuestions(resultQuestions + 1);
                    setResult(result + value);
                }
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
        }
        useEffect(() => {
            if(showResult){
                fetch('https://subasta-preguntas-aspid-e16826bf4816.herokuapp.com/answerQuiz', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        user_id: user_id,
                        currency: result
                    })
                })
                .then(response => response.json())
                .then(json => console.log(json))
            }
        }, [result, showResult, user_id])

        return (
            <>
                { !showResult ?
                <div className="bg-white px-4 py-2 mx-auto max-w-3xl px-6 lg:px-8 lg:py-6">
                    <div className="">
                        <div className="grid grid-cols-2">
                            <div className="text-left">
                                <span >Puntuación: {result}</span>
                            </div>
                            <div className="text-right">
                                <span >Pregunta: {currentQuestion + 1}</span>
                                <span>/{questions.length}</span>
                            </div>
                        </div>
                        <div>
                            <div className="py-4">
                                <h2 className="text-center">{question}</h2>
                            </div>
                            <div className="grid grid-rows-4 gap-2">
                            {
                                answers.map((answer,index) =>{
                                    return (
                                        <button className="justify-center text-white rounded-md bg-principal border border-principal mx-10 my-2 py-1" key={index} onClick={() => chooseAnswer(index + 1)}> { answer } </button>
                                    )

                                } 
                                )
                            } 
                            </div>
                        </div>
                    </div>
                </div> 
                : <div className="bg-white px-4 py-5 lg:py-2">
                    <div className="text-center">
                        <h2 className="font-bold">Su resultado es: {resultQuestions}/{questions.length}</h2>
                    </div>
                    <div className="text-center">
                        <p>Obtuvo <b>{result.toLocaleString()}</b> Cryptomonedas</p>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                        to={'/cartera-desc'}
                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                        >
                            Regresar
                        </Link>
                    </div>
                </div> }
            </>
        );
    }

    export default Quiz;
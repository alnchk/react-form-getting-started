import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is your age?',
			answerOptions: [
				{ answerText: '< 18' },
				{ answerText: '18-25' },
				{ answerText: '26-40', },
				{ answerText: '> 40' },
			],
		},
		{
			questionText: 'What is your name?',
			answerOptions: [
				{ answerText: 'Sergey' },
				{ answerText: 'Dmitry', },
				{ answerText: 'Egor' },
				{ answerText: 'Other', },
			],
		},
		{
			questionText: 'Do you smoke?',
			answerOptions: [
				{ answerText: 'Yes', },
				{ answerText: 'No' },
				{ answerText: 'Sometimes' },
			],
		},
		{
			questionText: 'How many Harry Potter books have you read?',
			answerOptions: [
				{ answerText: '1' },
				{ answerText: 'All' },
				{ answerText: 'None' },
				{ answerText: 'What?', },
			],
		},
	];
	const [answers, updateAnswers] = useState([]);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResults, setShowResults] = useState(false);

	const handleAnswerOptionClick = (answer) => {

		const nextQuestion = currentQuestion + 1;
		updateAnswers(arr => [...arr, { 'question': [questions[currentQuestion].questionText], 'answer': answer }]);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResults(true);
		}
	};

	const handleReset = () => {
		updateAnswers(arr => []);
		setCurrentQuestion(0);
		setShowResults(false);
	}
	return (
		<div className='app'>
			{showResults ? (
				<>
					<h1>
						You answered:
					</h1>
					<div className='result-section'>
						{answers.map((ans) => (
							<div>{ans.question}: {ans.answer}</div>
						)
						)}
						<div id='ok-button'>
							<button onClick={() => handleReset()}>Ok</button>
						</div>
					</div>
				</>
			) : (
				<>
					<h1>
						Answer all questions
					</h1>
					<div className='question_answer'>
						<div className='question-section'>
							<div className='question-text'>{currentQuestion + 1}. {questions[currentQuestion].questionText}</div>
							<div className='question-count'>
								<span>{currentQuestion + 1}</span> из {questions.length}
							</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.answerText)}>{answerOption.answerText}</button>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}

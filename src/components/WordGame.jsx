import React, { useState } from 'react'
import { quiz } from '../data/wod'

const WordGame = () => {
  const question = quiz[1]
  const [selectedLetters, setSelectedLetters] = useState([])
  const [result, setResult] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleSelect = (letter) => {
    if (selectedLetters.length < 2) {
      const newSelection = [...selectedLetters, letter]
      setSelectedLetters(newSelection)

      if (newSelection.length === 2) {
        const isCorrect =
          newSelection[0] === question.answer[0] &&
          newSelection[1] === question.answer[1]
        setResult(isCorrect ? 'சரியான விடை!' : 'தவறு!')
        if (isCorrect) setDisabled(true)
      }
    }
  }

  const handleRetry = () => {
    setSelectedLetters([])
    setResult('')
    setDisabled(false)
  }

  const displayedWord = () => {
    const first = selectedLetters[0] || '__'
    const second = selectedLetters[1] || '__'
    return question.word.replace('__', first).replace('__', second)
  }

  return (
    <div className="game p-3">
      <h4 className="mb-3">வெற்றிடங்களை நிரப்புங்கள்:</h4>
      <h2 className="fw-bold text-primary">{displayedWord()}</h2>

      <div className="d-flex gap-3 flex-wrap my-3">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className="btn btn-outline-dark"
            disabled={disabled || selectedLetters.includes(opt)}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {result && (
        <div
          className={`fw-bold mb-3 ${
            result === 'சரியான விடை!' ? 'text-success' : 'text-danger'
          }`}
        >
          {result}
        </div>
      )}

      {result === 'தவறு!' && (
        <button className="btn btn-warning" onClick={handleRetry}>
          மீண்டும் முயற்சிக்கவும்
        </button>
      )}
    </div>
  )
}

export default WordGame

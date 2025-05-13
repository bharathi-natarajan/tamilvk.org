import WordGame from './WordGame'
import './WordOfTheDay.css'
import { words, encyclopedia } from '../data/wod'

const WordOfTheDay = () => {
  const num = 0

  return (
    <div className="container-fluid mb-4 sign-up-tile-area pb-2 ">
      <div className="row m-auto pt-5 bg-secondary text-light">
        <dir className="col">
          <h2 className="fs-3 pb-3">நாள் ஒன்றுக்கு ஒரு சொல்</h2>
        </dir>
      </div>
      <div className="row m-auto p-5 shadow">
        <div className="col-xl-3 col-lg-4 col-md-5 mb-3 sign-up-tile bg-light">
          <h3 className="fs-5 text-success">சொல் வங்கி</h3>
          <div className="tile-bg tile-bg1">
            <img className="imgs" src="/images/wod.svg" alt="Word of the day" />
          </div>
          <h4 className="px-2">{words[num].word}</h4>
          <p className="px-2 text-danger">{words[num].english}</p>
          <p className="px-3 text-primary">{words[num].meaning}</p>
          <p className="px-3 text-secondary">{words[num].ex}</p>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 mb-3 sign-up-tile bg-light">
          <h3 className="fs-5 text-success">கலைக்களஞ்சியம்</h3>

          <div className="tile-bg tile-bg2">
            <img
              className="imgs"
              src="/images/encyclopedia.svg"
              alt="Encyclopedia"
            />
          </div>
          <div>
            <img
              className="d-block mx-auto img-thumbnail"
              style={{
                width: '100px',
                height: 'auto',
              }}
              src={encyclopedia[num].image}
              alt={encyclopedia[num].title}
            />
            <h4>{encyclopedia[num].title}</h4>
          </div>

          <p className="text-danger">{encyclopedia[num].english}</p>

          <p className="text-secondary">{encyclopedia[num].description}</p>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 sign-up-tile bg-light">
          <h3 className="fs-5 text-success">தெரிந்தது எவ்வளவு?</h3>
          <div className="tile-bg tile-bg3">
            <img className="imgs" src="/images/quiz.svg" alt="Quiz" />
          </div>
          <div>
            <WordGame />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WordOfTheDay

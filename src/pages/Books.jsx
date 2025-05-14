import { useState } from 'react'
import { bookList } from '../data/booklist'
import SingleBook from './SingleBook'
import './Books.css'

const Books = () => {
  const [books, setBooks] = useState(bookList[0].books)
  const [bookGroup, setBookGroup] = useState(bookList[0].group)

  const handleClick = (id) => {
    const selected = bookList.find((group) => group.id === id)
    setBooks(selected.books)
    setBookGroup(selected.group)
  }

  return (
    <section className="books-section m-5 p-5">
      <div className="books-container">
        <div className="books-menu">
          <h3 className="text-success">தமிழ் வளர்ச்சிக் கழக வெளியீடுகள்</h3>
          {bookList.map(({ id, group }) => (
            <button key={id} onClick={() => handleClick(id)}>
              {group}
            </button>
          ))}
        </div>
      </div>
      <SingleBook books={books} bookGroup={bookGroup} />
    </section>
  )
}

export default Books

/* <section className="container mt-5 pt-5">
<div className="row">
  <div className="col-12 col-xl-4 col-lg-4 border">
    some content goes here
  </div>
  <div className="col-12 col-xl-8 col-lg-8 border">
    <SingleBook />
  </div>
</div>
</section> */

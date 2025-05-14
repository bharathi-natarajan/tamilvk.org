import { useState } from 'react'
import './SingleBook.css'

const SingleBook = ({ books, bookGroup }) => {
  const [selectedBook, setSelectedBook] = useState(null)

  const handleImageClick = (book) => {
    setSelectedBook(book)
  }

  const closeLightbox = () => {
    setSelectedBook(null)
  }

  return (
    <section className="singlebook-container">
      <h3 className="text-primary">{bookGroup}</h3>
      <div className="single-book">
        {books.map((book, index) => (
          <div className="book-container" key={index}>
            <div className="book-wrapper">
              <ul className="book-list">
                <li className="book-item">
                  <img
                    className="book-image"
                    src={book.img}
                    alt={book.title}
                    onClick={() => handleImageClick(book)}
                  />
                  <h4 className="book-title">{book.title}</h4>
                  <p className="badge">{book.author}</p>
                  <p>பதிப்பு: {book.publication}</p>
                  <p>விலை ரூ. {book.price}</p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox with book details */}
      {selectedBook && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={closeLightbox}>
              &times;
            </span>
            <img
              className="lightbox-img"
              src={selectedBook.img}
              alt={selectedBook.title}
            />
            <div className="lightbox-details">
              <h2>{selectedBook.title}</h2>
              <p>
                <strong>ஆசிரியர்:</strong> {selectedBook.author}
              </p>
              <p>
                <strong>பதிப்பு:</strong> {selectedBook.publication}
              </p>
              <p>
                <strong>விலை:</strong> ரூ. {selectedBook.price}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SingleBook

{
  /* <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://github.com/twbs.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">List group item heading</h6>
              <p className="mb-0 opacity-75">
                Some placeholder content in a paragraph.
              </p>
            </div>
            <small className="opacity-50 text-nowrap">50% தள்ளுபடி</small>
          </div>
        </a>
      </div>
    </div> */
}

import React, { useState } from 'react'
import { bookList } from '../data/booklist' // Assuming you store your data in a separate file

export default function Books() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
  const [selectedBookIndex, setSelectedBookIndex] = useState(0)

  const selectedGroup = bookList[selectedGroupIndex]
  const selectedBook = selectedGroup.books[selectedBookIndex]

  return (
    <div className="container mt-2 py-5">
      <div className="row py-5 text-center text-primary">
        <div className="col">
          <h2>தமிழ் வளர்ச்சிக் கழக வெளியீடுகள்</h2>
        </div>
      </div>
      <div className="row g-4">
        {/* Left Column - List Group */}
        <div className="col-md-5 order-2 order-md-1">
          <div className="mb-4">
            <select
              className="form-select text-success"
              onChange={(e) => {
                setSelectedGroupIndex(e.target.value)
                setSelectedBookIndex(0)
              }}
              value={selectedGroupIndex}
              style={{ fontFamily: 'Mukta Malar', fontSize: '1.2rem' }}
            >
              {bookList.map((group, index) => (
                <option className="text-primary" key={group.id} value={index}>
                  {group.group}
                </option>
              ))}
            </select>
          </div>

          <div className="list-group">
            {selectedGroup.books.map((book, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action d-flex gap-3 py-3 ${
                  selectedBookIndex === index ? 'active bg-info' : ''
                }`}
                onClick={() => setSelectedBookIndex(index)}
              >
                <img
                  src={book.img}
                  alt={book.title}
                  width="48"
                  height="48"
                  className="rounded-circle flex-shrink-0 object-fit-cover"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0" style={{ fontFamily: 'Tiro Tamil' }}>
                      {book.title}
                    </h6>
                    <p className="mb-0 opacity-75">{book.author}</p>
                  </div>
                  <small className="opacity-50 text-nowrap text-danger">
                    ₹{book.price}
                  </small>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Book Details */}
        <div className="col-md-7 order-1 order-md-2">
          <div className="card shadow-sm border-0">
            <img
              src={selectedBook.img}
              className="card-img-top object-fit-contain p-3 rounded"
              style={{ maxHeight: '300px' }}
              alt={selectedBook.title}
            />
            <div className="card-body">
              <h4
                className="card-title text-primary fs-4"
                style={{ fontFamily: 'Mukta Malar' }}
              >
                {selectedBook.title}
              </h4>
              <p className="mb-2 fs-5">
                ✍️ <strong>ஆசிரியர்:</strong> {selectedBook.author}
              </p>
              <p className="mb-2 fs-5">
                📘 <strong>வெளியீடு:</strong> {selectedBook.publication}
              </p>
              <p className="mb-0 text-success fs-5">
                💰 <strong>விலை:</strong> ₹{selectedBook.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

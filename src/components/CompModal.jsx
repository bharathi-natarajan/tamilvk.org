import React, { useState } from 'react'
import './CompModal.css'

const features = [
  {
    icon: '#grid-fill',
    title: 'Grid view',
    description: 'Not into lists? Try the new grid view.',
    color: 'text-body-secondary',
  },
  {
    icon: '#bookmark-star',
    title: 'Bookmarks',
    description: 'Save items you love for easy access later.',
    color: 'text-warning',
  },
  {
    icon: '#film',
    title: 'Video embeds',
    description: 'Share videos wherever you go.',
    color: 'text-primary',
  },
]

const CompModal = () => {
  const [visible, setVisible] = useState(true)

  const handleClose = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="modal show d-block fade" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title text-primary"
              style={{ fontFamily: 'Mukta Malar' }}
            >
              <span style={{ fontSize: '2rem' }}>50%</span> தள்ளுபடியில் தமிழ்
              நூல்கள்
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <img
                    src="/images/book_sample.png"
                    alt="book cover"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h5 className="lh-3 text-success">
                    தமிழ் வளர்ச்சிக் கழகத்தின் தமிழ்க் கலைக்களஞ்சியங்கள் உள்பட
                    60-ம் மேற்பட்ட தமிழ் நூல்கள் 50 சதவீத சலுகை விலையில்
                    கிடைக்கும்
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="modal-footer m-auto">
            <button
              type="button"
              className="btn btn-primary px-4 me-3"
              onClick={handleClose}
            >
              சரி
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleClose}
            >
              பிறகு
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default CompModal

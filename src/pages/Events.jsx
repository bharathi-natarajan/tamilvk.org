import { events } from '../data/events'

const Events = () => {
  return (
    <div className="container py-3">
      <h2 className="text-center mb-5 fw-bold text-primary">நிகழ்வுகள்</h2>

      {events.map((event) => (
        <div key={event.id} className="card mb-5 shadow-lg border-0">
          <div className="row g-0">
            {/* Event Image */}
            {event.img && (
              <div className="col-md-4 p-3">
                <img
                  src={event.img}
                  className="img-thumbnail rounded-start h-100 object-fit-cover"
                  alt="Event"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Event Content */}
            <div className={`col-md-${event.img ? '8' : '12'}`}>
              <div className="card-body p-4">
                <div className="mb-2 text-muted fw-semibold">
                  📅 நிகழ்வு தேதி: {event.date}
                </div>
                <p className="card-text fs-5">{event.title1}</p>
                <p className="card-text fw-bold mt-4">{event.title2}</p>

                {/* Styled article list without bullets */}
                <div className="d-flex flex-column gap-3 mt-3">
                  {Array.from({ length: 6 }, (_, i) => event[`article${i + 1}`])
                    .filter(Boolean)
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-light rounded shadow-sm border-start border-3 border-primary"
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Events

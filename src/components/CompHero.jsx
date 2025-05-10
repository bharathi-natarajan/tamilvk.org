import './CompHero.css'
import { heroText } from '../data'

const CompHero = () => {
  return (
    <main>
      <div className="container-fluid min-vh-100 pt-5">
        <div
          id="heroCarousel"
          className="container shadow-lg my-5 hero-section carousel slide"
          data-bs-ride="carousel"
          style={{ borderRadius: '10px' }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-2 text-body-emphasis  hero-font-resp">
                    {heroText[0].title1}
                  </h1>
                  <p className="lead hero-font-p">{heroText[0].title2}</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
                </div>
                <div className="col-lg-4  p-0 overflow-hidden">
                  <img
                    className="img-fluid"
                    src={heroText[0].img}
                    alt="திருவள்ளுவர்"
                    width="500"
                  />
                </div>
              </div>
            </div>
            {/* =========== */}
            <div className="carousel-item min-vh-100">
              <div class="px-2 pt-2 my-1 text-center">
                <div class="container px-5">
                  <img
                    src={heroText[1].img}
                    class="img-fluid border rounded-3 shadow-lg mb-4"
                    alt="Year 1947"
                    width="700"
                    height="600"
                  />
                </div>
                <h1 class="display-5 fw-bold text-body-emphasis hero-font2-title1">
                  {heroText[1].title1}
                </h1>
                <div class="col-lg-6 mx-auto">
                  <p class="lead mb-4 hero-font2-title2">
                    {heroText[1].title2}
                  </p>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" class="btn btn-warning btn-lg px-4">
                      மேலும் அறிய...
                    </button>
                  </div>
                </div>
                {/* <div
                  class="overflow-hidden"
                  style={{ maxHeight: '30vh' }}
                ></div> */}
              </div>
            </div>
            {/* ++++++++++ */}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  )
}
export default CompHero

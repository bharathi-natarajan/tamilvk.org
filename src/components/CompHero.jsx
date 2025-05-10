import './CompHero.css'

const CompHero = () => {
  return (
    <main>
      <div className="container-fluid min-vh-100">
        <div class="container my-5 hero-section">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-2 text-body-emphasis  hero-font-resp">
                எதிர்காலம் நோக்கி தமிழ்மொழியின் வளர்ச்சி !
              </h1>
              <p className="lead hero-font-p">
                உலகறியும் தமிழ் மரபும் பண்பாடும்
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
            </div>
            <div class="col-lg-4  p-0 overflow-hidden">
              <img
                class="img-fluid"
                src="/images/Valluvar_ClearBg.png"
                alt="திருவள்ளுவர்"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default CompHero

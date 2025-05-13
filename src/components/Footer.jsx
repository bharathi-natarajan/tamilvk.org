import { footerLinks } from '../data'

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>அமைப்பு</h5>
            <ul className="nav flex-column">
              {footerLinks.map(({ id, href, text }) => {
                return (
                  <li className="nav-item mb-2" key={id}>
                    <a href={href} className="nav-link p-0 text-body-secondary">
                      {text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>
                எங்கள் செய்தி மடலுக்கு உங்கள் மின்னஞ்சல் முகவரியை பதிவு
                செய்யுங்கள்
              </h5>
              <p>
                நிகழ்ச்சிகள் மற்றும் புதிய செயல்பாடுகள் பற்றி அறிந்து
                கொள்ளுங்கள்
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>
            © 2025 தமிழ் வளர்ச்சிக் கழகம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Instagram">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Facebook">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer

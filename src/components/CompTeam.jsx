import { Link } from 'react-router-dom'

const CompTeam = () => {
  return (
    <section className="container-fluid bg-white">
      <div className="row">
        <div className="col">
          <img src="/images/Team.png" alt="" className="img-fluid" />
          <div className="d-flex justify-content-center mb-3">
            <a href="/team">
              <button className="btn btn-outline-success">
                முழுப் பட்டியல்...
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CompTeam

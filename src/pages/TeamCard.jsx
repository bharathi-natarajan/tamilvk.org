import './TeamCard.css'

const TeamCard = ({ team }) => {
  return (
    <article className="container">
      <div className="row">
        {team.map((member, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="row g-0 h-100">
                {member.img ? (
                  <>
                    <div className="col-md-4">
                      <img
                        src={member.img}
                        className="img-fluid rounded-start h-100 object-fit-cover"
                        alt={member.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title name">{member.name}</h5>
                        <p className="card-text title1">{member.title1}</p>
                        <p className="card-text">
                          <small className="text-body-secondary title2">
                            {member.title2}
                          </small>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title name">{member.name}</h5>
                      <p className="card-text title1">{member.title1}</p>
                      <p className="card-text">
                        <small className="text-body-secondary title2">
                          {member.title2}
                        </small>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default TeamCard

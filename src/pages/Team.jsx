import { useState } from 'react'
import { teamMenuItems } from '../data'
import TeamCard from './TeamCard'

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState(teamMenuItems[0])

  return (
    <main className="container mt-5 pt-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center mb-4 fs-2 text-success">நிருவாகக் குழு</h2>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                {teamMenuItems.map(({ id, item }) => (
                  <li className="nav-item" key={id}>
                    <a
                      className={`nav-link ${
                        selectedTeam.id === id
                          ? 'active text-success fw-bold'
                          : ''
                      }`}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setSelectedTeam(teamMenuItems.find((t) => t.id === id))
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-body">
              <h4
                className="card-title fs-2 pb-2"
                style={{ fontFamily: 'Tiro Tamil', color: '#5a0080' }}
              >
                {selectedTeam.item}
              </h4>
              <TeamCard team={selectedTeam.members} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Team

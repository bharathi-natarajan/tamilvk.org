import './TeamCard.css'

const TeamCard = ({ team }) => {
  return (
    <div className="container">
      <div className="row">
        {team.map((member, index) => (
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
            key={index}
          >
            <div className="card h-100">
              <div className="row g-0 h-100">
                {member.img ? (
                  <>
                    <div className="col-4">
                      <div className="image-wrapper">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="img-fluid rounded-start"
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{member.name}</h5>
                        <p className="card-text">{member.title1}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {member.title2}
                          </small>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title">{member.name}</h5>
                      <p className="card-text">{member.title1}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
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
    </div>
  )
}

export default TeamCard

// const TeamCard = ({ team }) => {
//   return (
//     <article className="container">
//       <div className="row">
//         {team.map((member, index) => (
//           <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
//             <div className="card h-100">
//               <div className="row g-0 h-100">
//                 {member.img ? (
//                   <>
//                     <div className="col-md-4">
//                       <img
//                         src={member.img}
//                         className="img-fluid rounded-start w-100"
//                         style={{
//                           objectFit: 'cover',
//                           height: '100%',
//                           maxHeight: '200px',
//                         }}
//                         alt={member.name}
//                       />
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body">
//                         <h5 className="card-title name">{member.name}</h5>
//                         <p className="card-text title1">{member.title1}</p>
//                         <p className="card-text">
//                           <small className="text-body-secondary title2">
//                             {member.title2}
//                           </small>
//                         </p>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <div className="col-12">
//                     <div className="card-body">
//                       <h5 className="card-title name">{member.name}</h5>
//                       <p className="card-text title1">{member.title1}</p>
//                       <p className="card-text">
//                         <small className="text-body-secondary title2">
//                           {member.title2}
//                         </small>
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </article>
//   )
// }

// export default TeamCard

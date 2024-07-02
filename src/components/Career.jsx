import React from 'react'

const Career = () => {
  return (
    <div className='m-5'>
        <div className='container d-flex justify-content-between'>
            <div>
                <div className="card border border-4  shadow">
                    <img src="/careerimg/mern.jpeg" className="card-img-top" alt="fullstackdevelopement" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Fullstack Developement</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4  shadow">
                    <img src="/careerimg/ds.jpeg" className="card-img-top" alt="datascience" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Data Science</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4  shadow">
                    <img src="/careerimg/cyb.jpeg" className="card-img-top" alt="cybersecutity" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Install Governance</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Career
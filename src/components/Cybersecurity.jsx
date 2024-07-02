import React from 'react'

const Cybersecurity = () => {
  return (
    <div className='m-5'>
        <div className='container d-flex justify-content-between'>
            <div>
                <div className="card border border-4  shadow">
                    <img src="/cyber/cy1.png" className="card-img-top" alt="fullstackdevelopement" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Data Platform</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/cyber/cy2.jpeg" className="card-img-top" alt="datascience" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Cyber Analysis</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/cyber/cy3.jpeg" className="card-img-top" alt="cybersecutity" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Install Governance</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cybersecurity
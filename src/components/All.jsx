import React from 'react'


const All = () => {
  return (
    <div className='m-5'>
        <div className='container d-flex justify-content-between'>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/allImages/fsd-m.jpeg" className="card-img-top" alt="fullstackdevelopement" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Fullstack Developement</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/allImages/dsci-m.jpeg" className="card-img-top" alt="datascience" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Data Science</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/allImages/cyb-m.jpeg" className="card-img-top" alt="cybersecutity" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Cyber Security</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/allImages/career-m.jpeg" className="card-img-top" alt="career" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Career</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default All
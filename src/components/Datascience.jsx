import React from 'react'

const Datascience = () => {
  return (
    <div className='m-5'>
        <div className='container d-flex justify-content-between'>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/dsImages/ds1.jpeg" className="card-img-top" alt="fullstackdevelopement" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Domain Knowledge</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/dsImages/ds2.jpeg" className="card-img-top" alt="datascience" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Math & Static Skills</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/dsImages/ds3.jpeg" className="card-img-top" alt="cybersecutity" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Computer Science</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/dsImages/ds4.jpeg" className="card-img-top" alt="career" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Visualization</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Datascience
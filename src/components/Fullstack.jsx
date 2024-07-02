import React from 'react'

const Fullstack = () => {
  return (
    <div className='m-5'>
        <div className='container d-flex justify-content-between'>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/fsdImages/mongo.jpeg" className="card-img-top" alt="fullstackdevelopement" />
                    <div className="card-body">
                    <h5 className="card-title text-center">MongoDB</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/fsdImages/exp.png" className="card-img-top" alt="datascience" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Express JS</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/fsdImages/react.png" className="card-img-top" alt="cybersecutity" />
                    <div className="card-body">
                    <h5 className="card-title text-center">React JS</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card border border-4 shadow">
                    <img src="/fsdImages/express.png" className="card-img-top" alt="career" />
                    <div className="card-body">
                    <h5 className="card-title text-center">Node JS</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fullstack
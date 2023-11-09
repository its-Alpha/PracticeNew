import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

const Card = () => {
    return (
        <div>

            <div className='container my-3'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card shadow p-2">
                            <img src="/Images/1.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <Link to='' className='btn btn-primary'>View Detals</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-2">
                            <img src="/Images/2.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <Link to='' className='btn btn-primary'>View Detals</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-2">
                            <img src="/Images/3.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <Link to='' className='btn btn-primary'>View Detals</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-2">
                            <img src="/Images/4.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <Link to='' className='btn btn-primary'>View Detals</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
import React from 'react';

const Blogs = () => {
    return (
        <div className='container-fluid w-75 mt-5'>
            <h1 className='mb-3'>Blog Questions</h1>
            <div className="card-group d-flex flex-column">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://reactrouter.com/twitterimage.jpg" className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="card-title">What is the purpose of react router?</h5>
                                <p className="card-text">React Router enables client side rendering. In traditional websites when a user request something it gets requested from the server and then showed to the user. But with react router using single page application it has given the user the power to only get data from the when it is needed and not else. So the speed of the web page has gotten faster because. React Router helps us achieve this by creating client side routing.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--h2sTHv45--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wwr447hfx2tc5jkhjpki.png" className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body  text-start">
                                <h5 className="card-title">How does contextapi work?</h5>
                                <p className="card-text">Context API helps streamline the data. Whenever we had to send to data to the children routes we always had to send them through props. Meaning if we wanted to send a singular data we would always have to start from the beginning the prop drilling all the way to the end. Context API helps with this data processing. It uses global variables to send the data all the way to the children nodes.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://miro.medium.com/max/581/1*IUqLu4fox1-zw_kfxfgxOw.png" className="img-fluid rounded-start bg-dark" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body  text-start">
                                <h5 className="card-title">What is useRef?</h5>
                                <p className="card-text">useRef returns an object whose property will be initialized with the argument that will be passed to it. As long as the component exists the data that was sent within it will stay.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
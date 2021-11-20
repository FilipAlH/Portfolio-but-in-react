import React from 'react';

export default function Home() {
  return (
    <div className="col tab-pane fade show active m-5" id="about" role="tabpanel" aria-labelledby="home-tab">
                <div className="d-flex justify-content-center p-3 row">
                    <div className="card mb-3 mt-5 d-flex shadow colorW">
                        <div className="row g-0 d-flex" id="profile-card">
                            <div className="col-md-4 d-flex" id="profileImage">
                                <img src="Pictureofme.jpg" className="img-fluid roundedMe shadow" id="Filip" alt="Filip"/>
                            </div>
                            <div className="col-md-8 d-flex" id="profile-text">
                                <div className="card-body align-self-center">
                                    <h5 className="card-title" id="About">About me</h5>
                                    <p className="card-text">Hey, Thats me! I was once a student studying chemistry who has since
                                        graduated and I am now a student studying web development who will undoubtedly become a
                                        graduate of that too. Learning is a passion of mine and regardless of where I am in life, a
                                        part of me will always be a student. This website of mine should showcase some of the things
                                        I've worked on throughout my time in this coding bootcamp. If you like what you see, don't
                                        hesitate to contact me!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" id="links">
                            <button type="button" className="btn btn-outline-primary col-3 shadow" id="btn" onclick="window.open('https://filip.a.11@hotmail.com', '_blank')"><img src="email.png" class="" alt="email"/><span>Contact me!</span></button>
                            <button type="button" className="btn btn-outline-primary col-3 shadow" id="btn"><img src="phone-call.png" class="" alt="email"/><span>647-781-7768</span></button>
                            <button type="button" className="btn btn-outline-primary col-3 shadow" id="btn" onclick="window.open('https://github.com/FilipAlH', '_blank')"><img src="github.png" class="" alt="github"/> <span>Check me out on github!</span></button>
                            <button type="button" className="btn btn-outline-primary col-3 shadow" id="btn" onclick="window.open('https://www.linkedin.com/in/filip-al-32b023200/', '_blank')"><img src="linkedin.png" class="" alt="linkedin"/><span>LinkedIn</span></button>
                            <button type="button" className="btn btn-outline-primary col-3 shadow" id="btn"><img src="document.png" class="" alt="pdf"/><a href="Resume-Filip-Al-Hamadani.pdf" download target="__blank"><span>my resume</span></a></button>
                    </div>
                    <div className="reference">Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
  );
}

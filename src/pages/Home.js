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
                </div>
            </div>
  );
}

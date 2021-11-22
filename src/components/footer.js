import React from 'react'

export default function footer() {
    return(
        <div>
                    <div className="row m-5" id="links">
                        <a href='emailto:https://filip.a.11@hotmail.com' target="_blank" rel="noreferrer" className="btn btn-outline-primary col-3 shadow" id="btn"><img src="email.png" class="" alt="email"/><span>Contact me!</span></a>
                        <div className="btn btn-outline-primary col-3 shadow" id="btn"><img src="phone-call.png" class="" alt="email"/><span>647-781-7768</span></div>
                        <a href='https://github.com/FilipAlH' target="_blank" rel="noreferrer" className="btn btn-outline-primary col-3 shadow" id="btn"><img src="github.png" class="" alt="github"/> <span>Check me out on github!</span></a>
                        <a href='https://www.linkedin.com/in/filip-al-hamadani-32b023200/' target="_blank" rel="noreferrer" className="btn btn-outline-primary col-3 shadow" id="btn"><img src="linkedin.png" class="" alt="linkedin"/><span>LinkedIn</span></a>
                        <a href='./Resume-Filip-Al-Hamadani.pdf' download target="_blank" rel="noreferrer" className="btn btn-outline-primary col-3 shadow" id="btn"><img src="document.png" class="" alt="pdf"/><span>my resume</span></a>
                    </div>
                    <div className="reference">Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}

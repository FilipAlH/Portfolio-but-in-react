import React from 'react'
import {Link} from 'react-router-dom'

export default function footer() {
    return(
        <div className="row-12"> 
          <ul className="nav nav-tabs colorP" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <Link className="nav-link active" id="home-tab" to={'/'} aria-selected="true">About me</Link>
            </li>
            <li className="nav-item dropdown" role="presentation">
                <Link className="nav-link dropdown-toggle disDropdown" id="profile-tab" to={'/Projects'} aria-expanded="false">Projects</Link>
            </li>
          </ul>
        </div>
    )
}


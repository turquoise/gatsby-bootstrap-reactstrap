import React from "react"
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSide from "../components/left-side"
import RightSide from '../components/right-side'

export default () =>
  <div className="container-fluid">
    <div className="row">
      <div className="col-6">
        <LeftSide>
          <h2>Left side</h2>
        </LeftSide>
      </div>
      <div className="col-6">
        <RightSide>
          <h2>Right side</h2>
        </RightSide>
      </div>
    </div>
      <br/>
      <Link to="/">Go back to the homepage</Link>
  </div>

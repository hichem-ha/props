import React from 'react'
import Profimg from "./profimg";
import PropTypes from 'prop-types';
function Profilee(props) {
  return (
    <div>
      <Profimg/>
              <div  >
                <p >fullName : {props.fullName}</p> 
                <p >Bio : {props.bio}</p>
                <p >Profession : {props.profession}</p>
              </div>
    </div>
  )

}
Profilee.propTypes = {
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string
};
export default Profilee;
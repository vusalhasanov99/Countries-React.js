import React from "react";
import { Link } from "react-router-dom";

const CoutryCard = ({ country }) => {
  return (
    <div className="card w-40 m-1">
      <div className="card-body"  style={{ width:"200px" }}  >

        <img src={country.flag} className="card-img-top" alt="flag" style={{ height:"100px" }} />
        <Link to={'/' + country.name}>
          <h5 className='cart-title ' >{country.name}</h5>
        </Link>



      </div>
    </div>

  )
}
export default CoutryCard;
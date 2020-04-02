import React from 'react';
import PropTypes from 'prop-types';
import car from './car.png';

class CarOwner extends React.Component {
  render() {
    const { carOwner } = this.props;

    return (
      <div className="car-owner">
        <div className="car">
          <img src={car} alt="" />
        </div>
        <div className="details">
          <h1 className="name">{carOwner.firstName} {carOwner.lastName}</h1>
          <div className="group divider">
            <div>
              <span className="label"> brand </span>
              <span> {carOwner.carModel} </span>
            </div>
            <div>
              <span className="label"> year </span>
              <span> {carOwner.carModelYear} </span>
            </div>
            <div>
              <span className="label"> color </span>
              <span data-color={carOwner.carColor} />
            </div>
          </div>
          <div className="group">
            <div>
              <span className="label"> country </span>
              <span> {carOwner.country} </span>
            </div>
            <div>
              <span className="label"> gender </span>
              <span> {carOwner.gender} </span>
            </div>
            <div>
              <span className="label"> job </span>
              <span> {carOwner.jobTitle} </span>
            </div>
          </div>

          <div className="email">
            <span className="label">email: </span>
            <span> {carOwner.email} </span>
          </div>
          <div className="bio">
            <span className="label">bio:  </span>
            <span> {carOwner.bio} </span>
          </div>
        </div>
      </div>
    );
  }
}

CarOwner.propTypes = {
  filter: PropTypes.object.isRequired,
};

export default CarOwner;

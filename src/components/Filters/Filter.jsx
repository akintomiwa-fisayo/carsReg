import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { filter } = this.props;
    const countries = [];
    if (filter.countries) {
      filter.countries.forEach((country) => {
        countries.push(
          <span key={`${filter.id}_country_${country}`}>{country}</span>,
        );
      });
    } else {
      countries.push(
        <span key={`${filter.id}_all_countries}`}>ALL COUNTRIES</span>,
      );
    }

    const colors = [];
    if (filter.colors) {
      filter.colors.forEach((color) => {
        colors.push(
          <span key={`${filter.id}_color_${color}`} data-color={color} />,
        );
      });
    } else {
      colors.push(
        <span key={`${filter.id}_all_colors}`}>ALL COLORS</span>,
      );
    }

    return (
      <NavLink to={`/${filter.id}`} className="filter">
        <h2 className="model-year">{filter.startYear} - {filter.endYear}</h2>
        <p className="gender">{filter.gender || 'ALL GENDERS'}</p>
        <div className="countries">{countries}</div>
        <div className="colors">  {colors}</div>
      </NavLink>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.object.isRequired,
};

export default Filter;

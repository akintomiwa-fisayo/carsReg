import React from 'react';
import './css/filters.css';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Axios from 'axios';
import swal from 'sweetalert';
import Filter from './Filter';
import { setFilters, setLoaded, setLoading } from './Actions';

class Filters extends React.Component {
  componentDidMount() {
    Axios({
      url: `${process.env.REACT_APP_API_ENDPOINT}/filters`,
      method: 'GET',
      timeout: 0,
    }).then((response) => {
      const filters = response.data.data;
      console.log('filters is : ', filters);
      this.props.setFilters(filters);
      this.props.setLoaded();
    }).catch((error) => {
      console.log(error);
      swal('Error', 'an error occured please try again', 'error');
    });
  }

  render() {
    const { state } = this.props;
    if (state.loading) {
      return (
        <div id="loader">
          <span className="fas fa-circle-notch fa-spin icon" />
        </div>
      );
    }

    const filtersArr = [];
    const { filters } = state;
    filters.forEach((filter) => {
      filtersArr.push(<Filter filter={filter} />);
    });

    return (
      <div data-comp="filters">
        <h2 className="label"><i className="material-icons">filter_list</i> Filter</h2>
        <div id="filters">
          {filtersArr}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.Filters,
});

const mapDispatchToProps = (dispatch) => ({
  setFilters: (filters) => dispatch(setFilters(filters)),
  setLoaded: () => dispatch(setLoaded()),
  setLoading: () => dispatch(setLoading()),
});

Filters.propTypes = {
  state: PropType.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

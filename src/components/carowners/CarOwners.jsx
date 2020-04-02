import React from 'react';
import './css/carowners.css';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Axios from 'axios';
import swal from 'sweetalert';
import {
  setCarOwners, setLoaded, setLoading, setLoadedMore, setLoadingMore, setFilter, resetCarOwners,
} from './Actions';
import CarOwner from './CarOwner';

class CarOwners extends React.Component {
  constructor(props) {
    super(props);

    this._isMounted = false;
    this.prevFilterId = null;
    this.onScroll = this.onScroll.bind(this);
    this.fetchCarOwners = this.fetchCarOwners.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchCarOwners(true);
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onScroll() {
    const page = document.querySelector('html');
    const { scrollTop } = page;
    const windowHeight = window.innerHeight;
    const scrollTravel = scrollTop + windowHeight;
    const pageHeight = page.offsetHeight;
    const perc = (scrollTravel / pageHeight) * 100;

    if (perc >= 95) { // <== if user has scrolled 95 percentage of the page and above
      this.fetchCarOwners();
    }
  }

  fetchCarOwners(firstFetch = false) {
    const { props } = this;
    const { state } = props;

    if (this._isMounted) {
      const { filterId } = props.match.params;
      let proceed = false;
      let length = 0;
      if (firstFetch) {
        this.props.resetCarOwners();
        this.props.setLoading();
        proceed = !state.loading;
      } else {
        this.props.setLoadingMore();
        proceed = !state.loadingMore;
        length = this.props.state.carOwners.length;
      }

      if (proceed) {
        Axios({
          url: `${process.env.REACT_APP_API_ENDPOINT}/car-owners/${filterId}?offset=${length}`,
          method: 'GET',
          timeout: 0,
        }).then((response) => {
          if (this._isMounted) {
            const { carOwners } = response.data.data;

            props.setCarOwners(carOwners);
            if (firstFetch) {
              const { filter } = response.data.data;
              this.props.setLoaded();
              props.setFilter(filter);
            } else {
              this.props.setLoadedMore();
            }
          }
        }).catch((error) => {
          console.log(error);
          swal('Error', 'an error occured please try again', 'error');
        });
      }
    }
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

    const carOwnersArr = [];
    const { carOwners } = state;
    carOwners.forEach((carOwner) => {
      carOwnersArr.push(<CarOwner carOwner={carOwner} />);
    });

    const { filter } = state;

    return (
      <div data-comp="car-owners">
        <div className="header">
          <h1>Car Owners</h1>
          <div className="filters">
            <div className="container">
              <h2 className="head"><i className="material-icons">filter_list</i> Filter</h2>
              <div className="filter">
                <span className="label">start year : </span>
                <span>{filter.startYear}</span>
              </div>
              <div className="filter">
                <span className="label">end year : </span>
                <span>{filter.endYear}</span>
              </div>
              <div className="filter">
                <span className="label">gender : </span>
                <span>{filter.gender || 'ALL GENDERS'}</span>
              </div>
              <div className="filter">
                <span className="label">countries : </span>
                <span>{filter.countries ? filter.countries.join(' , ') : 'ALL COUNTRIES'}</span>
              </div>
              <div className="filter">
                <span className="label">colors : </span>
                <span>{filter.colors ? filter.colors.join(' , ') : 'ALL COLORS'}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="carOwners">
          {carOwnersArr}

          <div id="loadMore" style={{ display: state.loadingMore ? 'flex' : 'none' }}>
            <span className="fas fa-circle-notch fa-spin icon" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.CarOwners,
});

const mapDispatchToProps = (dispatch) => ({
  setCarOwners: (carOwners) => dispatch(setCarOwners(carOwners)),
  setLoaded: () => dispatch(setLoaded()),
  setLoading: () => dispatch(setLoading()),
  setLoadingMore: () => dispatch(setLoadingMore()),
  setLoadedMore: () => dispatch(setLoadedMore()),
  setFilter: (filter) => dispatch(setFilter(filter)),
  resetCarOwners: () => dispatch(resetCarOwners()),
});

CarOwners.propTypes = {
  state: PropType.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarOwners);
//

import React from 'react';
import './css/header.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setHeaderHeight } from './Actions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onLoad);
  }

  onLoad(header) {
    if (header) {
      this.props.setHeaderHeight(header.offsetHeight);
    }
  }

  render() {
    return (
      <header ref={this.onLoad}>
        <span className="logo">CarsReg</span>
        <div className="social">
          <span className="fab fa-facebook-f" />
          <span className="fab fa-twitter" />
          <span className="fab fa-pinterest-p" />
          <span className="fab fa-instagram" />
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setHeaderHeight: (value) => dispatch(setHeaderHeight(value)),
});

Header.propTypes = {
  setHeaderHeight: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);

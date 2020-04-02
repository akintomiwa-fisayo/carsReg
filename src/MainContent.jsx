import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filters from './components/Filters/Filters';
import CarOwners from './components/carowners/CarOwners';

class MainContent extends React.Component {
  render() {
    const { state } = this.props;
    return (
      <div id="mainContent" style={{ minHeight: `calc(100vh - ${state.headerHeight}px` }}>
        <Switch>
          <Route
            path="/:filterId"
            render={(props) => (
              <CarOwners {...props} filterId={props.match.params.filterId} />
            )}
          />

          <Route
            path="/"
            render={(props) => (
              <Filters {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.General,
});

MainContent.propTypes = {
  state: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(MainContent);

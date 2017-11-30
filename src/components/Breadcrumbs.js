import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAll, removeActiveCategory} from '../actions'

class Breadcrumbs extends Component {
  render() {
    const {active, setAll, removeActiveCategory} = this.props;
    return (
      <p className="breadcrumbs">
        <span className="breadcrumbs_all" onClick={() => setAll()}>ALL</span>
        { active.vertical &&
          <span onClick={() => removeActiveCategory()}>
            <span className="arrow"></span>
            <span className="breadcrumbs_item">{ active.vertical.Name.toUpperCase() }</span>
          </span>
        }
      </p>
    )
  }
}

const mapStateToProps = ({active}) => ({active});
export default connect(mapStateToProps, {setAll, removeActiveCategory})(Breadcrumbs);
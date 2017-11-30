import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setAll, removeActiveCategory } from '../actions'
import '../App.css';

class Breadcrumbs extends Component {
  render() {
    const { active } = this.props;

    return (
      <p className="breadcrumbs">
        <span className="breadcrumbs_all" onClick={() => this.props.setAll()}>ALL</span>
        { active.vertical && <span onClick={() => this.props.removeActiveCategory()}><span className="arrow"></span><span className="breadcrumbs_item">{ active.vertical.Name.toUpperCase() }</span></span>}
      </p>
    )
  }
}

const mapStateToProps = ({active}) => ({active});
export default connect(mapStateToProps, { setAll, removeActiveCategory })(Breadcrumbs);
import React, {Component} from 'react';
import logo from '../logo.svg';
import burger from '../burger.svg';
import {connect} from 'react-redux';
import Breadcrumbs from './Breadcrumbs';
import Verticals from './Verticals';
import Categories from './Categories';
import {setActiveVertical, setActiveCategory} from '../actions'
import '../App.css';

class Navigation extends Component {

  state = {
    menuOpen: false,
    menuClasses: ''
  };

  animateMenu = () => {
    const {menuOpen} = this.state;
    if (menuOpen) {
      setTimeout(() => this.setState({menuClasses: ''}), 500);
    }
    let menuSlide = !menuOpen ? 'show slideIn' : 'show slideOut';
    this.setState({menuClasses: menuSlide, menuOpen: !menuOpen});
  };

  render() {
    const {active, navigation, setActiveVertical, setActiveCategory} = this.props;
    return (
      <div>
        <div className="mobile_header">
          <img src={logo} className="logo" alt="logo"/>
          <img src={burger} className="burger_menu" alt="menu" onClick={() => this.animateMenu()}/>
        </div>
        <div className={`menu ${this.state.menuClasses}`}>
          <img src={logo} className="logo" alt="logo"/>
          <Breadcrumbs />
          {!active.vertical ?
            <Verticals verticals={navigation.verticals} setActiveVertical={setActiveVertical}/> :
            <Categories categories={navigation.categories} active={active} setActiveCategory={setActiveCategory}/>
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({navigation, active}) => ({navigation, active});
export default connect(mapStateToProps, {setActiveVertical, setActiveCategory})(Navigation);





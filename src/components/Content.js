import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../App.css';

class Content extends Component {

  renderCourses = () => {
    const {
      navigation: { courses: allCourses, categories: allCategories, verticals: allVerticals},
      active: { vertical, category }
    } = this.props;

    let courses = [];

    if(vertical){
      let categories = allCategories.filter(cat => cat.Verticals === vertical.Id);
      let catIds = [];
      categories.forEach((cat) => {
        catIds.push(cat.Id)
      });

      catIds.forEach((id) => {
        let newCourses =  allCourses.filter(course => course.Categories === id);
        courses = [...courses, ...newCourses]
      });
    } else {
      courses = allCourses;
      courses.map((course) => {
        allCategories.map((cat) => {
          let courseName = allVerticals.filter(v => cat.Verticals === v.Id)[0].Name;
          return course.Categories === cat.Id ? course.vertical = courseName : null;
        })
      })
    }

    if(category){
      courses = courses.filter(course => course.Categories === category.Id);
    }

    return courses.map((course, i) => {
      if (course.State) {
        return (
          <div key={i} className="course">
            <p className="vertical_name">{ (vertical && vertical.Name) || course.vertical }</p>
            <div className="course_info">
              <p>{ course.Author }</p>
              <h2>{ course.Name }</h2>
            </div>
          </div>
        )
      }
    })
  };

  render() {
    return (
      <div className="content">
        { this.renderCourses() }
      </div>
    )
  }
}


const mapStateToProps = ({navigation, active}) => ({navigation, active});
export default connect(mapStateToProps)(Content);
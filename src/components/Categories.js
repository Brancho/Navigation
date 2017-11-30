import React from 'react';

const Categories = ({ categories, active, setActiveCategory }) => {
  const { vertical: activeVertical, category: activeCategory } = active;
  return(
    <ul className="navigation">
      { categories.map((item, i) => {
        let activeClass = activeCategory && activeCategory.Name === item.Name ? 'active_category' : '';
        if(activeVertical.Id === item.Verticals){
          return <li key={i} className={`list_item ${ activeClass }`} onClick={() => setActiveCategory(item)}>{ item.Name }</li>
        }
      }) }
    </ul>
  )
};

export default Categories
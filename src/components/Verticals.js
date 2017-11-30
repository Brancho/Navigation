import React from 'react';

const Verticals = ({ verticals, setActiveVertical }) => {
  return(
    <ul className="navigation">
      {verticals.map((item, i) => {
        return <li key={i} className="list_item" onClick={() => setActiveVertical(item)}>{item.Name}</li>
      })}
    </ul>
  )
};

export default Verticals
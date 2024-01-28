import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Dropdown=({Items})=> {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
         id={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {Items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;

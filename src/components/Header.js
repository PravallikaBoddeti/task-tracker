import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import Button from './Button';

// const Header = () => {
//   return (
//     <header>
//       <h1>Task Tracker</h1>
//     </header>
//   )
// }

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title} Task Tracker</h1>
//     </header>
//   )
// }

// props destructuring
const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   // console.log("click");
  //   onAdd();
  // }
  const location = useLocation()
  return (
    <header className="header">
      {/* <h1 style={{ color: 'red' }}>{title} Task Tracker</h1> (inline style) */}
      {/* <h1 style={headerStyle}>{title} Task Tracker</h1> (inline style with valiable) */}

      <h1>{title} Task Tracker</h1>
      {location.pathname === '/' &&
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
    </header>
  )
}

Header.defaultProps = {
  title: "Tasker"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
// const headerStyle = {
//   color: 'red'
// }

export default Header;

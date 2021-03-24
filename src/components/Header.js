import React from 'react';
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
const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  }

  return (
    <header className="header">
      {/* <h1 style={{ color: 'red' }}>{title} Task Tracker</h1> (inline style) */}
      {/* <h1 style={headerStyle}>{title} Task Tracker</h1> (inline style with valiable) */}

      <h1>{title} Task Tracker</h1>
      <Button color='green' text="Add" onClick={onClick} />
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

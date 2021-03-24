import React from 'react';
import PropTypes from 'prop-types'

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
  return (
    <header>
      <h1>{title} Task Tracker</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Tasker"
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;

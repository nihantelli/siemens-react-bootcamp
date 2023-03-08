import React from "react";
import PropTypes from 'prop-types';
function User({ data, title, isVisible }) {
  if (!isVisible) return "hata bulundu";
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((user, i) => {
          <div key={user.id}>{user.name}</div>;
        })}
      </ul>
    </div>
  );
}
User.propTypes = {
  title: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  activateUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
export default User;

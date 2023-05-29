import PropTypes from 'prop-types';
import { Name, Thumb, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Thumb isOnline={isOnline}>
        <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      </Thumb>
      <Name className="name">{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
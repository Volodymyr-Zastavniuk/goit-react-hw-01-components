import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
import { Box } from 'components/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      m="0 auto"
      mb="20px"
      p="20px"
      width="400px"
      boxShadow="shadow"
      borderRadius="normal"
      overflow="hidden"
    >
      <List>
        {friends.map(friend => {
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
      </List>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

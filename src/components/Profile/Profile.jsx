import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  UserName,
  UserInfo,
  Avatar,
  UserStatsList,
  UserStatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      m="0 auto"
      mb="20px"
      width="400px"
      textAlign="center"
      boxShadow="shadow"
      borderRadius="normal"
      overflow="hidden"
      as="section"
    >
      <Box pb="32px" borderBottom="normal" borderColor="border">
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Box>

      <UserStatsList>
        <UserStatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </UserStatsItem>
      </UserStatsList>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

//  src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"

import PropTypes from 'prop-types';

const Friend = ({
    id,
    avatar,
    name,
    isOnline }) =>
{
    return (
        <li class="item" key={id}>
            <span class="isOnline">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default Friend;
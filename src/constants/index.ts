import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const headerLinks: NavLinkType[] = [
  { text: "Home", Icon: HomeIcon, url: '/' },
  { text: "Explore", Icon: SearchIcon, url: '/explore' },
  { text: "Notifications", Icon: NotificationsNoneIcon, url: '/notifications' },
  { text: "Messages", Icon: MailOutlineIcon, url: '/messages' },
  { text: "Bookmarks", Icon: BookmarkBorderIcon, url: '/bookmarks' },
  { text: "Lists", Icon: ListAltIcon, url: '/lists' },
  { text: "Profile", Icon: PermIdentityIcon, url: '/profile' },
  { text: "More", Icon: MoreHorizIcon, url: '/more' },
];

export const avatarImg = 'https://gif-avatars.com/img/90x90/barbara-palvin.gif';

export const currentUser = {
  displayName: 'Barbara Palvin',
  userName: 'realbarbarapalvin',
  verified: true,
  avatar: avatarImg,
}

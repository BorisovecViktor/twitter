declare module 'react-twitter-embed';

interface NavLinkType {
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  url: string;
}

interface Post {
  id: string;
  displayName: string;
  userName: string;
  verified: boolean;
  text: string;
  image: string;
  avatar: string;
  comments: Comments[];
}

interface Comments {
  id: string;
  postId: string;
  text: string;
}

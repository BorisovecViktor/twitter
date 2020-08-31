const API_URL = 'https://borisovecviktor.github.io/twitter/api';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_URL}/posts.json`);

  return response.json();
};

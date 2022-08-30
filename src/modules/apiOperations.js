import { SHOW_BASE_URL, INVOLVEMENT_API_BASE_URL } from './default.js';

export const getShows = async () => {
  const res = await fetch(`${SHOW_BASE_URL}/shows`, {method: 'GET'});
  const shows = await res.json();
  return shows;
}

export const getLikes = async () => {
  const res = await fetch(`${INVOLVEMENT_API_BASE_URL}/likes`, { method: 'GET' });
  const likes = await res.json();
  return likes;
}

export const likeShow = async (showId) => {
  const formData = {
    item_id: showId
  };

  const res = await fetch(`${INVOLVEMENT_API_BASE_URL}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  return res;
}
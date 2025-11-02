import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export const jikanApi = axios.create({
  baseURL: BASE_URL,
});

// Top anime
export const getTopAnime = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/top/anime?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top anime:', error);
    throw error;
  }
};

// Anime details
export const getAnimeDetails = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime details:', error);
    throw error;
  }
};

// Anime episodes
export const getAnimeEpisodes = async (id, page = 1) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/episodes?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime episodes:', error);
    throw error;
  }
};

// Search anime
export const searchAnime = async (query, page = 1) => {
  try {
    const response = await jikanApi.get(`/anime?q=${encodeURIComponent(query)}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error searching anime:', error);
    throw error;
  }
};

// Anime schedules
export const getAnimeSchedules = async (day) => {
  try {
    const dayParam = day ? `?filter=${day}` : '';
    const response = await jikanApi.get(`/schedules${dayParam}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime schedules:', error);
    throw error;
  }
};

// Anime genres
export const getAnimeGenres = async () => {
  try {
    const response = await jikanApi.get('/genres/anime');
    return response.data;
  } catch (error) {
    console.error('Error fetching anime genres:', error);
    throw error;
  }
};

// Anime by genre
export const getAnimeByGenre = async (genreId, page = 1) => {
  try {
    const response = await jikanApi.get(`/anime?genres=${genreId}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime by genre:', error);
    throw error;
  }
};

// Anime characters
export const getAnimeCharacters = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/characters`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime characters:', error);
    throw error;
  }
};

// Anime staff
export const getAnimeStaff = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/staff`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime staff:', error);
    throw error;
  }
};

// Anime pictures
export const getAnimePictures = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/pictures`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime pictures:', error);
    throw error;
  }
};

// Anime statistics
export const getAnimeStatistics = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/statistics`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime statistics:', error);
    throw error;
  }
};

// Anime recommendations
export const getAnimeRecommendations = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/recommendations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime recommendations:', error);
    throw error;
  }
};

// Anime user updates
export const getAnimeUserUpdates = async (id, page = 1) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/userupdates?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime user updates:', error);
    throw error;
  }
};

// Anime reviews
export const getAnimeReviews = async (id, page = 1) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/reviews?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime reviews:', error);
    throw error;
  }
};

// Anime relations
export const getAnimeRelations = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/relations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime relations:', error);
    throw error;
  }
};

// Anime themes
export const getAnimeThemes = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/themes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime themes:', error);
    throw error;
  }
};

// Anime external
export const getAnimeExternal = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/external`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime external:', error);
    throw error;
  }
};

// Anime streaming
export const getAnimeStreaming = async (id) => {
  try {
    const response = await jikanApi.get(`/anime/${id}/streaming`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime streaming:', error);
    throw error;
  }
};

// Top manga
export const getTopManga = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/top/manga?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top manga:', error);
    throw error;
  }
};

// Manga details
export const getMangaDetails = async (id) => {
  try {
    const response = await jikanApi.get(`/manga/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga details:', error);
    throw error;
  }
};

// Manga characters
export const getMangaCharacters = async (id) => {
  try {
    const response = await jikanApi.get(`/manga/${id}/characters`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga characters:', error);
    throw error;
  }
};

// Manga pictures
export const getMangaPictures = async (id) => {
  try {
    const response = await jikanApi.get(`/manga/${id}/pictures`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga pictures:', error);
    throw error;
  }
};

// Manga statistics
export const getMangaStatistics = async (id) => {
  try {
    const response = await jikanApi.get(`/manga/${id}/statistics`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga statistics:', error);
    throw error;
  }
};

// Manga recommendations
export const getMangaRecommendations = async (id) => {
  try {
    const response = await jikanApi.get(`/manga/${id}/recommendations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga recommendations:', error);
    throw error;
  }
};

// Manga user updates
export const getMangaUserUpdates = async (id, page = 1) => {
  try {
    const response = await jikanApi.get(`/manga/${id}/userupdates?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga user updates:', error);
    throw error;
  }
};

// Manga reviews
export const getMangaReviews = async (id, page = 1) => {
  try {
    const response = await jikanApi.get(`/manga/${id}/reviews?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga reviews:', error);
    throw error;
  }
};

// Manga relations
export const getMangaRelations = async (id) => {
  try {
    const response = await jikanApi.get(`/manga/${id}/relations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga relations:', error);
    throw error;
  }
};

// Manga external
export const getMangaExternal = async (id) => {
  try {
    const response = await jikanApi.get(`/manga/${id}/external`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga external:', error);
    throw error;
  }
};

// Search manga
export const searchManga = async (query, page = 1) => {
  try {
    const response = await jikanApi.get(`/manga?q=${encodeURIComponent(query)}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error searching manga:', error);
    throw error;
  }
};

// Manga by genre
export const getMangaByGenre = async (genreId, page = 1) => {
  try {
    const response = await jikanApi.get(`/manga?genres=${genreId}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga by genre:', error);
    throw error;
  }
};

// Character details
export const getCharacterDetails = async (id) => {
  try {
    const response = await jikanApi.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw error;
  }
};

// Character anime
export const getCharacterAnime = async (id) => {
  try {
    const response = await jikanApi.get(`/characters/${id}/anime`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character anime:', error);
    throw error;
  }
};

// Character manga
export const getCharacterManga = async (id) => {
  try {
    const response = await jikanApi.get(`/characters/${id}/manga`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character manga:', error);
    throw error;
  }
};

// Character voices
export const getCharacterVoices = async (id) => {
  try {
    const response = await jikanApi.get(`/characters/${id}/voices`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character voices:', error);
    throw error;
  }
};

// Character pictures
export const getCharacterPictures = async (id) => {
  try {
    const response = await jikanApi.get(`/characters/${id}/pictures`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character pictures:', error);
    throw error;
  }
};

// Search characters
export const searchCharacters = async (query, page = 1) => {
  try {
    const response = await jikanApi.get(`/characters?q=${encodeURIComponent(query)}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error searching characters:', error);
    throw error;
  }
};

// Person details
export const getPersonDetails = async (id) => {
  try {
    const response = await jikanApi.get(`/people/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching person details:', error);
    throw error;
  }
};

// Person anime
export const getPersonAnime = async (id) => {
  try {
    const response = await jikanApi.get(`/people/${id}/anime`);
    return response.data;
  } catch (error) {
    console.error('Error fetching person anime:', error);
    throw error;
  }
};

// Person manga
export const getPersonManga = async (id) => {
  try {
    const response = await jikanApi.get(`/people/${id}/manga`);
    return response.data;
  } catch (error) {
    console.error('Error fetching person manga:', error);
    throw error;
  }
};

// Person voices
export const getPersonVoices = async (id) => {
  try {
    const response = await jikanApi.get(`/people/${id}/voices`);
    return response.data;
  } catch (error) {
    console.error('Error fetching person voices:', error);
    throw error;
  }
};

// Person pictures
export const getPersonPictures = async (id) => {
  try {
    const response = await jikanApi.get(`/people/${id}/pictures`);
    return response.data;
  } catch (error) {
    console.error('Error fetching person pictures:', error);
    throw error;
  }
};

// Search people
export const searchPeople = async (query, page = 1) => {
  try {
    const response = await jikanApi.get(`/people?q=${encodeURIComponent(query)}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error searching people:', error);
    throw error;
  }
};

// Seasons now
export const getSeasonsNow = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/seasons/now?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching seasons now:', error);
    throw error;
  }
};

// Seasons upcoming
export const getSeasonsUpcoming = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/seasons/upcoming?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching seasons upcoming:', error);
    throw error;
  }
};

// Seasons by year and season
export const getSeasonsByYear = async (year, season, page = 1) => {
  try {
    const response = await jikanApi.get(`/seasons/${year}/${season}?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching seasons by year:', error);
    throw error;
  }
};

// Manga genres
export const getMangaGenres = async () => {
  try {
    const response = await jikanApi.get('/genres/manga');
    return response.data;
  } catch (error) {
    console.error('Error fetching manga genres:', error);
    throw error;
  }
};

// Producers
export const getProducers = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/producers?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching producers:', error);
    throw error;
  }
};

// Producer details
export const getProducerDetails = async (id) => {
  try {
    const response = await jikanApi.get(`/producers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching producer details:', error);
    throw error;
  }
};

// Magazines
export const getMagazines = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/magazines?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching magazines:', error);
    throw error;
  }
};

// Magazine details
export const getMagazineDetails = async (id) => {
  try {
    const response = await jikanApi.get(`/magazines/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching magazine details:', error);
    throw error;
  }
};

// Studios
export const getStudios = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/studios?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching studios:', error);
    throw error;
  }
};

// Studio details
export const getStudioDetails = async (id) => {
  try {
    const response = await jikanApi.get(`/studios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching studio details:', error);
    throw error;
  }
};

// Random anime
export const getRandomAnime = async () => {
  try {
    const response = await jikanApi.get('/random/anime');
    return response.data;
  } catch (error) {
    console.error('Error fetching random anime:', error);
    throw error;
  }
};

// Random manga
export const getRandomManga = async () => {
  try {
    const response = await jikanApi.get('/random/manga');
    return response.data;
  } catch (error) {
    console.error('Error fetching random manga:', error);
    throw error;
  }
};

// Random characters
export const getRandomCharacters = async () => {
  try {
    const response = await jikanApi.get('/random/characters');
    return response.data;
  } catch (error) {
    console.error('Error fetching random characters:', error);
    throw error;
  }
};

// Random people
export const getRandomPeople = async () => {
  try {
    const response = await jikanApi.get('/random/people');
    return response.data;
  } catch (error) {
    console.error('Error fetching random people:', error);
    throw error;
  }
};

// Reviews anime
export const getReviewsAnime = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/reviews/anime?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews anime:', error);
    throw error;
  }
};

// Reviews manga
export const getReviewsManga = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/reviews/manga?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews manga:', error);
    throw error;
  }
};

// Recommendations anime
export const getRecommendationsAnime = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/recommendations/anime?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations anime:', error);
    throw error;
  }
};

// Recommendations manga
export const getRecommendationsManga = async (page = 1) => {
  try {
    const response = await jikanApi.get(`/recommendations/manga?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations manga:', error);
    throw error;
  }
};

// User details
export const getUserDetails = async (username) => {
  try {
    const response = await jikanApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

// User statistics
export const getUserStatistics = async (username) => {
  try {
    const response = await jikanApi.get(`/users/${username}/statistics`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user statistics:', error);
    throw error;
  }
};

// User favorites
export const getUserFavorites = async (username) => {
  try {
    const response = await jikanApi.get(`/users/${username}/favorites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user favorites:', error);
    throw error;
  }
};

// User updates
export const getUserUpdates = async (username) => {
  try {
    const response = await jikanApi.get(`/users/${username}/userupdates`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user updates:', error);
    throw error;
  }
};

// User about
export const getUserAbout = async (username) => {
  try {
    const response = await jikanApi.get(`/users/${username}/about`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user about:', error);
    throw error;
  }
};

// User history
export const getUserHistory = async (username, type) => {
  try {
    const response = await jikanApi.get(`/users/${username}/history?type=${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user history:', error);
    throw error;
  }
};

// User friends
export const getUserFriends = async (username, page = 1) => {
  try {
    const response = await jikanApi.get(`/users/${username}/friends?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user friends:', error);
    throw error;
  }
};

// User animelist
export const getUserAnimelist = async (username, status, page = 1) => {
  try {
    const response = await jikanApi.get(`/users/${username}/animelist?status=${status}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user animelist:', error);
    throw error;
  }
};


export const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '327c0085edmsh5bd10b4abb2d4a8p1cb9b2jsn4a22ef1ce0d0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '327c0085edmsh5bd10b4abb2d4a8p1cb9b2jsn4a22ef1ce0d0',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  



export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': 'de7672e099mshc255d70a64a449bp1ae90djsn43d48726e2aa',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'de7672e099mshc255d70a64a449bp1ae90djsn43d48726e2aa',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  



export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const exerciseOptions = {
  method: "GET",
  headers: {
   
    'X-RapidAPI-Key': '04362fc73cmshc293617ed46d2bap115af8jsn08aaafdfe21b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '04362fc73cmshc293617ed46d2bap115af8jsn08aaafdfe21b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

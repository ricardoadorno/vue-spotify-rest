async function getAcessToken() {
  const fetchParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      import.meta.env.VITE_SPOTIFY_API_KEY +
      "&client_secret=" +
      import.meta.env.VITE_CLIENT_SECRET,
  };

  const tokenData = await fetch(
    "https://accounts.spotify.com/api/token",
    fetchParams
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  return tokenData.access_token;
}

export default getAcessToken;

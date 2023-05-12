export default async function searchAlbum(
  acessToken: string,
  searchTerm: string
) {
  const searchParam = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + acessToken,
    },
  };

  const URLsearch = new URLSearchParams({
    q: searchTerm,
    type: "album",
    limit: "10",
  });

  const album = await fetch(
    "https://api.spotify.com/v1/search?" + URLsearch,
    searchParam
  )
    .then((response) => response.json())
    .then((data) => {
      return data.albums.items;
    });

  return album;
}

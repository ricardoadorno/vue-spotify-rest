export default async function getAlbumById(
  acessToken: string,
  albumId: string
) {
  const searchParam = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + acessToken,
    },
  };

  const album = await fetch(
    "https://api.spotify.com/v1/albums/" + albumId,
    searchParam
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return album;
}

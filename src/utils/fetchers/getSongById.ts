// TODO reactor to from songs to tracks varible names - Vscode feature

export default async function getSongById(acessToken: string, songId: string) {
  const searchParam = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + acessToken,
    },
  };

  const song = await fetch(
    "https://api.spotify.com/v1/tracks/" + songId,
    searchParam
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return song;
}

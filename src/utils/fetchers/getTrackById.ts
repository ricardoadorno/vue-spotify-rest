async function getTrackById(acessToken: string, trackId: string) {
  const searchParam = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + acessToken,
    },
  };

  const track = await fetch(
    "https://api.spotify.com/v1/tracks/" + trackId,
    searchParam
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return track;
}

export default getTrackById;

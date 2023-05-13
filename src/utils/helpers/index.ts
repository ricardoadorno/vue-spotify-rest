export function toMinutes(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
}

export function formatDate(date: string) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}

export function formatArtistArray(
  artists: Array<{
    name: string;
  }>
) {
  let artistString = "";

  artists.forEach((artist, index) => {
    if (index === artists.length - 1) {
      artistString += artist.name;
    } else {
      artistString += artist.name + ", ";
    }
  });

  return artistString;
}

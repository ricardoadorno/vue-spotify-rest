import { useQuery } from "@tanstack/vue-query";
import getAlbumById from "../getAlbumById";

// TODO Try to make a generic useQuery function
const useQueryAlbum = (acessToken: string, albumId: string) => {
  return useQuery({
    queryKey: ["album"],
    queryFn: async () => {
      const response = await getAlbumById(acessToken, albumId);
      return response;
    },
    cacheTime: 0,
  });
};

export default useQueryAlbum;

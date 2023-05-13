import { useQuery } from "@tanstack/vue-query";
import getTrackById from "../getTrackById";

const useQueryTrack = (acessToken: string, trackId: string) => {
  return useQuery({
    queryKey: ["track"],
    queryFn: async () => {
      const response = await getTrackById(acessToken, trackId);
      return response;
    },
  });
};

export default useQueryTrack;

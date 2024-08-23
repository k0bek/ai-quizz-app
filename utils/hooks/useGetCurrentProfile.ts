import { useQuery } from "@tanstack/react-query";
import { getCurrentProfile } from "../actions/getCurrentProfile";

export const useGetCurrentProfile = () => {
  return useQuery({
    queryKey: ["currentProfile"],
    queryFn: () => getCurrentProfile(),
  });
};

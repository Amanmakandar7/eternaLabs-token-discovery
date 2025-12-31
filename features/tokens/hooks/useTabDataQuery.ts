"use client";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setTokens } from "@/features/tokens/states/tokenSlice";

export function useTabDataQuery(activeTab: string) {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["tokens", activeTab],
    queryFn: async () => {
      const res = await fetch(`/api/tokens?tab=${activeTab}`);
      if (!res.ok) throw new Error("Failed to fetch tokens");
      const data = await res.json();
      dispatch(setTokens({ tab: activeTab as any, data }));
      return data;
    },
    refetchInterval: 5000,
  });
}

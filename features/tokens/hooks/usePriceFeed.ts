"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePrices } from "@/features/tokens/states/tokenSlice";

export function usePriceFeed() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Slower updates on mobile = better performance
    const intervalMs = window.innerWidth < 768 ? 6000 : 2000;

    const ws = setInterval(() => {
      dispatch(updatePrices());
    }, intervalMs);

    return () => clearInterval(ws);
  }, [dispatch]);
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Token = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: number;
  direction?: "up" | "down" | null;
};

export type TabKey = "new" | "final" | "migrated";
export type SortKey = "price" | "change" | "volume";
export type SortDir = "asc" | "desc";

type TokensState = {
  activeTab: TabKey;
  sortKey: SortKey;
  sortDir: SortDir;

  newPairs: Token[];
  finalStretch: Token[];
  migrated: Token[];
};

const initialState: TokensState = {
  activeTab: "new",
  sortKey: "price",
  sortDir: "asc",

  newPairs: [
    { name: "Bitcoin", symbol: "BTC", price: 42310.25, change: 2.31, volume: 18.2 },
    { name: "Ethereum", symbol: "ETH", price: 2315.4, change: -0.84, volume: 8.9 },
  ],

  finalStretch: [
    { name: "Solana", symbol: "SOL", price: 145.75, change: 6.2, volume: 3.4 },
  ],

  migrated: [
    { name: "Polygon", symbol: "MATIC", price: 1.24, change: -1.2, volume: 2.1 },
  ],
};

function getTabList(state: TokensState, tab: TabKey) {
  if (tab === "new") return state.newPairs;
  if (tab === "final") return state.finalStretch;
  return state.migrated;
}

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<TabKey>) {
      state.activeTab = action.payload;
    },

    setSort(state, action: PayloadAction<SortKey>) {
      if (state.sortKey === action.payload) {
        state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
      } else {
        state.sortKey = action.payload;
        state.sortDir = "asc";
      }
    },

    // better — explicit tab input instead of implicit state
    setTokens(
      state,
      action: PayloadAction<{ tab: TabKey; data: Token[] }>
    ) {
      const { tab, data } = action.payload;

      if (tab === "new") state.newPairs = data;
      else if (tab === "final") state.finalStretch = data;
      else state.migrated = data;
    },

    updatePrices(state) {
      
      const list = getTabList(state, state.activeTab);

      const updated :  Token[] = list.map((t,i) => {
        const isSmallList = list.length <= 5;
        
        if (!isSmallList && i % 3 !== 0) return t;
        const delta = (Math.random() - 0.5) * 2;
        const newPrice = t.price + delta;

        return {
          ...t,
          price: Number(newPrice.toFixed(2)),
          direction: delta === 0 ? null : delta > 0 ? "up" : "down",
        };
      });

      if (state.activeTab === "new") state.newPairs = updated;
      else if (state.activeTab === "final") state.finalStretch = updated;
      else state.migrated = updated;
    },
  },
});

export const { setActiveTab, setSort, updatePrices, setTokens } =
  tokensSlice.actions;

export const selectActiveTokens = (state: TokensState) =>
  getTabList(state, state.activeTab);

export default tokensSlice.reducer;

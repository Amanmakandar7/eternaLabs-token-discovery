# 🧿 Token Discovery Dashboard — Real-Time Crypto Monitoring

A pixel-perfect, high-performance token dashboard built with **Next.js 14, TypeScript, Redux Toolkit, React Query, Tailwind CSS, and shadcn-ui**.  
It features real-time price updates, smooth UI interactions, multiple token categories, and production-grade architecture.

---

## 🚀 Features

### 🟡 Token Columns
- New Pairs
- Final Stretch
- Migrated

### 🟡 Interactive UI
- Sorting (Price / % Change / Volume)
- Tooltips, Popovers, Modals
- Hover & Click Interaction Patterns
- Click-row → Open Token Details Modal
- Three-dots menu with contextual actions

### 🟡 Real-Time Updates
- Mock WebSocket price feeds
- Smooth color transitions
- Direction-based price pulse effect

### 🟡 Loading & Error Handling
- Skeleton rows & shimmer loading state
- Progressive loading
- Custom Error Boundary

### 🟡 Visual Quality
- Pixel-perfect table (≤ 2px tolerance)
- Consistent spacing & typography
- Token icons with fallback avatar

---

## 🧩 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript (strict mode)**
- **Redux Toolkit** — complex state
- **React Query** — server state & caching
- **Tailwind CSS**
- **shadcn / Radix UI / Headless UI**
- **Atomic & reusable component architecture**

---

## ⚡ Performance & Best Practices

- Memoized components
- No layout shifts
- Interaction latency \< 100ms
- Optimized animations & transitions
- Lighthouse Score  
  - **Desktop ≥ 90**
  - **Mobile optimized & tuned**

---

## 🏗️ Project Architecture

features/
└─ tokens/
├─ components/
│ ├─ TokenTable.tsx
│ └─ TokenRow.tsx
├─ hooks/
├─ states/
│ ├─ tokenSlice.ts
│ └─ ErrorBoundary.tsx
└─ utils/
app/
├─ api/tokens/route.ts
└─ pulse/page.tsx



React Query fetches & syncs with Redux for UI rendering and real-time updates.

---

## 🖥️ Demo Screens

- Token tables with tabs
- Price animations
- Popover actions menu
- Token details modal
- Skeleton loading states

# screenshots



![Home](screenshots\home.png)
![Token Table](screenshots\token.png)
![Token Table](screenshots\token1.png)
![Token Modal](screenshots\modal.png)


---

## 🧪 How to Run Locally

```bash
npm install
npm run dev

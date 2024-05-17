import { create } from "zustand";

interface turnState {
    turn: number
    increaseTurnCount: (by: number) => void
    turnReset: ()=> void
}
export const useTurnCounterStore = create<turnState>()((set) => ({
    turn: 0,
    increaseTurnCount: (by) => set((state) => ({ turn: state.turn + by})),
    turnReset: ()=> set({turn: 0})
}))
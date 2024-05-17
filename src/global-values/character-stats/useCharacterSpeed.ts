import { create } from "zustand";

interface characterSpeedState {
    speed: number
    setSpeed: (newSpeed: number) => void
    addToSpeed: (bonus: number) => void
}

export const useCharacterSpeed = create<characterSpeedState>()((set)=>({
    speed: 30,
    setSpeed: (newSpeed) => set({speed: newSpeed}),
    addToSpeed: (bonus) => set((state)=>({
        speed: state.speed + bonus
    }))
}))
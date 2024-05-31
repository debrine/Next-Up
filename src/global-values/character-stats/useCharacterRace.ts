import { create } from "zustand"

// Race will impact some abilities as a requirement.
interface characterRaceState {
    race: string
    selectedCharacterRace: (raceName: string) => void
}

export const useCharacterRace = create<characterRaceState>()((set)=>({
    race: '',
    selectedCharacterRace: (raceName) => set({race: raceName})
}))
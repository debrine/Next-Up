import { create } from "zustand";

// Race and various abilities can affect ability scores.
interface abilityScoreState {
    str: number
    strengthScore: (score: number) => void
    dex: number
    dexterityScore: (score: number) => void
    con: number
    constitutionScore: (score: number) => void
    int: number
    intelligenceScore: (score: number) => void
    wis: number
    wisdomScore: (score: number) => void
    cha: number
    charismaScore: (score: number) => void
}

export const useAbilityScore = create<abilityScoreState>()((set)=>({
    str: 10,
    strengthScore: (score) => set({str: score}),
    dex: 10,
    dexterityScore: (score) => set({dex: score}),
    con: 10,
    constitutionScore: (score) => set({con: score}),
    int: 10,
    intelligenceScore: (score) => set({int: score}),
    wis: 10,
    wisdomScore: (score) => set({wis: score}),
    cha: 10,
    charismaScore: (score) => set({cha: score}),
}))
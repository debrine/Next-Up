import { create } from "zustand";

interface resolvePointState {
    resolvePoints: number,
    setResolvePoints: (amount: number)=> void
    useResolvePoint: () => void,
    longRestResolvePoints: (max: number) => void
}

export const useResolvePoints = create<resolvePointState>()((set) =>({
    resolvePoints: 0,
    setResolvePoints: (amount) => set(() => ({
        resolvePoints: amount
    })),
    useResolvePoint: () => set((state) => ({
        resolvePoints: state.resolvePoints -1
    })),
    longRestResolvePoints: (max) => set(() => ({
        resolvePoints: max
    }))
}))
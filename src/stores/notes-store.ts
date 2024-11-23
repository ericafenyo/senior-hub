import { create } from "zustand";
import { Note } from "@/types";

type Actions = {
  setNotes: (notes: Note[]) => void
};

type State = {
  notes: Note[]
}

type Store = Actions & State;

const initialState: State = {
  notes: []
};

export const useStore = create<Store>((set) => ({
  ...initialState,
  setNotes: (notes: Note[]) => set({ notes }),
}));
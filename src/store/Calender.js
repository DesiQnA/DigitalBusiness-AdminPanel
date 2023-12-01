import { create } from "zustand";
import { groupNumber, INITIAL_EVENTS, userData, boardData } from "../data/data";

const useCalender = create((set) => ({
  currentEvents: INITIAL_EVENTS,
  setCurrentEvents: (events) => set({ currentEvents: events }),
}));

export default useCalender;

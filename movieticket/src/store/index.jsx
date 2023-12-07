import { create } from 'zustand'

const useStore = create((set) => ({
  ticketCount: 0,
  totalPrice: 0,
  movieDetail: "",
  

  setTicketCount: (newCount) => set({ticketCount: newCount}),
  setTotalPrice: (newTotalPrice) => set({totalPrice: newTotalPrice}),
  setMovieDetail: (newMovieDetail) => set({movieDetail: newMovieDetail}),


}))

export default useStore;
import { RootState } from "@src/store"
import { AvailabilityOption, TransferOption, transferOptionMap } from "@src/types"

export const selectAllTickets = (state: RootState) => state.tickets.tickets
export const selectTicketsStatus = (state: RootState) => state.tickets.status

export const selectProcessedTickets = (state: RootState) => {
  const filterTransfers = state.controls.filterTransfers
  const sortAvailability = state.controls.sortAvailability

  const filteredTickets = state.tickets.tickets.filter((ticket) => {
    const firstSegmentQtyTransfers = ticket.segments[0].stops.length
    const secondSegmentQtyTransfers = ticket.segments[1].stops.length

    const filterTransfersByQty = filterTransfers.map((filterTransfer) => transferOptionMap[filterTransfer])

    return (
      filterTransfersByQty.includes(firstSegmentQtyTransfers) ||
      filterTransfersByQty.includes(secondSegmentQtyTransfers)
    )
  })

  const processedTickets = filteredTickets.sort((a, b) => {
    if (sortAvailability === AvailabilityOption.Cheapest) {
      return a.price - b.price
    } else if (sortAvailability === AvailabilityOption.Fastest) {
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    } else if (sortAvailability === AvailabilityOption.Optimal) {
      return (
        a.price / (a.segments[0].duration + a.segments[1].duration) -
        b.price / (b.segments[0].duration + b.segments[1].duration)
      )
    }
    return 1
  })

  return processedTickets
}

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getTickets } from "@features/tickets/tickets-actions"
import { useAppDispatch } from "@src/store"
import { Button } from "@components/Button"
import { Spin } from "antd"

import { selectProcessedTickets, selectTicketsStatus } from "../tickets-selectors"
import { Ticket } from "../Ticket/Ticket"

import style from "./TicketsList.module.scss"

const TicketsList = () => {
  const [displayedTickets, setDisplayedTickets] = useState<number>(5)

  const dispatch = useAppDispatch()
  const tickets = useSelector(selectProcessedTickets)
  const status = useSelector(selectTicketsStatus)

  useEffect(() => {
    dispatch(getTickets())
  }, [])

  return (
    <>
      <div className={style.ticketsList}>
        {tickets.slice(0, displayedTickets).map((ticket, i) => (
          <Ticket {...ticket} key={i} />
        ))}
      </div>

      {!tickets.length && status !== "loading" && <h4>Рейсов, подходящих под заданные фильтры, не найдено</h4>}

      {status === "loading" && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Spin size="large" />
        </div>
      )}

      <Button
        title="Показать еще 5 билетов!"
        classNames={["btnLoadMore"]}
        selected
        onClick={() => setDisplayedTickets(displayedTickets + 5)}
        disabled={displayedTickets >= tickets.length || !tickets.length}
      />
    </>
  )
}

export { TicketsList }

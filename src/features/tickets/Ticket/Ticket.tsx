import { ITicket } from "@src/types/ticket"
import companyLogo from "@assets/companyLogo.png"
import { getCarrierLogoUrl } from "@src/config"
import { formatMilliseconds, formatTime } from "@utils/firmatDate"

import styles from "./Ticket.module.scss"

const cardInfo = [
  { label: "MOW – HKT", value: "10:45 – 08:00" },
  { label: "В пути", value: "21ч 15м" },
  { label: "2 пересадки", value: "HKG, JNB" },
  { label: "MOW – HKT", value: "11:20 – 00:50" },
  { label: "В пути", value: "13ч 30м" },
  { label: "1 пересадка", value: "HKG" },
]

type TicketProps = ITicket

export const Ticket = ({ carrier, price, segments }: TicketProps) => {
  const imgUrl = getCarrierLogoUrl(carrier)

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h2 className={styles.price}>{price + " ₽"}</h2>
        <img src={imgUrl} alt="company logo" className={styles.logo} />
      </div>

      <div className={styles.card__info}>
        {segments.map((segment, index) => {
          const direction = `${segment.origin} - ${segment.destination}`

          const flightTimeMs = segment.duration * 60000
          const flightTimeParsed = formatMilliseconds(flightTimeMs)

          const dateDeparture = new Date(segment.date)
          const dateDepartureParsed = formatTime(dateDeparture)
          const dateArrive = new Date(dateDeparture.getTime() + flightTimeMs)
          const dateArriveParsed = formatTime(dateArrive)

          const qtyTransfers = segment.stops.length
          const transfersDesc =
            qtyTransfers === 0 ? "прямой рейс" : `${qtyTransfers} пересадк${qtyTransfers > 1 ? "и" : "а"}`

          return (
            <div className={styles.card__info__segment} key={index}>
              <div className={styles.info__item}>
                <div className={styles.info__item__label}>{direction}</div>
                <div className={styles.card__item__value}>{dateDepartureParsed + " - " + dateArriveParsed}</div>
              </div>

              <div className={styles.info__item}>
                <div className={styles.info__item__label}>В ПУТИ</div>
                <div className={styles.card__item__value}>{flightTimeParsed}</div>
              </div>

              <div className={styles.info__item}>
                <div className={styles.info__item__label}>{transfersDesc}</div>
                <div className={styles.card__item__value}>{segment.stops.join(" ")}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

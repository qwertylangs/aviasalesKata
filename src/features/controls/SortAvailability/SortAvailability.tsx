import { useSelector } from "react-redux"
import { Button } from "@components/Button"
import { AvailabilityOption } from "@src/types/availabilityOptions"
import { useAppDispatch } from "@src/store"

import { setSortAvailability } from "../controls-slice"
import { selectFilterAvailability } from "../controls-selectors"

import styles from "./SortAvailability.module.scss"

interface SwitchProps {}

// const availabilityOptions = ["Самый дешевый", "Самый быстрый", "Оптимальный"]

const availabilityOptions: AvailabilityOption[] = [
  AvailabilityOption.Cheapest,
  AvailabilityOption.Fastest,
  AvailabilityOption.Optimal,
]

const SortAvailability = ({}: SwitchProps) => {
  const dispatch = useAppDispatch()

  const selectedFilter = useSelector(selectFilterAvailability)

  const handleSelect = (option: AvailabilityOption) => {
    if (option !== selectedFilter) {
      dispatch(setSortAvailability(option))
    }
  }

  return (
    <div className={styles.switch}>
      {availabilityOptions.map((option, index) => (
        <Button
          title={option}
          key={index}
          selected={selectedFilter === option}
          onClick={() => handleSelect(option)}
          classNames={[styles.button]}
        />
      ))}
    </div>
  )
}

export { SortAvailability }

import React, { useState } from "react"
import { Checkbox } from "antd"
import type { CheckboxChangeEvent } from "antd/es/checkbox"
import type { CheckboxValueType } from "antd/es/checkbox/Group"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@src/store"
import { TransferOption } from "@src/types/transfersOptions"

import { selectFilterTransfers } from "../controls-selectors"
import { setFilterTransfers } from "../controls-slice"

import styles from "./FilterTransfers.module.scss"

const CheckboxGroup = Checkbox.Group

const transfersOptions: TransferOption[] = [
  TransferOption.WithoutTransfers,
  TransferOption.OneTransfer,
  TransferOption.TwoTransfers,
  TransferOption.ThreeTransfers,
]

const FilterTransfers: React.FC = () => {
  const [checkAll, setCheckAll] = useState(true)

  const dispatch = useAppDispatch()
  const activeFilters = useSelector(selectFilterTransfers)

  const onChange = (list: CheckboxValueType[]) => {
    dispatch(setFilterTransfers(list as TransferOption[]))
    setCheckAll(list.length === transfersOptions.length)
  }

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    dispatch(setFilterTransfers(e.target.checked ? transfersOptions : []))
    setCheckAll(e.target.checked)
  }

  return (
    <div className={styles.filter}>
      <div className={styles.title}> Количество пересадок </div>

      <Checkbox onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup options={transfersOptions} value={activeFilters} onChange={onChange} />
    </div>
  )
}

export { FilterTransfers }

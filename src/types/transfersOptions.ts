export enum TransferOption {
  WithoutTransfers = "Без пересадок",
  OneTransfer = "1 пересадка",
  TwoTransfers = "2 пересадки",
  ThreeTransfers = "3 пересадки",
}

export const transferOptionMap = {
  [TransferOption.WithoutTransfers]: 0,
  [TransferOption.OneTransfer]: 1,
  [TransferOption.TwoTransfers]: 2,
  [TransferOption.ThreeTransfers]: 3,
}

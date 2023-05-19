import { Axios } from "axios"
import * as API from "@src/config"

export type Extra = {
  client: Axios
  api: typeof API
}

import { Aside } from "@components/Aside"
import { Container } from "@components/Container"
import { Header } from "@components/Header"
import { Main } from "@components/Main"
import { Wrapper } from "@components/Wrapper"
import { SortAvailability } from "@features/controls/SortAvailability"
import { FilterTransfers } from "@features/controls/FilterTransfers"
import { TicketsList } from "@features/tickets/TicketsList"

const App = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Aside>
          <FilterTransfers />
        </Aside>

        <Main>
          <SortAvailability />

          <TicketsList />
        </Main>
      </Wrapper>
    </Container>
  )
}

export { App }

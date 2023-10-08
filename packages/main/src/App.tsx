import {getRandomWeekDay} from "@pnpm-monorepo/shared";
import {InfoCard} from "@pnpm-monorepo/core";
import {SolutionProviderWrapper} from "./ctx/solution-provider-wrapper";

const App = () => {
  const name = getRandomWeekDay()
  return (
      <>
          <h1>Today is {name}</h1>
          <SolutionProviderWrapper sMsg={"schedule-card-id"}>
              <InfoCard title={"Schedule"} description={"details to be available soon.."}/>
          </SolutionProviderWrapper>
          <br/>
          <SolutionProviderWrapper sMsg={"flight-card-id"}>
              <InfoCard title={"Next Flight"} description={"MX 320 to departure"}/>
          </SolutionProviderWrapper>
      </>
  )
};
export default App;

import {getRandomWeekDay} from "@pnpm-monorepo/shared";
import {InfoCard} from "@pnpm-monorepo/core";
import {SolutionWrapper} from "./ctx/solution-wrapper";

const App = () => {
  const name = getRandomWeekDay()
  return (
      <>
          <h1>Today is {name}</h1>
          <SolutionWrapper sMsg={"schedule-card-id"}>
              <InfoCard title={"Schedule"} description={"details to be available soon.."}/>
          </SolutionWrapper>
          <br/>
          <SolutionWrapper sMsg={"flight-card-id"}>
              <InfoCard title={"Next Flight"} description={"MX 320 to departure"}/>
          </SolutionWrapper>
      </>
  )
};
export default App;

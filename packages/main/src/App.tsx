import {getRandomWeekDay} from "@pnpm-monorepo/shared";
import {InfoCard} from "@pnpm-monorepo/core";
import {SolutionWrapper} from "./ctx/solution-wrapper";

const App = () => {
  const name = getRandomWeekDay()
  return (
      <>
          <h1>Today is {name}</h1>
          <SolutionWrapper sMsg={"info-card-id"}>
              <InfoCard title={"Kos"} description={"Sample Desc"}/>
          </SolutionWrapper>
      </>
  )
};
export default App;

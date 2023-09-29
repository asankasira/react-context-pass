import {sayHi, getRandomName} from "@pnpm-monorepo/shared";

const App = () => {
  const name = getRandomName()
  sayHi(name);
  return <h1>Welcome {name}</h1>;
};
export default App;

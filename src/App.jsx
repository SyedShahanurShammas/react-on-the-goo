import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";
// const CountriesPromise = async () => {
//   const CountriesPormise = await fetch(
//     "https://openapi.programming-hero.com/api/all"
//   );
//   return CountriesPormise.json();
// };
const CountriesPromiseAll = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());
function App() {
  // const CountriesPromiseAll = CountriesPromise();
  return (
    <>
      <h1>React On the Go...</h1>
      <Suspense fallback={<h1>Nadir Bhai is loading....</h1>}>
        <Countries CountriesPromiseAll={CountriesPromiseAll}></Countries>
      </Suspense>
    </>
  );
}

export default App;

import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import useErrorBoundary from "./hooks/useErrorBoundary";

// import CountryCard from "./components/CountryCard";

const CountryCard = React.lazy(() => import("./components/CountryCard"));

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const { ErrorBoundary, handleError } = useErrorBoundary();

  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all")
    //   .then((data) => data.json())
    //   .then((countries) => {
    //     console.log(countries);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching countries:", error);
    //   });
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        setCountries(countries);
      } catch (error) {
        handleError(error.message);
        // throw error;
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div> API Loading...</div>;
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <h1>Country's Details</h1>
        <div className="country-grid">
          <Suspense fallback={<div>Component Loading...</div>}>
            {countries.map((country) => {
              const name = country.name.common;
              const flag = country.flags.png;

              return <CountryCard name={name} flag={flag} />;
            })}
          </Suspense>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;

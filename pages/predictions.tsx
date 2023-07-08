const Predictions = (): JSX.Element => {
  const fetchPredictions = async (year: number, round: number) => {
    const predictionsApi = `https://api.squiggle.com.au/?q=tips;year=${year};round=${round}`;
    const response = await fetch(predictionsApi);
    const data = await response.json();
    console.log(data);
    return data;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center lg:text-6xl">
          Predictions
        </h1>
        <button onClick={() => fetchPredictions(2023, 17)}>
          Fetch Predictions
        </button>
      </div>
    </main>
  );
};

export default Predictions;

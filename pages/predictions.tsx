import { useEffect, useState } from "react";
import { Prediction } from "@/types/predictions.types";

const Predictions = (): JSX.Element => {
  const [predictions, setPredictions] = useState<any>([]);

  useEffect(() => {
    const fetchPredictions = async (
      sourceId: number,
      year: number,
      round: number
    ): Promise<Prediction[]> => {
      const predictionsApi = `https://api.squiggle.com.au/?q=tips;source=${sourceId};year=${year};round=${round}`;
      const response = await fetch(predictionsApi);
      const data = await response.json();
      return data;
    };
    // 15 is the sourceId for AFLalytics
    const predictions: Promise<Prediction[]> = fetchPredictions(15, 2023, 17);
    setPredictions(predictions);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center lg:text-6xl">
          Predictions
        </h1>
        {predictions.length > 0 &&
          predictions.map((prediction: JSX.Element) => <p>{prediction}</p>)}
      </div>
    </main>
  );
};

export default Predictions;

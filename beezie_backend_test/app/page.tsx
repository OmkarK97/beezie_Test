'use client';

import { useState } from "react";
import Grading1 from "./components/cgc/page";


export default function Home() {

  interface GradingData {
    Certification_Number: number;
    "Label Type": string;
    "Reverse Cert Number / Barcode": string;
    Year: number;
    Brand: string;
    Sport: string;
    "Card Number": number;
    Player: string;
    "Variety / Pedigree": string;
    Grade: string;
  }

  const [serialNumber, setSerialNumber] = useState();
  const [data, setData] = useState<GradingData | undefined>();
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<string>('PSA');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompany(event.target.value);
    console.log(selectedCompany)
  };

  console.log(data);

  const handleSubmit = async () => {
    setSubmit(true);
    setLoading(true);
    const response = await fetch(`/api/psa?serialNumber=${serialNumber}`);
    const result = await response.json();
    const data_here: GradingData = result.data;
    setData(data_here);
    setLoading(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Find Your Card's Grading!!
        </p>
      </div>

      <div className="place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex flex-col gap-8 justify-center items-center">
          <label className="flex flex-col gap-2">
            Serial Number:-
            <input
              type="number"
              inputMode="numeric"
              placeholder="#########"
              className="bg-transparent border-2 px-5 h-11 rounded-lg z-10"
              onChange={(e: any) => setSerialNumber(e.target.value)}
            />

          </label>
          <select
            className="bg-transparent text-white z-10 border-2 h-11 rounded-xl px-2 w-full"
            value={selectedCompany}
            onChange={handleSelectChange}
          >
            <option className="bg-transparent text-black" value="CGC">
              PSA
            </option>
            <option className="bg-transparent text-black" value="PSA">
              CGC
            </option>
          </select>
          <button onClick={handleSubmit} className="flex justify-center items-center cursor-pointer z-10 border-2 border-gray-400 h-8 rounded-full w-28 hover:bg-gray-500  font-bold">
            Submit
          </button>
        </div>
      </div>

      <div>
        {submit ? (
          <div>
            {!loading ? (
              <Grading1
                serial_number={data?.Certification_Number ?? 0}
                Barcode={data?.["Reverse Cert Number / Barcode"] ?? '###'}
                Year={data?.Year ?? 0}
                Brand={data?.Brand ?? '#####'}
                Sports={data?.Sport ?? '#####'}
                Card_number={data?.["Card Number"] ?? '###'}
                Player={data?.Player ?? '#####'}
                Variety={data?.["Variety / Pedigree"] ?? '####'}
                Grade={data?.Grade ?? '####'}
              />
            ) : ('Loading...')}
          </div>
        ) : ('Submit your details')}
      </div>

    </main>
  );
}

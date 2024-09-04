import React from 'react'

interface CGC_Type {
    serial_number: number;
    Barcode: string
    Year: number;
    Brand: string;
    Sports: string;
    Card_number: number | string;
    Player: string;
    Variety: string;
    Grade: string;
}

const Grading1 = ({serial_number, Barcode, Year, Brand, Sports, Card_number, Player, Variety, Grade}: CGC_Type) => {
    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left">
            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                    Certification Number :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {serial_number}
                </p>
            </div>

            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                Barcode :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {Barcode}
                </p>
            </div>

            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                    Year :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {Year}
                </p>
            </div>

            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                    Brand :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {Brand}
                </p>
            </div>

            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                    Sports :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {Sports}
                </p>
            </div>

            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                    Card Number :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {Card_number}
                </p>
            </div>

            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                    Player :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {Player}
                </p>
            </div>

            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                    Variety :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {Variety}
                </p>
            </div>

            <div
                className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">
                    Grade :-
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {Grade}
                </p>
            </div>
        </div>
    )
}

export default Grading1;
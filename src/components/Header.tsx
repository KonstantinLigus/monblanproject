import { useState } from "react";
import DateInput from "./DateInput";

const projectData = [
  { count: "870", label: "posts" },
  { count: "11,787", label: "followers" },
  { count: "112", label: "following" },
];

export default function Header() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <>
      <div className="absolute left-0 w-full desktop:w-185 h-120.5 bg-[url('src/assets/logo.png'),url('src/assets/corner.png')] bg-size-[138px,750px] bg-position-[left_30vw_top_10px,left_top] bg-no-repeat" />
      <header className="flex flex-col items-center desktop:items-start desktop:flex-row desktop:justify-center">
        <div className="pt-125 desktop:pt-0 flex flex-col gap-8 relative top-2 tablet:-top-37.5 desktop:top-8 desktop:right-[-25vw]">
          <div className="flex flex-col items-center gap-3 desktop:flex-row">
            <h1 className="font-montserrat text-2xl font-medium text-black leading-none text-center">
              monblanproject
            </h1>
            <div className="inline-block border border-accent rounded-sm px-3 py-0.5 text-accent font-roboto text-s whitespace-nowrap">
              Start on 17-02-2016
            </div>
          </div>
          <div className="flex justify-center desktop:justify-start gap-5 font-roboto text-sm text-black">
            {projectData.map(({ count, label }) => (
              <span key={label}>
                <strong className="font-bold">{count}</strong>{" "}
                <span className="font-normal">{label}</span>
              </span>
            ))}
          </div>
          <div className="flex flex-col desktop:flex-row items-center gap-2 sm:gap-3">
            <div className="font-roboto text-base text-black">Date</div>
            <div className="flex flex-col desktop:flex-row gap-6">
              <DateInput
                value={fromDate}
                onChange={setFromDate}
                placeholder="from"
              />
              <DateInput value={toDate} onChange={setToDate} placeholder="to" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

import React from "react";
import Categories from "./Categories";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-14 p-6">
      <Categories />
      <article className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl uppercase font-semibold">LeaderBoard</h2>
        <main className="flex justify-center items-center flex-col gap-4 rounded-xl shadow-inset-xl p-4 w-[80vw]">
          <div>
            <h4 className="text-2xl uppercase font-semibold">Basic Backtest</h4>
          </div>
          <table className="text-center w-full">
            <thead>
              <th className="border-2 p-2">Rank</th>
              <th className="border-2 p-2">Name</th>
              <th className="border-2 p-2">Calmar Ratio</th>
              <th className="border-2 p-2">Overall Profit</th>
              <th className="border-2 p-2">Avg. Daily Profit</th>
              <th className="border-2 p-2">Win %(Day)</th>
              <th className="border-2 p-2">Price (Rs)</th>
              <th className="border-2 p-2">Action</th>
            </thead>
            <tbody>
              <tr>
                <td className="border-l-2 ">1</td>
                <td className="border-l-2 ">Selling with re entr</td>
                <td className="border-l-2 flex justify-center items-center gap-1">
                  <FaArrowTrendUp />
                  <p>3.96</p>
                </td>
                <td className="border-l-2 ">381845</td>
                <td className="border-l-2 ">319.54</td>
                <td className="border-l-2 ">0.65</td>
                <td>-</td>
                <td className="border-l-2 ">
                  <Link>View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </article>
    </section>
  );
};

export default Dashboard;

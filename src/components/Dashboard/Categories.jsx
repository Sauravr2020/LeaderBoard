import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-8">
        <li className="px-3 py-2.5 border-2 rounded-xl font-semibold text-gray-700 border-gray-300">
          <Link>Leaderboard</Link>
        </li>
        <li className="px-3 py-2.5 border-2 rounded-xl font-semibold text-gray-700 border-gray-300">
          <Link>Leaderboard</Link>
        </li>
        <li className="px-3 py-2.5 border-2 rounded-xl font-semibold text-gray-700 border-gray-300">
          <Link>Leaderboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;

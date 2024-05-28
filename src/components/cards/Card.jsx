import React from "react";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="">
        <div className="card w-72 bg-base-100 shadow-xl mx-auto mb-6 mt-8  border-transparent border-gradient-tl-br gradient-glow">
          <div className=" text-center">
            <div>
              <div className="card-actions justify-end"></div>
              <p className="text-2xl font-normal">Leader Boards</p>
            </div>
          </div>
        </div>
      </div>

      <div>
    <h1 class="text-bold text-3xl text-purple-700 moving-text">
      Back <span className="text-purple-950">Test :)</span>
    </h1>
  </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mr-5 mt-16">
        <div className="card mx-auto mb-6 border-transparent border-gradient-tl-br gradient-glow">
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-xl p-6 md:w-96">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img
                  src="./trading.png"
                  alt="Trading"
                  className="w-8 h-auto mr-2 mb-1"
                />
                <h1 className="text-lg font-bold">
                  Rank <span className="text-purple-600 ml-1">1</span>
                </h1>
              </div>

              <div className="text-left mt-4">
                <h2 className="text-xl font-bold mb-2">
                  Selling with Re-entry
                </h2>
                <p className="text-gray-700 font-medium">
                  Calmar Ratio{" "}
                  <span className="font-bold text-purple-600 ml-2">3.96</span>
                </p>
                <p className="text-gray-700 font-medium">
                  Overall Profit{" "}
                  <span className="font-bold text-purple-600 ml-3">
                    381,845
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Avg. Daily Profit{" "}
                  <span className="font-bold text-purple-600 ml-2">319.54</span>
                </p>
                <p className="text-gray-700 font-semibold">
                  Price (Rs) <span className="ml-1"> - </span>
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
                  View
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-6 border-transparent border-gradient-tl-br gradient-glow">
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-xl p-6 md:w-96">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img
                  src="./trading.png"
                  alt="Trading"
                  className="w-8 h-auto mr-2 mb-1"
                />
                <h1 className="text-lg font-bold">
                  Rank <span className="text-purple-600 ml-1">2</span>
                </h1>
              </div>

              <div className="text-left mt-4">
                <h2 className="text-xl font-bold mb-2">
                  Selling with Re-entry
                </h2>
                <p className="text-gray-700 font-medium">
                  Calmar Ratio{" "}
                  <span className="font-bold text-purple-600 ml-2">3.96</span>
                </p>
                <p className="text-gray-700 font-medium">
                  Overall Profit{" "}
                  <span className="font-bold text-purple-600 ml-3">
                    381,845
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Avg. Daily Profit{" "}
                  <span className="font-bold text-purple-600 ml-2">319.54</span>
                </p>
                <p className="text-gray-700 font-semibold">
                  Price (Rs) <span className="ml-1"> - </span>
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
                  View
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-6 border-transparent border-gradient-tl-br gradient-glow">
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-xl p-6 md:w-96">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img
                  src="./trading.png"
                  alt="Trading"
                  className="w-8 h-auto mr-2 mb-1"
                />
                <h1 className="text-lg font-bold">
                  Rank <span className="text-purple-600 ml-1">3</span>
                </h1>
              </div>

              <div className="text-left mt-4">
                <h2 className="text-xl font-bold mb-2">
                  Selling with Re-entry
                </h2>
                <p className="text-gray-700 font-medium">
                  Calmar Ratio{" "}
                  <span className="font-bold text-purple-600 ml-2">3.96</span>
                </p>
                <p className="text-gray-700 font-medium">
                  Overall Profit{" "}
                  <span className="font-bold text-purple-600 ml-3">
                    381,845
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Avg. Daily Profit{" "}
                  <span className="font-bold text-purple-600 ml-2">319.54</span>
                </p>
                <p className="text-gray-700 font-semibold">
                  Price (Rs) <span className="ml-1"> - </span>
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
                  View
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-6 border-transparent border-gradient-tl-br gradient-glow">
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-xl p-6 md:w-96">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img
                  src="./trading.png"
                  alt="Trading"
                  className="w-8 h-auto mr-2 mb-1"
                />
                <h1 className="text-lg font-bold">
                  Rank <span className="text-purple-600 ml-1">4</span>
                </h1>
              </div>

              <div className="text-left mt-4">
                <h2 className="text-xl font-bold mb-2">
                  Selling with Re-entry
                </h2>
                <p className="text-gray-700 font-medium">
                  Calmar Ratio{" "}
                  <span className="font-bold text-purple-600 ml-2">3.96</span>
                </p>
                <p className="text-gray-700 font-medium">
                  Overall Profit{" "}
                  <span className="font-bold text-purple-600 ml-3">
                    381,845
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Avg. Daily Profit{" "}
                  <span className="font-bold text-purple-600 ml-2">319.54</span>
                </p>
                <p className="text-gray-700 font-semibold">
                  Price (Rs) <span className="ml-1"> - </span>
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
                  View
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-6 border-transparent border-gradient-tl-br gradient-glow">
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-xl p-6 md:w-96">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img
                  src="./trading.png"
                  alt="Trading"
                  className="w-8 h-auto mr-2 mb-1"
                />
                <h1 className="text-lg font-bold">
                  Rank <span className="text-purple-600 ml-1">5</span>
                </h1>
              </div>

              <div className="text-left mt-4">
                <h2 className="text-xl font-bold mb-2">
                  Selling with Re-entry
                </h2>
                <p className="text-gray-700 font-medium">
                  Calmar Ratio{" "}
                  <span className="font-bold text-purple-600 ml-2">3.96</span>
                </p>
                <p className="text-gray-700 font-medium">
                  Overall Profit{" "}
                  <span className="font-bold text-purple-600 ml-3">
                    381,845
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Avg. Daily Profit{" "}
                  <span className="font-bold text-purple-600 ml-2">319.54</span>
                </p>
                <p className="text-gray-700 font-semibold">
                  Price (Rs) <span className="ml-1"> - </span>
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
                  View
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-6 border-transparent border-gradient-tl-br gradient-glow">
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-xl p-6 md:w-96">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img
                  src="./trading.png"
                  alt="Trading"
                  className="w-8 h-auto mr-2 mb-1"
                />
                <h1 className="text-lg font-bold">
                  Rank <span className="text-purple-600 ml-1">6</span>
                </h1>
              </div>

              <div className="text-left mt-4">
                <h2 className="text-xl font-bold mb-2">
                  Selling with Re-entry
                </h2>
                <p className="text-gray-700 font-medium">
                  Calmar Ratio{" "}
                  <span className="font-bold text-purple-600 ml-2">3.96</span>
                </p>
                <p className="text-gray-700 font-medium">
                  Overall Profit{" "}
                  <span className="font-bold text-purple-600 ml-3">
                    381,845
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Avg. Daily Profit{" "}
                  <span className="font-bold text-purple-600 ml-2">319.54</span>
                </p>
                <p className="text-gray-700 font-semibold">
                  Price (Rs) <span className="ml-1"> - </span>
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
                  View
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

import React from "react";

export default function HeroSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">

        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-4">
            Welcome to <span className="text-black">PayBank</span>
          </h2>
          <p className="text-xl text-center text-gray-700 mb-8 max-w-2xl">
            Seamlessly manage your finances, transfer money securely, and grow your wealth — all in one platform.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all">
            Get Started
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
          Why Choose <span className="text-black">PayBank</span>?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Feature 1 */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-lg shadow-lg text-center w-full sm:w-1/3">
            <div className="text-white text-2xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Transfers</h3>
            <p className="text-white">
              Send money anywhere in the world within seconds.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-lg shadow-lg text-center w-full sm:w-1/3">
            <div className="text-white text-2xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure Payments</h3>
            <p className="text-white">
              State-of-the-art security ensures your money stays safe.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-500 to-blue-700 text-white">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        {session ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800">
              Selamat Datang, <span className="text-teal-500">{session.user?.name}</span>!
            </h1>
            <p className="text-gray-600 mt-4">
              Terima kasih telah bergabung di platform donasi kami. Mari bersama-sama membantu yang membutuhkan.
            </p>
            <button
              onClick={() => signOut()}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg transition-all"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-800">
              Selamat Datang di GiveNusa
            </h1>
            <p className="text-gray-600 mt-4">
              Bergabunglah untuk membantu lebih banyak orang. Login sekarang untuk memulai!
            </p>
            <button
              onClick={() => signIn("google")}
              className="mt-6 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg shadow-lg transition-all"
            >
              Sign In with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

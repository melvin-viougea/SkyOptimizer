'use client';

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import ky from 'ky';

export default function Home() {
  const [pseudo, setPseudo] = useState<string>('');
  const [error, setError] = useState<CustomError | null>(null);
  const router = useRouter();

  const handleNavigate = async () => {
    setError(null);

    if (!pseudo) {
      setError({message: 'Username is required.'});
      return;
    }

    try {
      const mojangResponse: MojangResponse = await ky.get(`https://api.ashcon.app/mojang/v2/user/${pseudo}`).json();
      const playerUuid = mojangResponse.uuid;

      const profilesResponse: ProfilesResponse = await ky.get(`https://api.hypixel.net/v2/skyblock/profiles?uuid=${playerUuid}`, {
        headers: {
          'API-Key': process.env.NEXT_PUBLIC_HOST,
        }
      }).json();

      const profiles = profilesResponse.profiles || [];
      const selectedProfile = profiles.find(profile => profile.selected);

      if (!selectedProfile) {
        setError({message: 'No selected profile found.'});
        return;
      }

      const profileId = selectedProfile.profile_id;
      const profile = selectedProfile.cute_name;

      if (profileId) {
        router.push(`/${pseudo}/${profile}`);
      } else {
        setError({message: 'Profile ID is undefined.'});
      }
    } catch (error) {
      if (error instanceof Error) {
        if (process.env.NODE_ENV === "production") {
          setError({message: "No player found with this username."});
        } else {
          setError({message: `Server error: ${error.message}`});
        }
      } else {
        setError({message: 'Unknown error occurred'});
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNavigate();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="absolute top-32 text-9xl font-extrabold text-gray-200 text-center">
        SkyOptimizer
      </h1>
      <div className="py-10 px-40 rounded-3xl bg-primary text-gray-200">
        <div className="flex flex-col items-center gap-8 w-80 max-w-md">
          <input
            id="search-input"
            type="text"
            placeholder="Username"
            aria-label="Search username"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow text-gray-800 font-bold"
          />
          <button
            onClick={handleNavigate}
            className="px-6 py-3 bg-yellow text-gray-800 rounded-md transition font-bold">
            Show
          </button>

          {error && <p className="text-red-500 text-center">{error.message}</p>}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-yellow text-gray-800 text-center py-2 px-6 flex items-center justify-center gap-4 shadow-lg rounded-lg">
        <p className="text-sm md:text-base">
          Enjoying SkyOptimizer? Support us on <span className="font-bold text-yellow-400">Patreon</span>!
        </p>
        <a
          href="https://www.patreon.com/SkyOptimizerteam"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-yellow font-bold px-4 py-2 rounded-lg hover:bg-secondary transition"
        >
          Support Us
        </a>
      </div>
    </div>
  );
}
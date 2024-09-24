"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ky from 'ky';

export default function Home() {
  const [pseudo, setPseudo] = useState<string>('');
  const [error, setError] = useState<CustomError | null>(null);
  const router = useRouter();

  const handleNavigate = async () => {
    setError(null);

    if (!pseudo) {
      setError({ message: 'Username is required.' });
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
        setError({ message: 'No selected profile found.' });
        return;
      }

      const profileId = selectedProfile.profile_id;
      const profile = selectedProfile.cute_name;

      if (profileId) {
        router.push(`/${pseudo}/${profile}`);
      } else {
        setError({ message: 'Profile ID is undefined.' });
      }
    } catch (error) {
      if (error instanceof Error) {
        setError({ message: `Server error: ${error.message}` });
      } else {
        setError({ message: 'Unknown error occurred' });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold text-center">Show Optimizations For</h1>
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <input
          id="search-input"
          type="text"
          placeholder="Username"
          aria-label="Search username"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
        <button
          onClick={handleNavigate}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition">
          Show
        </button>

        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}
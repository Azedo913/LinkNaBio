import React from 'react';
import { User } from 'lucide-react';
import type { Profile } from '../types';

interface ProfileHeaderProps {
  profile: Profile;
  isDark?: boolean;
}

export function ProfileHeader({ profile, isDark = false }: ProfileHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="relative inline-block group">
        {profile.avatar ? (
          <div className="relative">
            <div className={`absolute -inset-1 ${
              isDark 
                ? 'bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800' 
                : 'bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300'
            } rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`} />
            <img
              src={profile.avatar}
              alt={profile.displayName}
              className="relative w-28 h-28 rounded-full object-cover border-2 border-white/10 transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/0 to-black/20 group-hover:from-black/0 group-hover:to-black/30 transition-colors duration-300" />
          </div>
        ) : (
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-200 flex items-center justify-center">
            <User className="w-14 h-14 text-zinc-600" />
          </div>
        )}
      </div>
      <h1 className={`text-3xl font-bold mt-4 mb-2 ${
        isDark
          ? 'bg-gradient-to-br from-white via-zinc-300 to-zinc-400'
          : 'bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-800'
      } text-transparent bg-clip-text tracking-tight`}>
        {profile.displayName}
      </h1>
      {profile.bio && (
        <p className={`${
          isDark ? 'text-zinc-400' : 'text-zinc-600'
        } max-w-md mx-auto leading-relaxed font-medium`}>
          {profile.bio}
        </p>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { LinkCard } from './components/LinkCard';
import { ProfileHeader } from './components/ProfileHeader';
import { Sparkles, Youtube, Instagram, ShoppingBag, Headphones, Moon, Sun } from 'lucide-react';
import type { Profile } from './types';

const demoProfile: Profile = {
  username: 'Celoz',
  displayName: 'Celoz',
  bio: 'Artista Independente 🎤 | Rap & Trap 🔥',
  avatar: 'https://i.imgur.com/v6ZwLSj.jpeg',
  theme: {
    backgroundColor: 'white',
    textColor: 'black',
    buttonStyle: 'soft'
  },
  links: [
    {
      id: '1',
      title: 'TikTok',
      url: 'https://www.tiktok.com/@celozzzzzzzzzz?is_from_webapp=1&sender_device=pc',
      clicks: 0,
      icon: Sparkles
    },
    {
      id: '2',
      title: 'YouTube',
      url: '',
      clicks: 0,
      icon: Youtube
    },
    {
      id: '3',
      title: 'Instagram',
      url: 'https://www.instagram.com/zceloz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      clicks: 0,
      icon: Instagram
    },
    {
      id: '4',
      title: 'SHEIN',
      url: '',
      clicks: 0,
      icon: ShoppingBag
    },
    {
      id: '5',
      title: 'Spotify',
      url: 'https://open.spotify.com/intl-pt/artist/2BpOkDB1WS5x5IP52CiZ82?si=DITQV1GFRHKCOBoNBetfow',
      clicks: 0,
      icon: Headphones
    }
  ]
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const handleLinkClick = (linkId: string) => {
    console.log(`Clicked link: ${linkId}`);
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-500 relative ${
        isDark 
          ? 'bg-[#0a0a0a]' 
          : 'bg-zinc-100'
      }`}
      style={{
        backgroundImage: isDark
          ? `
            url('https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2945&auto=format&fit=crop'),
            radial-gradient(circle at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)
          `
          : `
            url('https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2945&auto=format&fit=crop'),
            radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(200,200,200,0.9) 100%)
          `,
        backgroundBlendMode: isDark ? 'overlay' : 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay with animated spray paint effect */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 40%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 255, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)
          `,
          mixBlendMode: 'overlay'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
      
      <div className="relative py-12 px-4">
        <div 
          className={`max-w-md mx-auto ${
            isDark 
              ? 'bg-black/80 text-white' 
              : 'bg-white/90 text-gray-900'
          } backdrop-blur-md rounded-2xl shadow-2xl p-8 relative overflow-hidden border ${
            isDark ? 'border-zinc-800/50' : 'border-zinc-200'
          } animate-fade-in`}
          style={{
            backgroundImage: isDark
              ? `
                linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%),
                repeating-linear-gradient(45deg, transparent 0%, transparent 2%, rgba(55, 55, 55, 0.1) 2%, rgba(55, 55, 55, 0.1) 4%)
              `
              : `
                linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.9) 100%),
                repeating-linear-gradient(45deg, transparent 0%, transparent 2%, rgba(200, 200, 200, 0.1) 2%, rgba(200, 200, 200, 0.1) 4%)
              `
          }}
        >
          {/* Decorative spray paint splatter effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 10% 10%, currentColor 0%, transparent 20%),
                radial-gradient(circle at 90% 20%, currentColor 0%, transparent 15%),
                radial-gradient(circle at 30% 80%, currentColor 0%, transparent 25%),
                radial-gradient(circle at 70% 70%, currentColor 0%, transparent 18%)
              `,
              backgroundSize: '100% 100%'
            }}
          />
          
          <div className={`absolute top-0 left-0 w-full h-1 ${
            isDark 
              ? 'bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800' 
              : 'bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-300'
          }`} />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
          
          <button
            onClick={() => setIsDark(!isDark)}
            className={`absolute top-4 right-4 p-2 rounded-full ${
              isDark 
                ? 'bg-zinc-800/80 hover:bg-zinc-700/80' 
                : 'bg-zinc-200/80 hover:bg-zinc-300/80'
            } transition-all duration-300 hover:scale-110`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <ProfileHeader profile={demoProfile} isDark={isDark} />
          
          <div className="space-y-4">
            {demoProfile.links.map((link) => (
              <LinkCard
                key={link.id}
                link={link}
                onClick={() => handleLinkClick(link.id)}
                variant={demoProfile.theme.buttonStyle}
                isDark={isDark}
              />
            ))}
          </div>

          <div className={`text-center mt-8 text-sm font-medium ${
            isDark ? 'text-zinc-500' : 'text-zinc-500'
          }`}>
            © 2024 Celoz. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
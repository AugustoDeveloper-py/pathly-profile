import React, { useState } from 'react';
import ProfileImage from '../../media/Profile.png';


const ProfileLinks = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const links = [
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/augustodevelopsv/',
            caption: 'My professional network.',
            gradient: 'from-purple-600 to-blue-600'
        },
        {
            title: 'About me',
            url: '#/about', 
            caption: 'Learn more about my journey and goals.',
            gradient: 'from-pink-600 to-rose-600'
        },
        {
            title: 'GitHub',
            url: 'https://github.com/AugustoDeveloper-py',
            caption: 'Explore my projects and collaborations.',
            gradient: 'from-sky-600 to-cyan-600'
        },
        {
            title: 'Instagram',
            url: 'https://www.instagram.com/augustodevelop.py/',
            caption: 'Check out my latest moments and interests.',
            gradient: 'from-sky-600 to-cyan-600'
        },
        {
            title: 'Threads',
            url: 'https://www.threads.net/@augustodevelop.py?',
            caption: 'Join the conversation and my latest thoughts.',
            gradient: 'from-blue-600 to-indigo-600'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
            {/* Profile Section */}
            <div className="mb-12 text-center">
                <div className="relative w-28 h-28 mb-6 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50" />
                    <div className="relative w-28 h-28 rounded-full border-2 border-white/10 overflow-hidden">
                        <img
                            src={ProfileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <h1 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text">
                    AugustoDevelop
                </h1>
                <p className="text-gray-400 font-light text-sm tracking-wide">
                    <b>software developer</b> | <b>content creator</b>
                </p>
            </div>

            {/* Links Section */}
            <div className="w-full max-w-md space-y-4">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block w-full"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative p-4 bg-white/5 backdrop-blur-lg rounded-2xl 
                          transition-all duration-300 border border-white/10
                          hover:border-white/20 hover:bg-white/10">
                            {hoveredIndex === index && (
                                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} 
                                opacity-10 rounded-2xl blur-lg transition-opacity duration-300`} />
                            )}
                            <div className="relative flex flex-col">
                                <span className="text-lg font-medium mb-1">{link.title}</span>
                                <span className="text-sm text-gray-400">{link.caption}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Footer */}
            <footer className="mt-12 text-gray-500 text-sm font-light">
                <p className="tracking-wide"><b>© 2025 Pathly designed by AugustoDevelop.</b></p>
            </footer>
        </div>
    );
};

export default ProfileLinks;
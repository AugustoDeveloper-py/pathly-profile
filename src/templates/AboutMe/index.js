import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import ProfileImage from '../../media/Profile.png';
import GoogleImage from '../../media/googlelogo.webp';
import CiscoImage from '../../media/ciscoLogo.png';

const AboutMe = () => {
    const navigate = useNavigate(); // Inicializa el hook de navegación

    const certifications = [
        {
            title: "fundamentals of digital marketing",
            issuer: "Google",
            date: "November. 2023",
            badge: GoogleImage
        },
        {
            title: "e-commerce",
            issuer: "Google",
            date: "July. 2023",
            badge: GoogleImage
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco",
            date: "July. 2023",
            badge: CiscoImage
        },
        {
            title: "Linux Essentials",
            issuer: "Cisco",
            date: "January. 2025",
            badge: CiscoImage
        }
    ];

    const skills = [
        "Express.js", "React.js",
        "SQL", "MySQL", "MongoDB",
        "Python", "Flask", "FastAPI",
        "Tailwind CSS", "Bootstrap",
        "Git", "Bruno", "Docker", "Linux"
    ];

    // Función para regresar a la página principal
    const handleGoBack = () => {
        navigate('/'); // Navega a la ruta de ProfileLinks
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative container mx-auto px-6 sm:px-8 pt-24">
                    <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-8">
                        <img
                            src={ProfileImage}
                            alt="Profile"
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-white/10"
                        />
                        <div>
                            <h1 className="text-4xl font-bold mb-2">AugustoDevelop</h1>
                            <p className="text-xl text-gray-300">Software Developer & Content Creator</p>
                            {/* Botón de regreso */}
                            <button
                                onClick={handleGoBack} // Llama a la función handleGoBack al hacer clic
                                className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                            >
                                Return to ProfileLinks
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* About Section */}
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                            <p className="text-gray-300 leading-relaxed">
                                I'm a software developer specialized in Python, with experience in Flask and FastAPI. I also work with JavaScript, though on a smaller scale. My focus is on creating fast, efficient, and user-friendly web applications, always aiming for the highest quality and results.

                                <b className="block mt-8">📥 &nbsp; Gmail: augustodevelop.py@gmail.com</b>
                                <b className="block mt-6">📬 &nbsp; iCloudMail: augustodeveloper@icloud.com</b>
                            </p>
                        </div>

                        {/* Skills Section */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/10 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl transition-all duration-300
                           hover:bg-white/10"
                                >
                                    <img
                                        src={cert.badge}
                                        alt={cert.title}
                                        className="w-12 h-12 rounded-lg"
                                    />
                                    <div>
                                        <h3 className="font-medium">{cert.title}</h3>
                                        <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 mt-12">
                <div className="container mx-auto px-6 py-8">
                    <p className="text-center text-gray-500 text-sm">
                        © 2025 Pathly designed by AugustoDevelop.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default AboutMe;

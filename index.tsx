// FIX: Add imports for React, ReactDOM, framer-motion, lucide-react, and cms data.
// These replace the UMD global references and fix all reported errors.
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
// FIX: Add Variants to framer-motion import to fix typing errors.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { departments } from './cms.js';
import { 
    Users, BedDouble, ChevronRight, ChevronLeft, 
    Wifi, Sofa, Tv, Wind, CookingPot, Waves, Car, Building, X,
    Volume2, VolumeX, Maximize, Play, Pause, WavesLadder, Flame, WashingMachine, Grid3x3
} from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import './src/styles.css';
import GuestInfoPage from './src/GuestInfoPage.jsx';
import CalculadoraPage from './src/CalculadoraPage.jsx';
import { Analytics } from '@vercel/analytics/react';


// --- Icon Mapping ---

const WhatsAppIcon = (props) => (
  <img
    src="/whatsapp-icon.svg"
    alt="WhatsApp"
    {...props}
  />
);

const iconMap = {
    Wifi: (props) => <Wifi {...props} />,
    BedDouble: (props) => <BedDouble {...props} />,
    Sofa: (props) => <Sofa {...props} />,
    Tv: (props) => <Tv {...props} />,
    Wind: (props) => <Wind {...props} />,
    CookingPot: (props) => <CookingPot {...props} />,
    Waves: (props) => <Waves {...props} />,
    Car: (props) => <Car {...props} />,
    Building: (props) => <Building {...props} />,
    Grill: (props) => <Flame {...props} />,
    WavesLadder: (props) => <WavesLadder {...props} />,
    Washing: (props) => <WashingMachine {...props} />,
};


// --- Helper Components ---

const Button = React.memo<{ children: React.ReactNode; className?: string; onClick?: () => void }>(({ children, className = '', onClick }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`bg-accent text-text-primary font-bold uppercase py-3 px-6 rounded-lg shadow-lg shadow-accent/30 ${className}`}
    >
        {children}
    </motion.button>
));

const IconWrapper = React.memo<{ icon: React.ComponentType<any>; text: string }>(({ icon: IconComponent, text }) => (
    <div className="flex items-center space-x-2 text-text-secondary">
        <IconComponent className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium">{text}</span>
    </div>
));


// --- Page Section Components (HomePage) ---

const Header = () => {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent('Vi los departamentos en la web, me gustaría saber más información');
        window.open(`https://api.whatsapp.com/send?phone=5492916480599&text=${message}`, '_blank');
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 p-4 md:px-8 bg-background/80 backdrop-blur-sm"
        >
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-text-primary tracking-wider">
                    Monte Hermoso
                </h1>
                <Button className="!py-2 !px-4 !text-sm" onClick={handleWhatsAppClick}>
                    <div className="flex items-center gap-2">
                        <WhatsAppIcon className="w-5 h-5" />
                        <span className="hidden md:inline">Escribir</span>
                        <span className="inline md:hidden">Info</span>
                    </div>
                </Button>
            </div>
        </motion.header>
    );
};

const Hero = () => (
    <section className="h-screen min-h-[600px] flex items-center justify-center text-center text-white relative overflow-hidden">
        <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dzey3hyfq/video/upload/v1758490074/Dron_monte_hermoso_ylxuur.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="https://res.cloudinary.com/dzey3hyfq/image/upload/c_fill,w_1920,h_1080,q_auto,f_auto/v1758490074/Dron_monte_hermoso_ylxuur.jpg"
        />
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10 p-4">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-3xl md:text-5xl font-headings font-bold mb-4 tracking-tight"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
                Monte Hermoso
            </motion.h1>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="text-lg md:text-xl font-light text-secondary"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            >
                Departamentos para descansar
            </motion.h3>
        </div>
    </section>
);


const DepartmentCard = ({ depto, index }) => {
    const navigate = useNavigate();
    // FIX: Explicitly type cardVariants with Variants from framer-motion to resolve TypeScript error.
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: 'easeOut'
            }
        }
    };
    
    const handleCardClick = () => {
        navigate(`/${depto.id}`);
    };
    
    return (
        <motion.div
            variants={cardVariants}
            onClick={handleCardClick}
            className="bg-card-bg rounded-xl shadow-lg shadow-secondary/30 overflow-hidden flex flex-col group cursor-pointer"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <div className="overflow-hidden">
                <motion.img
                    src={depto.mainImage}
                    alt={`Foto principal del ${depto.name}`}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-headings text-text-primary mb-1">{depto.name}</h3>
                <p className="text-text-secondary mb-4">{depto.tagline}</p>
                <div className="flex items-center space-x-4 mb-6">
                    <IconWrapper icon={Users} text={`${depto.capacity} Personas`} />
                    <IconWrapper icon={BedDouble} text={depto.features[0]} />
                </div>
                <div className="mt-auto">
                     <div className="w-full bg-primary text-text-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 group-hover:bg-accent">
                        Ver más detalles <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


const DepartmentList = () => {
    // FIX: Explicitly type sectionVariants with Variants for type safety.
    const sectionVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };
    
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-24 bg-background"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-3xl md:text-4xl font-bold font-headings text-center text-text-primary mb-12"
                >
                    Nuestros departamentos
                </motion.h2>
                <div className="grid gap-8 lg:gap-12 max-w-2xl mx-auto">
                    {departments.map((depto, index) => (
                        <DepartmentCard key={depto.id} depto={depto} index={index} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};


const ContactFooter = () => (
     <footer className="bg-secondary/50 py-16 text-center">
        <div className="container mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-text-primary mb-4"
            >
                ¿Te gusta alguno?
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl mx-auto text-text-secondary mb-8"
            >
                Escribime por WhatsApp para más información sobre disponibilidad y precios.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
            >
                <Button className="!text-lg !py-4 !px-8" onClick={() => window.open('https://api.whatsapp.com/send?phone=5492916480599', '_blank')}>
                    <div className="flex items-center gap-3">
                        <WhatsAppIcon className="w-6 h-6" />
                        Escribir
                    </div>
                </Button>
            </motion.div>
        </div>
    </footer>
);


// --- Page Section Components (DetailPage) ---

const slideVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

const TabButton = React.memo<{ name: string; activeTab: string; onClick: () => void }>(({ name, activeTab, onClick }) => {
    const isActive = activeTab === name.toLowerCase();
    return (
        <button 
            onClick={onClick} 
            className={`relative py-3 px-6 text-lg font-medium transition-colors rounded-lg ${
                isActive ? 'bg-card-bg text-text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'
            }`}
        >
            <span>{name}</span>
            {isActive && (
                <motion.div
                    className="absolute bottom-1.5 left-4 right-4 h-1 bg-accent"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            )}
        </button>
    );
});


const MediaGallery = ({ images, videos, deptoName, photoCategories }) => {
    const [activeTab, setActiveTab] = useState('fotos');
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.8);
    const playerRef = useRef(null);

    // Crear lista plana de todas las fotos para el lightbox
    const allPhotos = photoCategories 
        ? photoCategories.flatMap(cat => cat.photos)
        : images;

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };
    
    const openLightboxFromModal = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        // No cerrar el modal, mantenerlo abierto en el fondo
    };
    
    const closeLightbox = () => setLightboxOpen(false);
    
    const openAllPhotos = () => setShowAllPhotos(true);
    const closeAllPhotos = () => setShowAllPhotos(false);

    const togglePlay = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pause();
            } else {
                playerRef.current.play();
            }
        }
    };

    const toggleMute = () => {
        if (playerRef.current) {
            playerRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (playerRef.current) {
            playerRef.current.volume = newVolume;
            playerRef.current.muted = false;
        }
        setIsMuted(false);
    };

    const handleFullscreen = () => {
        if (playerRef.current) {
            if (playerRef.current.requestFullscreen) {
                playerRef.current.requestFullscreen();
            }
        }
    };

    const closeVideo = () => {
        if (playerRef.current) {
            playerRef.current.pause();
        }
        setIsPlaying(false);
        setActiveTab('fotos');
    };

    return (
        <div className="select-none">
            {/* Tab Buttons para Fotos/Videos */}
            {videos && videos.length > 0 && (
                <div className="flex items-center space-x-2 mb-4 p-1 rounded-lg w-full md:w-auto md:inline-flex" style={{ backgroundColor: 'rgba(241, 218, 191, 0.3)' }}>
                    <TabButton name="Fotos" activeTab={activeTab} onClick={() => setActiveTab('fotos')} />
                    <TabButton name="Videos" activeTab={activeTab} onClick={() => setActiveTab('videos')} />
                </div>
            )}
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    {activeTab === 'fotos' ? (
                        <div>
                            {/* Grilla de fotos estilo Airbnb - Desktop: Horizontal, Mobile: Vertical */}
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                {/* Layout Desktop (md+): Horizontal - 2 cols principal + 2x2 grid */}
                                <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-2 h-[500px]">
                                    {/* Imagen principal - ocupa 2 columnas y 2 filas */}
                                    <div 
                                        className="col-span-2 row-span-2 cursor-pointer overflow-hidden group"
                                        onClick={() => openLightbox(0)}
                                    >
                                        <img 
                                            src={allPhotos[0]} 
                                            alt={`${deptoName} - Foto principal`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    {/* 4 fotos pequeñas en grid */}
                                    {allPhotos.slice(1, 5).map((photo, idx) => (
                                        <div 
                                            key={idx}
                                            className="col-span-1 row-span-1 cursor-pointer overflow-hidden group relative"
                                            onClick={() => openLightbox(idx + 1)}
                                        >
                                            <img 
                                                src={photo} 
                                                alt={`${deptoName} - Foto ${idx + 2}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {/* Overlay en la última foto con contador */}
                                            {idx === 3 && allPhotos.length > 5 && (
                                                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(74, 74, 74, 0.6)' }}>
                                                    <span className="text-white font-bold text-lg">+{allPhotos.length - 5} más</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Layout Mobile: Vertical - 1 grande arriba + 2x2 grid abajo */}
                                <div className="grid md:hidden grid-cols-2 gap-2">
                                    {/* Imagen principal - ocupa 2 columnas */}
                                    <div 
                                        className="col-span-2 h-[250px] cursor-pointer overflow-hidden group"
                                        onClick={() => openLightbox(0)}
                                    >
                                        <img 
                                            src={allPhotos[0]} 
                                            alt={`${deptoName} - Foto principal`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    {/* 4 fotos en grid 2x2 */}
                                    {allPhotos.slice(1, 5).map((photo, idx) => (
                                        <div 
                                            key={idx}
                                            className="h-[120px] cursor-pointer overflow-hidden group relative"
                                            onClick={() => openLightbox(idx + 1)}
                                        >
                                            <img 
                                                src={photo} 
                                                alt={`${deptoName} - Foto ${idx + 2}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {/* Overlay en la última foto con contador */}
                                            {idx === 3 && allPhotos.length > 5 && (
                                                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(74, 74, 74, 0.6)' }}>
                                                    <span className="text-white font-bold">+{allPhotos.length - 5}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Botón "Ver todas las fotos" - Diseño según design system */}
                                <motion.button
                                    onClick={openAllPhotos}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute bottom-4 right-4 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 uppercase text-sm"
                                    style={{ 
                                        backgroundColor: '#E6A4B4',
                                        color: '#4A4A4A',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <Grid3x3 size={18} />
                                    Ver todas ({allPhotos.length})
                                </motion.button>
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black group">
                            <video
                                ref={playerRef}
                                className="w-full h-full object-cover md:object-contain"
                                src={videos[0]}
                                muted={isMuted}
                                loop
                                playsInline
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            />
                            
                            {/* Custom Controls Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                    onClick={togglePlay}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-primary/80 text-text-primary rounded-full p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {isPlaying ? (
                                        <Pause size={24} />
                                    ) : (
                                        <Play size={24} />
                                    )}
                                </motion.button>
                            </div>

                            {/* Control Bar */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={togglePlay}
                                            className="text-white hover:text-primary transition-colors"
                                            title={isPlaying ? "Pausar" : "Reproducir"}
                                        >
                                            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                                        </button>

                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={toggleMute}
                                                className="text-white hover:text-primary transition-colors"
                                                title={isMuted ? "Activar sonido" : "Silenciar"}
                                            >
                                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                            </button>
                                            <input
                                                type="range"
                                                min="0"
                                                max="1"
                                                step="0.1"
                                                value={isMuted ? 0 : volume}
                                                onChange={handleVolumeChange}
                                                className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                                                title="Volumen"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={handleFullscreen}
                                            className="text-white hover:text-primary transition-colors"
                                            title="Pantalla completa"
                                        >
                                            <Maximize size={20} />
                                        </button>
                                        {isPlaying && (
                                            <button
                                                onClick={closeVideo}
                                                className="text-white hover:text-red-400 transition-colors"
                                                title="Cerrar video"
                                            >
                                                <X size={20} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Modal de todas las fotos con categorías */}
            <AnimatePresence>
                {showAllPhotos && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 overflow-y-auto"
                        style={{ backgroundColor: '#FDF8F0' }}
                    >
                        <div className="sticky top-0 z-10 shadow-md" style={{ 
                            backgroundColor: '#FFFFFF',
                            borderBottom: '1px solid rgba(168, 218, 220, 0.3)'
                        }}>
                            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                                <motion.button
                                    onClick={closeAllPhotos}
                                    whileHover={{ scale: 1.05, x: -2 }}
                                    className="flex items-center gap-2 font-bold"
                                    style={{ color: '#4A4A4A' }}
                                >
                                    <ChevronLeft size={24} />
                                    Volver
                                </motion.button>
                                <h2 className="text-xl font-bold" style={{ color: '#4A4A4A' }}>
                                    {deptoName} - Galería de fotos
                                </h2>
                                <div className="w-20"></div> {/* Spacer for centering */}
                            </div>
                        </div>

                        <div className="container mx-auto px-4 py-8 max-w-6xl">
                            {photoCategories ? (
                                // Mostrar fotos organizadas por categorías
                                photoCategories.map((category, catIdx) => (
                                    <div key={catIdx} className="mb-12">
                                        <h3 className="text-2xl font-bold mb-6 pb-2" style={{ 
                                            color: '#4A4A4A',
                                            borderBottom: '2px solid #A8DADC'
                                        }}>
                                            {category.category}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {category.photos.map((photo, photoIdx) => {
                                                const globalIndex = photoCategories
                                                    .slice(0, catIdx)
                                                    .reduce((acc, cat) => acc + cat.photos.length, 0) + photoIdx;
                                                
                                                return (
                                                    <motion.div
                                                        key={photoIdx}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: photoIdx * 0.05 }}
                                                        className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                                                        onClick={() => openLightboxFromModal(globalIndex)}
                                                    >
                                                        <img
                                                            src={photo}
                                                            alt={`${category.category} ${photoIdx + 1}`}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                            loading="lazy"
                                                        />
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // Fallback: mostrar todas las fotos sin categorías
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {allPhotos.map((photo, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                                            onClick={() => openLightboxFromModal(idx)}
                                        >
                                            <img
                                                src={photo}
                                                alt={`Foto ${idx + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox para ver fotos en pantalla completa */}
            <Lightbox
                open={isLightboxOpen}
                close={closeLightbox}
                index={lightboxIndex}
                slides={allPhotos.map(src => ({ src }))}
                plugins={[Thumbnails]}
                thumbnails={{
                    position: 'bottom',
                    width: 120,
                    height: 80,
                    border: 2,
                    borderRadius: 4,
                    padding: 0,
                    gap: 16,
                    showToggle: false
                }}
                carousel={{
                    finite: false,
                    preload: 2
                }}
                animation={{
                    fade: 250,
                    swipe: 250
                }}
                controller={{
                    closeOnBackdropClick: true
                }}
                styles={{
                    container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
                    thumbnailsContainer: { backgroundColor: 'rgba(0, 0, 0, 0.8)' }
                }}
            />
        </div>
    );
};

const AmenitiesList = ({ amenities }) => {
    // FIX: Explicitly type listVariants with Variants for type safety.
    const listVariants: Variants = {
        visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
        hidden: { opacity: 0 },
    };
    // FIX: Explicitly type itemVariants with Variants from framer-motion to resolve TypeScript error.
    const itemVariants: Variants = {
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
        hidden: { opacity: 0, x: -20 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5"
        >
            {amenities.map(({ icon, text }) => {
                const IconComponent = iconMap[icon];
                return (
                    <motion.div key={text} variants={itemVariants} className="flex items-center gap-3">
                        {IconComponent && <IconComponent className="w-6 h-6 text-primary flex-shrink-0" />}
                        <span className="text-text-secondary">{text}</span>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

const FloatingCTA = ({ deptoName = null }) => {
    const getWhatsAppMessage = () => {
        if (deptoName) {
            return `Vi el ${deptoName} en la web, me gustaría saber más información`;
        }
        return 'Vi los departamentos en la web, me gustaría saber más información';
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(getWhatsAppMessage());
        window.open(`https://api.whatsapp.com/send?phone=5492916480599&text=${message}`, '_blank');
    };

    return (
        <motion.div
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
            className="fixed bottom-4 right-4 z-40"
        >
            <Button className="!py-3 !px-5 !rounded-full shadow-xl shadow-accent/40" onClick={handleWhatsAppClick}>
                <div className="flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5" />
                    <span className="hidden md:inline">Escribir por este depto</span>
                    <span className="inline md:hidden">Escribir</span>
                </div>
            </Button>
        </motion.div>
    );
};

const OtherDepartmentPromo = ({ currentDepto, onSelectDepto }) => {
    const otherDepto = departments.find(d => d.id !== currentDepto.id);
    if (!otherDepto) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-card-bg rounded-xl shadow-lg shadow-secondary/30 overflow-hidden flex flex-col group max-w-md mx-auto"
        >
            <div className="overflow-hidden">
                <motion.img
                    src={otherDepto.mainImage}
                    alt={`Foto principal del ${otherDepto.name}`}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-headings text-text-primary mb-1">{otherDepto.name}</h3>
                <p className="text-text-secondary mb-4">{otherDepto.tagline}</p>
                <div className="flex items-center space-x-4 mb-6">
                    <IconWrapper icon={Users} text={`${otherDepto.capacity} Personas`} />
                    <IconWrapper icon={BedDouble} text={otherDepto.features[0]} />
                </div>
                <div className="mt-auto">
                     <motion.button
                        onClick={() => onSelectDepto(otherDepto)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-primary text-text-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 group-hover:bg-accent"
                    >
                        Ver más detalles <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const MapComponent = ({ embedSrc, name }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
            <iframe
                src={embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${name}`}
            ></iframe>
        </div>
    );
};

const DetailPage = ({ depto, onBack, onSelectDepto }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <div className="pt-24 bg-background min-h-screen">
                <div className="container mx-auto px-4 pb-24">
                    <motion.button
                        onClick={onBack}
                        whileHover={{ scale: 1.05, x: -2 }}
                        className="flex items-center gap-2 text-primary font-bold mb-8"
                    >
                        <ChevronLeft /> Volver al listado
                    </motion.button>

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                        <div className="lg:col-span-3">
                            <MediaGallery 
                                images={[depto.mainImage, ...depto.gallery]} 
                                videos={depto.videos}
                                deptoName={depto.name}
                                photoCategories={depto.photoCategories}
                            />
                        </div>
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl md:text-4xl font-bold font-headings text-text-primary mb-2">{depto.name}</h1>
                            <p className="text-lg text-text-secondary mb-6">{depto.tagline}</p>
                            <div className="flex items-center space-x-6 mb-8 border-y border-primary/20 py-4">
                                <IconWrapper icon={Users} text={`${depto.capacity} Personas`} />
                                <IconWrapper icon={BedDouble} text={depto.features[0]} />
                            </div>
                            
                            <h2 className="text-2xl font-bold font-headings text-text-primary mb-6">Comodidades incluidas</h2>
                            <AmenitiesList amenities={depto.amenities} />
                        </div>
                    </div>
                     <div className="mt-16 md:mt-24">
                        <h2 className="text-3xl md:text-4xl font-bold font-headings text-center text-text-primary mb-12">Ubicación</h2>
                        <MapComponent embedSrc={depto.location.embedSrc} name={depto.name} />
                    </div>
                </div>
            </div>
            <ContactFooter />
            <FloatingCTA deptoName={depto.name} />
        </motion.section>
    );
};


// --- Main App Component ---

const HomePage = () => {
    const navigate = useNavigate();

    const handleSelectDepto = (depto) => {
        navigate(`/${depto.id}`);
    };

    return (
        <motion.main
            key="homepage"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <DepartmentList />
            <ContactFooter />
        </motion.main>
    );
};

const DetailPageWrapper = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const depto = departments.find(d => d.id === id);

    if (!depto) {
        return <div>Departamento no encontrado</div>;
    }

    const handleBack = () => {
        navigate('/');
    };

    const handleSelectDepto = (selectedDepto) => {
        window.scrollTo(0, 0);
        navigate(`/${selectedDepto.id}`);
    };

    return <DetailPage depto={depto} onBack={handleBack} onSelectDepto={handleSelectDepto} />;
};

const App = () => {
    const location = useLocation();
    const isInfoPage = location.pathname.includes('/info');

    return (
        <React.Fragment>
            {!isInfoPage && <Header />}
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/calculadora" element={<CalculadoraPage />} />
                    <Route path="/:id" element={<DetailPageWrapper />} />
                    <Route path="/:id/info" element={<GuestInfoPage />} />
                </Routes>
            </AnimatePresence>
            <Analytics />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
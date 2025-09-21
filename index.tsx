// FIX: Add imports for React, ReactDOM, framer-motion, lucide-react, and cms data.
// These replace the UMD global references and fix all reported errors.
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
// FIX: Add Variants to framer-motion import to fix typing errors.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { departments } from './cms.js';
import { 
    Users, BedDouble, ChevronRight, ChevronLeft, 
    Wifi, Sofa, Tv, Wind, CookingPot, Waves, Car, Building, X
} from 'lucide-react';


// --- Icon Mapping ---

const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    fill="currentColor"
    {...props}
  >
    <path
      d="M16.2,8.1c-4.3,0-7.8,3.5-7.8,7.8c0,1.4,0.4,2.8,1.1,4l-1.2,4.2l4.4-1.2c1.2,0.6,2.5,1,3.9,1c4.3,0,7.8-3.5,7.8-7.8 C24,11.6,20.5,8.1,16.2,8.1z M19.4,18.4c-0.2,0.4-0.8,0.7-1.4,0.9c-0.6,0.2-1.2,0.2-1.9-0.1c-0.7-0.3-1.6-0.7-2.7-1.6 c-1.5-1.1-2.5-2.6-2.6-2.8c-0.2-0.2-0.4-0.6-0.4-0.9c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.5-0.3s0.3,0,0.5-0.1 c0.2,0,0.3-0.1,0.5-0.2c0.2,0,0.2,0,0.3,0.1c0.1,0.1,0.2,0.3,0.3,0.5s0.2,0.4,0.2,0.5c0,0.1,0.1,0.3-0.1,0.5c-0.1,0.2-0.2,0.3-0.3,0.4 c-0.1,0.1-0.2,0.2-0.1,0.4c0.1,0.2,0.5,0.8,1.1,1.4c0.8,0.8,1.5,1.1,1.7,1.2c0.2,0.1,0.4,0.1,0.5-0.1c0.1-0.1,0.5-0.6,0.6-0.8 c0.2-0.2,0.3-0.2,0.5-0.1c0.2,0.1,1.1,0.5,1.3,0.6c0.2,0.1,0.3,0.2,0.4,0.3C19.7,17.9,19.6,18.1,19.4,18.4z"
      fill="currentColor"
    />
  </svg>
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
};


// --- Helper Components ---

const Button = ({ children, className = '', onClick }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`bg-accent text-text-primary font-bold uppercase py-3 px-6 rounded-lg shadow-lg shadow-accent/30 ${className}`}
    >
        {children}
    </motion.button>
);

const IconWrapper = ({ icon: IconComponent, text }) => (
    <div className="flex items-center space-x-2 text-text-secondary">
        <IconComponent className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium">{text}</span>
    </div>
);


// --- Page Section Components (HomePage) ---

const Header = () => (
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
            <Button className="!py-2 !px-4 !text-sm">
                <div className="flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5" />
                    <span className="hidden md:inline">Escribir</span>
                    <span className="inline md:hidden">Info</span>
                </div>
            </Button>
        </div>
    </motion.header>
);

const Hero = () => (
    <section className="h-screen min-h-[600px] flex items-center justify-center text-center text-white relative overflow-hidden">
        <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dzey3hyfq/video/upload/v1758490074/Dron_monte_hermoso_ylxuur.mp4"
            autoPlay
            loop
            muted
            playsInline
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
    
    return (
        <motion.div
            variants={cardVariants}
            className="bg-card-bg rounded-xl shadow-lg shadow-secondary/30 overflow-hidden flex flex-col group"
        >
            <div className="overflow-hidden">
                <motion.img
                    src={depto.mainImage}
                    alt={`Foto principal del ${depto.name}`}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
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
                     <motion.button
                        onClick={() => navigate(`/${depto.id}`)}
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
                <Button className="!text-lg !py-4 !px-8">
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

const Lightbox = ({ images, activeIndex, onClose, onNavigate }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-[100] flex flex-col items-center justify-center p-4"
        onClick={onClose}
    >
        <button onClick={onClose} className="absolute top-4 right-4 text-white z-20">
            <X size={32} />
        </button>
        
        <div className="relative w-full max-w-4xl h-3/4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence initial={false} custom={onNavigate.direction}>
                <motion.img
                    key={activeIndex}
                    src={images[activeIndex]}
                    custom={onNavigate.direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'tween', duration: 0.3, ease: 'easeInOut' },
                        opacity: { duration: 0.2 },
                    }}
                    className="max-h-full max-w-full object-contain"
                />
            </AnimatePresence>
             <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                <button onClick={() => onNavigate.prev()} className="pointer-events-auto text-white bg-black/30 rounded-full p-3 hover:bg-black/50 transition-colors z-20 ml-4">
                    <ChevronLeft size={32} />
                </button>
                <button onClick={() => onNavigate.next()} className="pointer-events-auto text-white bg-black/30 rounded-full p-3 hover:bg-black/50 transition-colors z-20 mr-4">
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>

        <div className="flex space-x-2 p-4 overflow-x-auto mt-4" onClick={(e) => e.stopPropagation()}>
            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    onClick={() => onNavigate.to(idx)}
                    className={`w-20 h-14 object-cover rounded cursor-pointer transition-all ${
                        activeIndex === idx ? 'ring-2 ring-white scale-105' : 'opacity-60 hover:opacity-100'
                    }`}
                />
            ))}
        </div>
    </motion.div>
);

const TabButton = ({ name, activeTab, onClick }) => {
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
};


const MediaGallery = ({ images, videos, deptoName }) => {
    const [activeTab, setActiveTab] = useState('fotos');
    const [[page, direction], setPage] = useState([0, 0]);
    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isLightboxOpen]);

    const wrap = (min, max, v) => {
        const rangeSize = max - min;
        return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
    };
    
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    
    const paginateTo = (newIndex: number) => {
        const newDirection = newIndex > imageIndex ? 1 : -1;
        setPage([newIndex, newDirection]);
    }

    const openLightbox = (index: number) => {
        setPage([index, 0]);
        setLightboxOpen(true);
    };
    
    const closeLightbox = () => setLightboxOpen(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="select-none">
            <div className="flex items-center space-x-2 mb-4 bg-secondary/50 p-1 rounded-lg w-full md:w-auto md:inline-flex">
                <TabButton name="Fotos" activeTab={activeTab} onClick={() => setActiveTab('fotos')} />
                {videos && videos.length > 0 && (
                    <TabButton name="Videos" activeTab={activeTab} onClick={() => setActiveTab('videos')} />
                )}
            </div>
            
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
                           <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg group">
                                <AnimatePresence initial={false} custom={direction}>
                                    <motion.img
                                        key={page}
                                        src={images[imageIndex]}
                                        alt={`Vista ${imageIndex + 1} de ${deptoName}`}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = Math.abs(offset.x) * velocity.x;
                                            if (swipe < -10000) {
                                                paginate(1);
                                            } else if (swipe > 10000) {
                                                paginate(-1);
                                            }
                                        }}
                                        className="absolute w-full h-full object-cover cursor-pointer"
                                        onClick={() => openLightbox(imageIndex)}
                                    />
                                </AnimatePresence>

                                <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => paginate(-1)} className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 focus:outline-none">
                                        <ChevronLeft size={24} />
                                    </button>
                                </div>
                                <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => paginate(1)} className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 focus:outline-none">
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="relative mt-4">
                                <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {images.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.05 }}
                                            className={`flex-shrink-0 cursor-pointer rounded-md overflow-hidden ring-2 transition-all ${imageIndex === idx ? 'ring-primary' : 'ring-transparent'}`}
                                            onClick={() => paginateTo(idx)}
                                        >
                                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-20 h-14 object-cover" />
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Gradientes para indicar scroll */}
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black group">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-contain"
                                src={videos[0]}
                                muted
                                loop
                                playsInline
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                    onClick={togglePlay}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-primary/80 text-text-primary rounded-full p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {isPlaying ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 4h4v16H6V4zM14 4h4v16h-4V4z"/>
                                        </svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                {isLightboxOpen && activeTab === 'fotos' && (
                    <Lightbox
                        images={images}
                        activeIndex={imageIndex}
                        onClose={closeLightbox}
                        onNavigate={{
                            next: () => paginate(1),
                            prev: () => paginate(-1),
                            to: paginateTo,
                            direction: direction
                        }}
                    />
                )}
            </AnimatePresence>
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

const FloatingCTA = () => (
    <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
        className="fixed bottom-4 right-4 z-40"
    >
        <Button className="!py-3 !px-5 !rounded-full shadow-xl shadow-accent/40">
            <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5" />
                <span className="hidden md:inline">Escribir por este depto</span>
                <span className="inline md:hidden">Escribir</span>
            </div>
        </Button>
    </motion.div>
);

const OtherDepartmentPromo = ({ currentDepto, onSelectDepto }) => {
    const otherDepto = departments.find(d => d.id !== currentDepto.id);
    if (!otherDepto) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 bg-card-bg rounded-xl shadow-lg shadow-secondary/30 overflow-hidden flex flex-col group max-w-md mx-auto"
        >
            <div className="overflow-hidden">
                <motion.img
                    src={otherDepto.mainImage}
                    alt={`Foto principal del ${otherDepto.name}`}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
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
                    <div className="mt-16 md:mt-24 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold font-headings text-text-primary mb-8">También te puede interesar</h2>
                        <OtherDepartmentPromo currentDepto={depto} onSelectDepto={onSelectDepto} />
                    </div>
                </div>
            </div>
            <ContactFooter />
            <FloatingCTA />
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
        navigate(`/${selectedDepto.id}`);
    };

    return <DetailPage depto={depto} onBack={handleBack} onSelectDepto={handleSelectDepto} />;
};

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:id" element={<DetailPageWrapper />} />
                </Routes>
            </AnimatePresence>
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
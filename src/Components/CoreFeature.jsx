import { Share2, Headphones, Camera, PenTool, Star } from 'lucide-react';
import BgImg from '../assets/Background.png';
import FeatureCard from './FeatureCard';
import SecHead from './SecHead';

// Displays the services offered by the event platform with supporting review details.
const CoreFeature = () => {
    const featuresData = [
        {
            id: 1,
            title: "Event Planning Manage",
            description: "Deliver seamless virtual experience with high-quality streaming and interactive tools.",
            icon: <Share2 size={24} className="text-white" />,
        },
        {
            id: 2,
            title: "Conference Coordination",
            description: "Deliver seamless virtual experience with high-quality streaming and interactive tools.",
            icon: <Headphones size={24} className="text-white" />,
        },
        {
            id: 3,
            title: "Venue Booking & Setup",
            description: "Deliver seamless virtual experience with high-quality streaming and interactive tools.",
            icon: <Camera size={24} className="text-white" />,
        },
        {
            id: 4,
            title: "Post-Event Analytics",
            description: "Deliver seamless virtual experience with high-quality streaming and interactive tools.",
            icon: <PenTool size={24} className="text-white" />,
        },
    ];

    return (
        <div className="bg-[#1a1035] relative overflow-hidden font-sans text-white py-20 px-4">

            {/* --- Background Image --- */}
            <img
                src={BgImg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* --- Dark Gradient Overlay --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1035]/80 to-[#120b26]/95 z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* --- Header Section using SecHead --- */}
                <SecHead
                    title="Core Feature"
                    heading="Core features that power our exceptional services"
                    className="text-center mx-auto text-5xl flex flex-col items-center justify-center mb-16 w-full max-w-2xl"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {featuresData.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-gray-400 text-sm mb-6">
                        Join our team and help weave innovation, quality, and success together worldwide.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <span className="font-bold text-lg">4.9/5</span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} className="fill-[#734BDF] text-[#734BDF]" />
                            ))}
                        </div>
                        <span className="font-medium text-gray-300">Our 4200 Review</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoreFeature;
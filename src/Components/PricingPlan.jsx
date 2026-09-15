// PricingPlan.jsx
import { Layers, User, Gem } from 'lucide-react'; // Using lucide icons to match the design
import PricingCard from './PricingCard';
import SecHead from './SecHead';

// Defines the available ticket tiers and lays them out as pricing cards.
const PricingPlan = () => {

  const pricingData = [
    {
      id: 1,
      title: "Basic Package",
      subtitle: "Perfect for first-time attend",
      price: "49",
      icon: <Layers size={24} />,
      isPopular: false,
      features: [
        "Entry to all standard sessions",
        "Reserved seating in select session",
        "Meet & greet with speakers",
        "Premium networking lounge"
      ]
    },
    {
      id: 2,
      title: "Standard Pass",
      subtitle: "Perfect for first-time attend",
      price: "59",
      icon: <User size={24} />,
      isPopular: true, // This adds the ribbon
      features: [
        "Entry to all standard sessions",
        "Reserved seating in select session",
        "Meet & greet with speakers",
        "Premium networking lounge"
      ]
    },
    {
      id: 3,
      title: "Premium Pass",
      subtitle: "Perfect for first-time attend",
      price: "69",
      icon: <Gem size={24} />,
      isPopular: false,
      features: [
        "Entry to all standard sessions",
        "Reserved seating in select session",
        "Meet & greet with speakers",
        "Premium networking lounge"
      ]
    }
  ];

  return (
    <div className="bg-white py-20 px-4 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* --- Header Section --- */}
        <SecHead
          title="Pricing Plan"
          heading="Discover our flexible pricing plans for attendees"
          className="text-center flex flex-col items-center justify-center mb-16 text-[#1a1035]"
        />

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.id}
              icon={plan.icon}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default PricingPlan;
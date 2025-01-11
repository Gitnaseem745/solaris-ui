'use client'
import { IoMdCheckmark } from "react-icons/io"
import { RiArrowRightSLine } from "react-icons/ri"

interface ProfPricingFeature {
    text: string
}

interface ProfPricingProps {
    type: 'basic' | 'popular'
    title: string
    label: string
    price: number
    features: ProfPricingFeature[]
    onStart?: () => void
    className?: string
}

export default function ProfPricing({
    type = "basic",
    title = "Basic Plan",
    label = "Starter",
    price = 19.99,
    features = dummyFeatures,
    className = "",
    onStart,
}: ProfPricingProps) {
    return (
        <div
            className={`
          rounded-3xl p-8
          ${type === 'basic' ? 'bg-gray-100' : 'bg-[#1a1a1a]'}
          ${className}
        `}
        >
            {/* Label */}
            <span
                className={`
            inline-block px-4 py-1 rounded-full text-sm font-medium mb-6
            ${type === 'basic' ? 'bg-black text-white' : 'bg-white/10 text-white'}
          `}
            >
                {label}
            </span>

            {/* Title */}
            <h2 className={`text-3xl font-bold mb-8 ${type === 'basic' ? 'text-black' : 'text-white'}`}>
                {title}
            </h2>

            {/* Features */}
            <div className={`
          grid gap-4 mb-8
          ${type === 'popular' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}
        `}>
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <IoMdCheckmark className={`size-5 ${type === 'basic' ? 'text-gray-600' : 'text-gray-300'}`} />
                        <span className={`text-sm ${type === 'basic' ? 'text-gray-600' : 'text-gray-300'}`}>
                            {feature.text}
                        </span>
                    </div>
                ))}
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between flex-wrap gap-2 gap-y-4">
                <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-bold ${type === 'basic' ? 'text-black' : 'text-white'}`}>
                        {price.toFixed(2)}€
                    </span>
                    <span className={`text-sm ${type === 'basic' ? 'text-gray-600' : 'text-gray-300'}`}>
                        / month
                    </span>
                </div>
                <button
                    onClick={onStart}
                    className={`
              px-6 py-2.5 rounded-full text-sm font-medium
              inline-flex items-center gap-2
              transition-colors
              ${type === 'basic'
                            ? 'bg-black text-white hover:bg-neutral-800'
                            : 'bg-[#a1a1a1] text-black hover:bg-neutral-300'
                        }
            `}
                >
                    Start now
                    <RiArrowRightSLine className="size-5" />
                </button>
            </div>
        </div>
    )
}
const dummyFeatures = [
    { text: "High Performance" },
    { text: "Unlimited Storage" },
    { text: "24/7 Customer Support" },
    { text: "Easy Integration" },
];

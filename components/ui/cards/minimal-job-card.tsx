import { FaMeta } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi";

const Icon = FaMeta;

interface MinJobCardProps {
    company?: {
        name?: string;
        logo?: string;
    };
    title?: string;
    description?: string;
    tags?: string[];
    onApply?: () => void;
    className?: string;
}

export default function MinJobCard({
    company = {
        name: 'Meta',
        logo: '/placeholder.svg?height=32&width=32'
    },
    title = 'Software Engineer',
    description = 'Develop innovative software solutions that drive impactful, high-performance experiences. Work with cutting-edge technologies to create seamless user interfaces and robust backend systems.',
    tags = ['Full-Time', 'Remote', 'Mid-Senior Level'],
    onApply,
    className = "",
}: MinJobCardProps) {
    return (
        <div className={`bg-[#1a1a1a] rounded-3xl p-8 shadow-sm ${className}`}>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center overflow-hidden">
                    <Icon className="size-5 text-white" />
                </div>
                <span className="text-white font-medium">{company.name}</span>
            </div>

            <div className="space-y-4 mb-6">
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <p className="text-gray-400 line-clamp-2">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-[#2a2a2a] rounded-full text-sm text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <button
                onClick={onApply}
                className="w-full bg-[#2a2a2a] text-white rounded-full py-4 px-6 flex items-center justify-between hover:bg-[#3a3a3a] transition-colors ease-in-out duration-300"
            >
                <span className="font-medium">Apply</span>
                <HiOutlineArrowRight className="size-5" />
            </button>
        </div>
    );
}

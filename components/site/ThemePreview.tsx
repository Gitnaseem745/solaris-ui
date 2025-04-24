import { themeColors } from "@/types/themes"
import {
    Check, Copy, Palette, Home, Info, Phone, HelpCircle, ArrowRight, Star, Zap, Shield, MapPin, PhoneCall, Mail,
} from "lucide-react"

// Testimonial data
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Designer",
        content:
            "This theme creator has completely transformed our design workflow. The ability to customize and preview in real-time is a game-changer.",
        avatar: "/placeholder.svg?height=50&width=50",
    },
    {
        name: "Michael Chen",
        role: "Frontend Developer",
        content:
            "I've tried many theme generators, but this one stands out with its intuitive interface and comprehensive color options.",
        avatar: "/placeholder.svg?height=50&width=50",
    },
    {
        name: "Emily Rodriguez",
        role: "UI/UX Designer",
        content:
            "The preview feature helps me visualize exactly how my theme will look across different components. Absolutely love it!",
        avatar: "/placeholder.svg?height=50&width=50",
    },
]

// Pricing plans
const pricingPlans = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for personal projects and experimentation",
        features: ["Basic theme creation", "5 theme exports per month", "Community support"],
    },
    {
        name: "Pro",
        price: "$19",
        description: "For professionals and small teams",
        features: ["Unlimited theme creation", "Custom color palettes", "Priority support", "Theme sharing"],
    },
    {
        name: "Enterprise",
        price: "$49",
        description: "For organizations with advanced needs",
        features: ["Everything in Pro", "Team collaboration", "API access", "White labeling", "Dedicated support"],
    },
]

export default function ThemePreview({ themeColors }: { themeColors: themeColors }) {
    return (
        <main
            className="flex-1 overflow-y-auto h-[calc(100vh-60px)] scroll-smooth"
            style={{
                backgroundColor: themeColors.background,
                color: themeColors.foreground,
            }}
        >
            {/* Hero Section */}
            <section id="home" className="relative overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
                <div
                    className="absolute inset-0 opacity-10 blur-3xl"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${themeColors.primary}, transparent 70%)`,
                    }}
                ></div>

                <div className="relative max-w-7xl mx-auto">
                    <nav className="hidden md:flex justify-between items-center mb-16">
                        <div className="flex items-center gap-2">
                            <Palette size={28} style={{ color: themeColors.primary }} />
                            <span className="md:text-xl text-2xl font-bold">ThemeStudio</span>
                        </div>

                        <div className="flex items-center gap-8">
                            <NavLink themeColors={themeColors} icon={<Home size={16} />} label="Home" active />
                            <NavLink themeColors={themeColors} icon={<HelpCircle size={16} />} label="Features" />
                            <NavLink themeColors={themeColors} icon={<Info size={16} />} label="Pricing" />
                            <NavLink themeColors={themeColors} icon={<Phone size={16} />} label="Contact" />
                        </div>

                        <button
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                            style={{
                                backgroundColor: themeColors.primary,
                                color: themeColors["primary-foreground"],
                            }}
                        >
                            Get Started <ArrowRight size={16} />
                        </button>
                    </nav>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-8 text-center lg:text-left max-md:pt-6">
                            <div
                                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium"
                                style={{
                                    backgroundColor: `${themeColors.primary}20`,
                                    color: themeColors.primary,
                                }}
                            >
                                ✨ Introducing ThemeStudio 2.0
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Create beautiful themes with <span style={{ color: themeColors.primary }}>zero effort</span>
                            </h1>

                            <p
                                className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0"
                                style={{ color: themeColors["muted-foreground"] }}
                            >
                                Design, customize, and export stunning themes for your applications in minutes. No design skills
                                required.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button
                                    className="px-6 py-3 rounded-lg font-medium transition-colors"
                                    style={{
                                        backgroundColor: themeColors.primary,
                                        color: themeColors["primary-foreground"],
                                    }}
                                >
                                    Start Creating
                                </button>

                                <button
                                    className="px-6 py-3 rounded-lg font-medium transition-colors border"
                                    style={{
                                        borderColor: themeColors.border,
                                        color: themeColors.foreground,
                                    }}
                                >
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        <div
                            className="flex-1 rounded-xl overflow-hidden shadow-2xl"
                            style={{
                                backgroundColor: themeColors.card,
                                border: `1px solid ${themeColors.border}`,
                            }}
                        >
                            <div className="p-1 border-b" style={{ borderColor: themeColors.border }}>
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div
                                        className="h-8 rounded-md w-3/4"
                                        style={{ backgroundColor: `${themeColors.foreground}20` }}
                                    ></div>
                                    <div className="space-y-2">
                                        <div
                                            className="h-4 rounded-md"
                                            style={{ backgroundColor: `${themeColors.foreground}15` }}
                                        ></div>
                                        <div
                                            className="h-4 rounded-md w-5/6"
                                            style={{ backgroundColor: `${themeColors.foreground}15` }}
                                        ></div>
                                        <div
                                            className="h-4 rounded-md w-4/6"
                                            style={{ backgroundColor: `${themeColors.foreground}15` }}
                                        ></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-8 rounded-md w-24" style={{ backgroundColor: themeColors.primary }}></div>
                                        <div className="h-8 rounded-md w-24 border" style={{ borderColor: themeColors.border }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundColor: themeColors.card,
                    color: themeColors["card-foreground"],
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
                        <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors["muted-foreground"] }}>
                            Everything you need to create stunning themes for your applications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Palette size={24} />}
                            title="Intuitive Color Picker"
                            description="Choose from a curated selection of colors or use custom values"
                            themeColors={themeColors}
                        />

                        <FeatureCard
                            icon={<Zap size={24} />}
                            title="Real-time Preview"
                            description="See your changes instantly in a realistic application interface"
                            themeColors={themeColors}
                        />

                        <FeatureCard
                            icon={<Copy size={24} />}
                            title="One-click Export"
                            description="Export your theme as CSS variables, Tailwind config, or JSON"
                            themeColors={themeColors}
                        />

                        <FeatureCard
                            icon={<Shield size={24} />}
                            title="Accessibility Checks"
                            description="Ensure your theme meets WCAG contrast guidelines"
                            themeColors={themeColors}
                        />

                        <FeatureCard
                            icon={<Star size={24} />}
                            title="Theme Presets"
                            description="Start with professionally designed theme presets"
                            themeColors={themeColors}
                        />

                        <FeatureCard
                            icon={<ArrowRight size={24} />}
                            title="Framework Integration"
                            description="Seamlessly integrate with React, Vue, Angular and more"
                            themeColors={themeColors}
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
                        <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors["muted-foreground"] }}>
                            Trusted by thousands of designers and developers worldwide
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} themeColors={themeColors} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section
                id="pricing"
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundColor: themeColors.card,
                    color: themeColors["card-foreground"],
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
                        <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors["muted-foreground"] }}>
                            Choose the plan that works best for you
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard key={index} plan={plan} themeColors={themeColors} featured={index === 1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section
                id="contact"
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundColor: themeColors.background,
                    color: themeColors.foreground,
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left column - Contact information */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-lg mb-6" style={{ color: themeColors["muted-foreground"] }}>
                                Have questions about our theme creator? Fill out the form and our team will get back to you shortly.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="p-2 rounded-md mt-1"
                                        style={{
                                            backgroundColor: `${themeColors.primary}15`,
                                            color: themeColors.primary,
                                        }}
                                    >
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Email Us</h3>
                                        <p style={{ color: themeColors["muted-foreground"] }}>contact@themestudio.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div
                                        className="p-2 rounded-md mt-1"
                                        style={{
                                            backgroundColor: `${themeColors.primary}15`,
                                            color: themeColors.primary,
                                        }}
                                    >
                                        <PhoneCall size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Call Us</h3>
                                        <p style={{ color: themeColors["muted-foreground"] }}>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div
                                        className="p-2 rounded-md mt-1"
                                        style={{
                                            backgroundColor: `${themeColors.primary}15`,
                                            color: themeColors.primary,
                                        }}
                                    >
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Visit Us</h3>
                                        <p style={{ color: themeColors["muted-foreground"] }}>
                                            123 Design Street, San Francisco, CA 94107
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column - Contact form */}
                        <div
                            className="rounded-xl p-6"
                            style={{
                                backgroundColor: themeColors.card,
                                border: `1px solid ${themeColors.border}`,
                            }}
                        >
                            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="w-full px-4 py-2 rounded-lg transition-all focus:outline-none"
                                            style={{
                                                backgroundColor: themeColors.input,
                                                color: themeColors.foreground,
                                                border: `1px solid ${themeColors.border}`,
                                                boxShadow: `0 0 0 0 ${themeColors.ring}`,
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.boxShadow = `0 0 0 2px ${themeColors.ring}`;
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.boxShadow = `0 0 0 0 ${themeColors.ring}`;
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full px-4 py-2 rounded-lg transition-all focus:outline-none"
                                            style={{
                                                backgroundColor: themeColors.input,
                                                color: themeColors.foreground,
                                                border: `1px solid ${themeColors.border}`,
                                                boxShadow: `0 0 0 0 ${themeColors.ring}`,
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.boxShadow = `0 0 0 2px ${themeColors.ring}`;
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.boxShadow = `0 0 0 0 ${themeColors.ring}`;
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        className="w-full px-4 py-2 rounded-lg transition-all focus:outline-none"
                                        style={{
                                            backgroundColor: themeColors.input,
                                            color: themeColors.foreground,
                                            border: `1px solid ${themeColors.border}`,
                                            boxShadow: `0 0 0 0 ${themeColors.ring}`,
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.boxShadow = `0 0 0 2px ${themeColors.ring}`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.boxShadow = `0 0 0 0 ${themeColors.ring}`;
                                        }}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="How can we help you?"
                                        className="w-full px-4 py-2 rounded-lg transition-all focus:outline-none"
                                        style={{
                                            backgroundColor: themeColors.input,
                                            color: themeColors.foreground,
                                            border: `1px solid ${themeColors.border}`,
                                            boxShadow: `0 0 0 0 ${themeColors.ring}`,
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.boxShadow = `0 0 0 2px ${themeColors.ring}`;
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.boxShadow = `0 0 0 0 ${themeColors.ring}`;
                                        }}
                                    ></textarea>
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <button
                                        className="px-6 py-2.5 rounded-lg font-medium flex-1 transition-colors"
                                        style={{
                                            backgroundColor: themeColors.primary,
                                            color: themeColors["primary-foreground"],
                                        }}
                                    >
                                        Submit Message
                                    </button>
                                    <button
                                        className="px-6 py-2.5 rounded-lg font-medium transition-colors"
                                        style={{
                                            backgroundColor: themeColors.destructive,
                                            color: themeColors["destructive-foreground"],
                                        }}
                                    >
                                        Clear Form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section
                id="cta"
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundColor: themeColors.accent,
                    color: themeColors["accent-foreground"],
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your perfect theme?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of designers and developers who are creating beautiful themes with ThemeStudio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-6 py-3 rounded-lg font-medium transition-colors"
                            style={{
                                backgroundColor: themeColors.primary,
                                color: themeColors["primary-foreground"],
                            }}
                        >
                            Get Started for Free
                        </button>

                        <button
                            className="px-6 py-3 rounded-lg font-medium transition-colors"
                            style={{
                                backgroundColor: `${themeColors["accent-foreground"]}20`,
                                color: themeColors["accent-foreground"],
                            }}
                        >
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                id="footer"
                className="py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundColor: themeColors.secondary,
                    color: themeColors["secondary-foreground"],
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Testimonials</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>Documentation</li>
                                <li>Tutorials</li>
                                <li>Blog</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>About</li>
                                <li>Careers</li>
                                <li>Contact</li>
                                <li>Legal</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Connect</h3>
                            <ul className="space-y-2">
                                <li>Twitter</li>
                                <li>GitHub</li>
                                <li>Discord</li>
                                <li>Newsletter</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
                        style={{ borderColor: `${themeColors["secondary-foreground"]}20` }}
                    >
                        <div className="flex items-center gap-2">
                            <Palette size={20} />
                            <span className="font-semibold">ThemeStudio</span>
                        </div>
                        <p className="text-sm">© 2025 ThemeStudio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    )
}

// Helper components
const NavLink = ({
    icon,
    label,
    active = false,
    themeColors,
}: { icon: React.ReactNode; label: string; active?: boolean; themeColors: themeColors }) => {
    return (
        <a
            href={`#${label.toLowerCase()}`}
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{
                color: active ? themeColors.primary : themeColors["muted-foreground"],
                opacity: active ? 1 : 0.8,
            }}
        >
            {icon}
            {label}
        </a>
    )
}

const FeatureCard = ({
    icon,
    title,
    description,
    themeColors,
}: {
    icon: React.ReactNode
    title: string
    description: string
    themeColors: themeColors
}) => {
    return (
        <div
            className="p-6 rounded-xl"
            style={{
                backgroundColor: `${themeColors.background}80`,
                border: `1px solid ${themeColors.border}`,
            }}
        >
            <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                    backgroundColor: `${themeColors.primary}15`,
                    color: themeColors.primary,
                }}
            >
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p style={{ color: themeColors["muted-foreground"] }}>{description}</p>
        </div>
    )
}

const TestimonialCard = ({
    testimonial,
    themeColors,
}: {
    testimonial: { name: string; role: string; content: string; avatar: string }
    themeColors: themeColors
}) => {
    return (
        <div
            className="p-6 rounded-xl flex flex-col justify-between items-stretch"
            style={{
                backgroundColor: `${themeColors.card}80`,
                border: `1px solid ${themeColors.border}`,
            }}
        >
            <div className="mb-4">
                <p className="italic" style={{ color: themeColors["muted-foreground"] }}>
                    &quot;{testimonial.content}&quot;
                </p>
            </div>
            <div className="flex items-center gap-3">
                <img src={"/user_img.jpg"} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm" style={{ color: themeColors["muted-foreground"] }}>
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    )
}

const PricingCard = ({
    plan,
    themeColors,
    featured = false,
}: {
    plan: { name: string; price: string; description: string; features: string[] }
    themeColors: themeColors
    featured?: boolean
}) => {
    return (
        <div
            className={`p-6 rounded-xl relative ${featured ? "transform -translate-y-4" : ""}`}
            style={{
                backgroundColor: featured ? themeColors.primary : `${themeColors.background}80`,
                color: featured ? themeColors["primary-foreground"] : themeColors["card-foreground"],
                border: `1px solid ${featured ? themeColors.primary : themeColors.border}`,
            }}
        >
            {featured && (
                <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{
                        backgroundColor: `${themeColors.background}90`,
                        color: themeColors.primary,
                    }}
                >
                    Most Popular
                </div>
            )}

            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm">/month</span>
            </div>
            <p
                className="mb-6"
                style={{
                    color: featured ? `${themeColors["primary-foreground"]}90` : themeColors["muted-foreground"],
                }}
            >
                {plan.description}
            </p>

            <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Check size={16} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                className="w-full py-2.5 rounded-lg font-medium transition-colors"
                style={{
                    backgroundColor: featured ? themeColors.background : themeColors.primary,
                    color: featured ? themeColors.primary : themeColors["primary-foreground"],
                }}
            >
                Get Started
            </button>
        </div>
    )
}

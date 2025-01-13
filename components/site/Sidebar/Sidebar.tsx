'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FiBox, FiChevronRight, FiHome, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { IoLogoWebComponent } from 'react-icons/io5';
import { FaInstalod } from 'react-icons/fa';
import { components } from '@/docs/components';

type ComponentCategories = keyof typeof components;

interface SidebarProps {
    currentCategory: ComponentCategories;
    currentComponent: string;
}

export default function Sidebar({
    currentCategory,
    currentComponent,
}: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const navigation = [
        {
            name: "Home",
            link: "/",
            icon: FiHome
        },
        {
            name: "Components",
            link: "/components",
            icon: IoLogoWebComponent
        },
        {
            name: "Installation",
            link: `/components/${currentCategory}/installation-guide`,
            icon: FaInstalod
        },
    ]

    return (
        <>
            {/* Hamburger icon */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background text-foreground rounded-md"
                onClick={toggleSidebar}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="font-sans fixed top-0 left-0 w-64 bg-background text-foreground p-6 shadow-lg z-40  h-screen overflow-y-auto no-scrollbar"
                    >
                        <h2 className="text-xl font-bold mb-4 capitalize font-sans mt-10">
                            Pages
                        </h2>
                        <ul>
                            {navigation.map((page, i) => (
                                <li className='mb-2' key={i}>
                                    <Link href={page.link}>
                                        <span className='flex items-center p-2 rounded-md text-foreground hover:bg-foreground hover:text-background'>
                                            <page.icon className="mr-2" />
                                            {page.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-xl font-bold my-4 capitalize font-sans">
                            {currentCategory}
                        </h2>
                        <nav>
                            <ul>
                                {components[currentCategory]?.map((component) => (
                                    <li key={component.id} className="mb-2">
                                        <Link href={`/components/${currentCategory.toLowerCase()}/${component.id.toLowerCase()}`}>
                                            <span
                                                className={`flex items-center p-2 rounded-md ${currentComponent === component.id.toLowerCase()
                                                    ? 'bg-foreground text-background'
                                                    : 'text-foreground hover:bg-foreground hover:text-background'
                                                    }`}
                                            >
                                                <FiBox className="mr-2" />
                                                {component.name}
                                                {currentComponent === component.id.toLowerCase() && (
                                                    <FiChevronRight className="ml-auto" />
                                                )}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="font-sans w-64 bg-background text-foreground p-6 hidden lg:block mt-10 sticky top-14 h-[90vh] overflow-y-auto no-scrollbar">
                <h2 className="text-xl font-bold mb-4 capitalize font-sans">
                    Pages
                </h2>
                <ul>
                    {navigation.map((page, i) => (
                        <li className='mb-2' key={i}>
                            <Link href={page.link}>
                                <span className='flex items-center p-2 rounded-md text-foreground hover:bg-foreground hover:text-background'>
                                    <page.icon className="mr-2" />
                                    {page.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <h2 className="text-xl font-bold my-4 capitalize font-sans">
                    {currentCategory}
                </h2>
                <nav>
                    <ul>
                        {components[currentCategory]?.map((component) => (
                            <li key={component.id} className="mb-2">
                                <Link href={`/components/${currentCategory.toLowerCase()}/${component.id.toLowerCase()}`}>
                                    <span
                                        className={`flex items-center p-2 rounded-md ${currentComponent === component.id.toLowerCase()
                                            ? 'bg-foreground text-background'
                                            : 'text-foreground hover:bg-foreground hover:text-background'
                                            }`}
                                    >
                                        <FiBox className="mr-2" />
                                        {component.name}
                                        {currentComponent === component.id.toLowerCase() && (
                                            <FiChevronRight className="ml-auto" />
                                        )}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
}

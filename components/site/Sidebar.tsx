'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiChevronRight, FiHome, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstalod } from 'react-icons/fa';
import { components } from '@/docs/components';

interface SidebarProps {
    currentComponent?: string;
}

export default function Sidebar({ currentComponent }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const navigation = [
        {
            name: 'Home',
            link: '/',
            icon: FiHome,
        },
        {
            name: 'Installation',
            link: `/components/installation-guide`,
            icon: FaInstalod,
        },
    ];

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
                        className="font-sans fixed top-0 left-0 w-64 bg-background text-foreground p-6 shadow-lg z-40 h-screen overflow-y-auto no-scrollbar"
                    >
                        <h2 className="text-lg font-semibold mb-4 capitalize font-sans mt-10">Pages</h2>
                        <NavigationList navigation={navigation} />
                        <ComponentHeading components={components} />
                        <ComponentsList components={components} currentComponent={currentComponent} />
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="font-sans w-64 bg-background text-foreground p-6 hidden lg:block mt-10 sticky top-14 h-[90vh] overflow-y-auto no-scrollbar">
                <h2 className="text-lg font-semibold mb-4 capitalize font-sans">Pages</h2>
                <NavigationList navigation={navigation} />
                <ComponentHeading components={components} />
                <ComponentsList components={components} currentComponent={currentComponent} />
            </aside>
        </>
    );
}

interface NavigationListProps {
    navigation: { name: string; link: string; icon: React.ElementType }[];
}

const NavigationList = ({ navigation }: NavigationListProps) => (
    <ul>
        {navigation.map((page, i) => (
            <li className="mb-2" key={i}>
                <Link href={page.link}>
                    <span className="flex items-center p-2 rounded-md text-foreground hover:bg-foreground hover:text-background">
                        <page.icon className="mr-2" />
                        {page.name}
                    </span>
                </Link>
            </li>
        ))}
    </ul>
);

interface ComponentsListProps {
    components: ComponentType[];
    currentComponent?: string;
}

const ComponentsList = ({ components, currentComponent }: ComponentsListProps) => (
    <ul>
        {components.sort((a, b) => a.name.localeCompare(b.name)).map((component) => (
            <li key={component.id} className="mb-2">
                <Link href={`/components/${component.id.toLowerCase()}`} className='relative'>
                    <span
                        className={`flex items-center p-2 rounded-md ${currentComponent === component.id.toLowerCase()
                            ? 'bg-foreground text-background'
                            : 'text-foreground hover:bg-foreground hover:text-background'
                            }`}
                    >
                        {component.name}
                        {component.new && <p className='w-fit bg-background text-[10px] text-foreground ml-2 border border-foreground/80 backdrop-blur-md shadow-md px-2 rounded-full'>New</p>}
                        {currentComponent === component.id.toLowerCase() && (
                            <FiChevronRight className="ml-auto" />
                        )}
                    </span>
                </Link>
            </li>
        ))}
    </ul>
);


const ComponentHeading = ({ components }: { components: ComponentType[] }) => {
    return (
        <h2 className="text-lg font-semibold my-2 capitalize font-sans">
            Components
            <span className='text-sm ml-2 text-foreground border border-border backdrop-blur-md shadow-md px-2 rounded-full'>
                {components.length}
            </span>
        </h2>
    );
}

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiChevronRight, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollSpy } from '@/components/site/ScrollSpy';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import ThemeNav from './ThemeNav';

interface SidebarItem {
  id?: string;
  name: string;
  href?: string;
  icon?: React.ElementType;
  new?: boolean;
}

interface UniversalSidebarProps {
  heading?: string;
  items: SidebarItem[];
  navigation?: SidebarItem[];
  scrollSpy?: boolean;
  className?: string;
}

export default function UniversalSidebar({
  heading = 'Items',
  items,
//   navigation = [],
  scrollSpy = false,
  className,
}: UniversalSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const { sidebarNav: navigation } = siteConfig;

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClick = (item: SidebarItem) => {
    if (!scrollSpy && item.href) {
      setActiveLink(item.href);
    }
  };

  useEffect(() => {
    if (!scrollSpy) {
      setActiveLink(window.location.pathname);
    }
  }, [scrollSpy]);

  const renderNavItem = (item: SidebarItem) => {
    const isActive = activeLink === item.href;

    return (
      <li key={item.href} className="mb-2 list-none">
        <Link href={item.href ?? '#'} onClick={() => handleClick(item)}>
          <span
            className={cn(
              'flex items-center p-2 rounded-md',
              isActive
                ? 'bg-foreground text-background'
                : 'text-foreground hover:bg-foreground hover:text-background'
            )}
          >
            {item.icon && <item.icon className="mr-2" size={18} />}
            {item.name}
            {item.new && (
              <span className="ml-2 text-[10px] px-2 py-0.5 border border-foreground/70 rounded-full backdrop-blur-sm shadow-sm bg-background">
                New
              </span>
            )}
            {isActive && <FiChevronRight className="ml-auto" />}
          </span>
        </Link>
      </li>
    );
  };

  const renderItem = (item: SidebarItem) => {
    if (scrollSpy && item.id) {
      return (
        <ScrollSpy
          key={item.id}
          id={item.id}
          className={cn(
            'w-full text-left px-4 py-2 rounded-md transition-colors bg-background line-clamp-1',
            'hover:bg-gray-100 dark:hover:bg-gray-800'
          )}
        >
          {item.name}
        </ScrollSpy>
      );
    }

    return renderNavItem(item);
  };

  return (
    <>
      {/* Hamburger icon for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background text-foreground rounded-md shadow-md"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="font-sans fixed top-0 left-0 w-64 bg-background text-foreground p-6 shadow-lg z-40 h-screen overflow-y-auto no-scrollbar"
          >
            {navigation.length > 0 && (
              <>
                <div className='flex items-center justify-between mb-4'>
                <h2 className="text-lg font-semibold capitalize font-sans">Navigation</h2>
                <ThemeNav />
                </div>
                <ul>{navigation.map(renderNavItem)}</ul>
              </>
            )}
            <SidebarHeading title={heading} total={items.length} />
            <nav className="space-y-2 mt-4">{items.map(renderItem)}</nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'w-64 sticky top-0 max-lg:hidden h-screen overflow-y-auto border-r border-border no-scrollbar p-4',
          className
        )}
      >
        {navigation.length > 0 && (
          <>
            <div className='flex items-center justify-between mb-4'>
            <h2 className="text-lg font-semibold capitalize font-sans">Navigation</h2>
            <ThemeNav />
            </div>
            <ul>{navigation.map(renderNavItem)}</ul>
          </>
        )}
        <SidebarHeading title={heading} total={items.length} />
        <nav className="space-y-2 mt-4">{items.sort((a,b) => a.name.localeCompare(b.name)).map(renderItem)}</nav>
      </aside>
    </>
  );
}

export const SidebarHeading = ({ title, total }: { title: string; total: number }) => {
  return (
    <h2 className="text-lg font-semibold capitalize font-sans flex justify-between items-center">
      {title}
      <span className="text-sm ml-2 text-foreground border border-border backdrop-blur-md shadow-md px-2 rounded-full">
        {total}
      </span>
    </h2>
  );
};

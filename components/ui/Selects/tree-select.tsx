'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

interface TreeOption {
  value: string;
  label: string;
  children?: TreeOption[];
}

interface TreeSelectProps {
  options: TreeOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TreeSelect: React.FC<TreeSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const toggleNode = (nodeValue: string) => {
    setExpandedNodes((prev) =>
      prev.includes(nodeValue)
        ? prev.filter((v) => v !== nodeValue)
        : [...prev, nodeValue]
    );
  };

  const renderTreeNodes = (nodes: TreeOption[], level = 0) => {
    return nodes.map((node) => (
      <React.Fragment key={node.value}>
        <li
          className={`px-4 py-2 bg-background hover:bg-foreground hover:text-background text-foreground cursor-pointer ${
            level > 0 ? 'ml-4' : ''
          }`}
          onClick={() => {
            if (node.children) {
              toggleNode(node.value);
            } else {
              onChange(node.value);
              setIsOpen(false);
            }
          }}
        >
          <div className="flex items-center">
            {node.children && (
              <span className="mr-2">
                {expandedNodes.includes(node.value) ? (
                  <FiChevronDown className="w-4 h-4" />
                ) : (
                  <FiChevronRight className="w-4 h-4" />
                )}
              </span>
            )}
            {node.label}
          </div>
        </li>
        {node.children && expandedNodes.includes(node.value) && (
          <li>{renderTreeNodes(node.children, level + 1)}</li>
        )}
      </React.Fragment>
    ));
  };

  const findSelectedLabel = (nodes: TreeOption[]): string | undefined => {
    for (const node of nodes) {
      if (node.value === value) {
        return node.label;
      }
      if (node.children) {
        const childLabel = findSelectedLabel(node.children);
        if (childLabel) {
          return childLabel;
        }
      }
    }
    return undefined;
  };

  const selectedLabel = findSelectedLabel(options);

  return (
    <div className="relative w-64 text-foreground">
      <button
        type="button"
        className="w-full px-4 py-2 text-left bg-background border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLabel || placeholder}
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-background border border-zinc-300 rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {renderTreeNodes(options)}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TreeSelect;

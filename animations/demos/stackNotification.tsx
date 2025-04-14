'use client';

import { motion } from 'framer-motion';
import { stackNotification } from '../presets/stackNotification';
import { useState } from 'react';
import { FiBell, FiCheck, FiX } from 'react-icons/fi';

// Sample notification data
const notifications = [
  {
    id: 1,
    title: 'New Message',
    message: 'You have a new message from John',
    time: '2 min ago',
    type: 'info'
  },
  {
    id: 2,
    title: 'Task Completed',
    message: 'Your task "Update documentation" has been completed',
    time: '1 hour ago',
    type: 'success'
  },
  {
    id: 3,
    title: 'Meeting Reminder',
    message: 'Team meeting in 30 minutes',
    time: '30 min ago',
    type: 'warning'
  },
  {
    id: 4,
    title: 'Error Detected',
    message: 'There was an error processing your request',
    time: '2 hours ago',
    type: 'error'
  },
  {
    id: 5,
    title: 'System Update',
    message: 'System maintenance scheduled for tonight',
    time: '5 hours ago',
    type: 'info'
  }
];

// Notification card component
const NotificationCard = ({ notification, index }: { notification: typeof notifications[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <FiCheck className="text-green-500" />;
      case 'error':
        return <FiX className="text-red-500" />;
      case 'warning':
        return <FiBell className="text-yellow-500" />;
      default:
        return <FiBell className="text-blue-500" />;
    }
  };
  
  const getBgColor = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20';
    }
  };
  
  return (
    <motion.div
      custom={index}
      variants={stackNotification(0.08, 8, 0.98)}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`p-4 rounded-lg shadow-sm ${getBgColor()} mb-3 flex items-start`}
    >
      <div className="mr-3 mt-1">
        {getIcon()}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{notification.title}</h3>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FiX size={16} />
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{notification.message}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{notification.time}</p>
      </div>
    </motion.div>
  );
};

export default function StackNotificationDemo() {
  const [showNotifications, setShowNotifications] = useState(true);
  
  return (
    <div className="w-full max-w-md mx-auto my-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Notifications</h3>
        <button 
          onClick={() => setShowNotifications(!showNotifications)}
          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {showNotifications ? 'Hide' : 'Show'} All
        </button>
      </div>
      
      <motion.div layout>
        {showNotifications && notifications.map((notification, index) => (
          <NotificationCard 
            key={notification.id} 
            notification={notification} 
            index={index} 
          />
        ))}
      </motion.div>
    </div>
  );
} 

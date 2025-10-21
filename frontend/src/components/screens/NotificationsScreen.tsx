import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Bell, Check, X, Briefcase, Users, Star, Settings } from 'lucide-react';

interface NotificationsScreenProps {
  onNavigate: (screen: string) => void;
}

interface Notification {
  id: string;
  type: 'job_match' | 'application_update' | 'new_job' | 'profile_view' | 'system';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionText?: string;
  actionUrl?: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'job_match',
    title: 'New Job Match!',
    message: 'Frontend Developer at TechCorp matches your profile perfectly',
    timestamp: '2 min ago',
    isRead: false,
    actionText: 'View Job'
  },
  {
    id: '2',
    type: 'application_update',
    title: 'Application Update',
    message: 'Your application for Product Manager at StartupXYZ is under review',
    timestamp: '1 hour ago',
    isRead: false,
    actionText: 'View Status'
  },
  {
    id: '3',
    type: 'profile_view',
    title: 'Profile Viewed',
    message: '3 recruiters viewed your profile today',
    timestamp: '3 hours ago',
    isRead: true
  },
  {
    id: '4',
    type: 'new_job',
    title: 'New Jobs Posted',
    message: '5 new UX Designer positions matching your criteria',
    timestamp: '6 hours ago',
    isRead: true,
    actionText: 'Browse Jobs'
  },
  {
    id: '5',
    type: 'system',
    title: 'Profile Optimization',
    message: 'Complete your profile to increase your chances by 40%',
    timestamp: '1 day ago',
    isRead: true,
    actionText: 'Complete Profile'
  }
];

export default function NotificationsScreen({ onNavigate }: NotificationsScreenProps) {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'job_match':
        return <Star className="w-5 h-5 text-[#4CAF50]" />;
      case 'application_update':
        return <Briefcase className="w-5 h-5 text-[#0078D7]" />;
      case 'new_job':
        return <Bell className="w-5 h-5 text-[#FF9500]" />;
      case 'profile_view':
        return <Users className="w-5 h-5 text-[#9C27B0]" />;
      case 'system':
        return <Settings className="w-5 h-5 text-gray-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.isRead)
    : notifications;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl">Notifications</h1>
          {unreadCount > 0 && (
            <Badge className="bg-[#FF3B30] text-white rounded-full">
              {unreadCount}
            </Badge>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                filter === 'all'
                  ? 'bg-white text-[#0078D7] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All ({notifications.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                filter === 'unread'
                  ? 'bg-white text-[#0078D7] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Unread ({unreadCount})
            </button>
          </div>

          {unreadCount > 0 && (
            <Button
              onClick={markAllAsRead}
              className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Mark all read
            </Button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-4 space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg mb-2">
              {filter === 'unread' ? 'No unread notifications' : 'No notifications'}
            </h3>
            <p className="text-gray-600">
              {filter === 'unread' 
                ? 'All caught up! Check back later for updates.'
                : 'We\'ll notify you when something important happens.'
              }
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-4 bg-white rounded-xl border transition-all hover:shadow-md ${
                !notification.isRead 
                  ? 'border-l-4 border-l-[#0078D7] bg-blue-50/30' 
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={`text-sm mb-1 ${
                        !notification.isRead ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500">
                        {notification.timestamp}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-3">
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-1 text-gray-400 hover:text-[#0078D7] rounded"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 text-gray-400 hover:text-red-500 rounded"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {notification.actionText && (
                    <Button
                      onClick={() => {
                        markAsRead(notification.id);
                        // Handle navigation based on notification type
                        if (notification.type === 'job_match' || notification.type === 'new_job') {
                          onNavigate('home');
                        } else if (notification.type === 'profile_view' || notification.type === 'system') {
                          onNavigate('profile');
                        }
                      }}
                      className="mt-3 text-sm px-4 py-2 bg-[#0078D7] text-white rounded-lg hover:bg-[#0078D7]/90"
                    >
                      {notification.actionText}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Send, MessageCircle, Bell, Users, Calendar, Pin, Search } from 'lucide-react';

export const Communications: React.FC = () => {
  const [message, setMessage] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('general');

  const channels = [
    { id: 'general', name: 'General Announcements', members: 248, icon: Bell },
    { id: 'maintenance', name: 'Maintenance Updates', members: 45, icon: MessageCircle },
    { id: 'events', name: 'Events & Activities', members: 189, icon: Calendar },
    { id: 'feedback', name: 'Student Feedback', members: 67, icon: Users },
  ];

  const announcements = [
    {
      id: 1,
      title: 'WiFi Maintenance Scheduled',
      content: 'The WiFi network will be under maintenance tomorrow from 2:00 AM to 4:00 AM. We apologize for any inconvenience.',
      author: 'IT Support',
      timestamp: '2024-01-15T10:30:00Z',
      channel: 'maintenance',
      pinned: true,
      reactions: 12,
      comments: 3
    },
    {
      id: 2,
      title: 'New Laundry Schedule',
      content: 'Starting next week, the laundry facilities will be available 24/7. Please follow the new booking system.',
      author: 'Hostel Management',
      timestamp: '2024-01-14T16:45:00Z',
      channel: 'general',
      pinned: false,
      reactions: 28,
      comments: 8
    },
    {
      id: 3,
      title: 'Movie Night This Friday',
      content: 'Join us for movie night this Friday at 7 PM in the common room. Popcorn and drinks will be provided!',
      author: 'Student Council',
      timestamp: '2024-01-13T14:20:00Z',
      channel: 'events',
      pinned: false,
      reactions: 45,
      comments: 15
    },
    {
      id: 4,
      title: 'Room Inspection Notice',
      content: 'Monthly room inspections will be conducted next week. Please ensure your rooms are tidy and accessible.',
      author: 'Hostel Warden',
      timestamp: '2024-01-12T09:15:00Z',
      channel: 'general',
      pinned: true,
      reactions: 8,
      comments: 2
    }
  ];

  const filteredAnnouncements = announcements.filter(announcement => 
    selectedChannel === 'all' || announcement.channel === selectedChannel
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Communications</h1>
          <p className="text-gray-600 mt-1">Stay connected with your hostel community</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 font-medium flex items-center space-x-2">
          <Send className="w-5 h-5" />
          <span>New Announcement</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Channels Sidebar */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Channels</h2>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedChannel('all')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                selectedChannel === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">All Channels</span>
                <span className="text-sm opacity-75">248</span>
              </div>
            </button>
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedChannel === channel.id
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{channel.name}</span>
                        <span className="text-sm opacity-75">{channel.members}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filter */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search announcements..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Filter
              </button>
            </div>
          </div>

          {/* Compose Message */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Message</h3>
            <div className="space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Announcements</option>
                    <option>Maintenance Updates</option>
                    <option>Events & Activities</option>
                    <option>Student Feedback</option>
                  </select>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-gray-700">Pin this message</span>
                  </label>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 font-medium flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>

          {/* Announcements List */}
          <div className="space-y-4">
            {filteredAnnouncements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {announcement.pinned && (
                        <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                          <Pin className="w-3 h-3" />
                          <span className="text-xs font-medium">Pinned</span>
                        </div>
                      )}
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {channels.find(c => c.id === announcement.channel)?.name || 'General'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{announcement.title}</h3>
                    <p className="text-gray-600 mb-4">{announcement.content}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>By {announcement.author}</span>
                      <span>{new Date(announcement.timestamp).toLocaleDateString()}</span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <span>👍</span>
                          <span>{announcement.reactions}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{announcement.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      Reply
                    </button>
                    <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
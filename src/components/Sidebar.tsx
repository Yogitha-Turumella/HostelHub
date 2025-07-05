import React from 'react';
import { 
  Home, 
  AlertCircle, 
  MessageSquare, 
  Users, 
  Wrench, 
  Building, 
  Settings,
  Bell
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'issues', label: 'Issue Tracker', icon: AlertCircle },
    { id: 'communications', label: 'Communications', icon: MessageSquare },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'rooms', label: 'Room Management', icon: Building },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
            <Building className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">HostelHub</h1>
            <p className="text-sm text-gray-500">Management System</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-blue-900">3 New Notifications</p>
              <p className="text-xs text-blue-600">Click to view all</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
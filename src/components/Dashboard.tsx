import React from 'react';
import { 
  Users, 
  AlertTriangle, 
  MessageCircle, 
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Students', value: '248', change: '+12%', icon: Users, color: 'from-blue-500 to-blue-600' },
    { title: 'Open Issues', value: '15', change: '-23%', icon: AlertTriangle, color: 'from-red-500 to-red-600' },
    { title: 'Messages Today', value: '127', change: '+8%', icon: MessageCircle, color: 'from-green-500 to-green-600' },
    { title: 'Satisfaction Rate', value: '94%', change: '+2%', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
  ];

  const recentIssues = [
    { id: 1, title: 'WiFi connectivity issues in Block A', status: 'Open', priority: 'High', time: '2 hours ago' },
    { id: 2, title: 'Broken washing machine - Floor 3', status: 'In Progress', priority: 'Medium', time: '4 hours ago' },
    { id: 3, title: 'Room 205 - AC not working', status: 'Resolved', priority: 'High', time: '1 day ago' },
    { id: 4, title: 'Noise complaint - Room 108', status: 'Open', priority: 'Low', time: '2 days ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-red-600 bg-red-100';
      case 'In Progress': return 'text-yellow-600 bg-yellow-100';
      case 'Resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening in your hostel today.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Issues</h2>
            <div className="space-y-4">
              {recentIssues.map((issue) => (
                <div key={issue.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{issue.title}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                        {issue.status}
                      </span>
                      <span className={`text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                        {issue.priority} Priority
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{issue.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {issue.status === 'Resolved' ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 font-medium">
                Send Announcement
              </button>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium">
                Report New Issue
              </button>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium">
                View All Students
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Health</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Server Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="text-sm font-medium text-gray-900">120ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
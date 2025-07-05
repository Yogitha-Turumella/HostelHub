import React, { useState } from 'react';
import { Plus, Filter, Search, AlertTriangle, Clock, CheckCircle, User } from 'lucide-react';

export const IssueTracker: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const issues = [
    {
      id: 1,
      title: 'WiFi connectivity issues in Block A',
      description: 'Students in Block A are experiencing frequent WiFi disconnections',
      status: 'Open',
      priority: 'High',
      category: 'Technology',
      reporter: 'John Doe',
      assignee: 'IT Support',
      created: '2024-01-15T10:30:00Z',
      updated: '2024-01-15T14:20:00Z'
    },
    {
      id: 2,
      title: 'Broken washing machine - Floor 3',
      description: 'The washing machine on the 3rd floor is not starting',
      status: 'In Progress',
      priority: 'Medium',
      category: 'Maintenance',
      reporter: 'Jane Smith',
      assignee: 'Maintenance Team',
      created: '2024-01-14T09:15:00Z',
      updated: '2024-01-15T11:45:00Z'
    },
    {
      id: 3,
      title: 'Room 205 - AC not working',
      description: 'Air conditioning unit in room 205 is not cooling properly',
      status: 'Resolved',
      priority: 'High',
      category: 'Maintenance',
      reporter: 'Mike Johnson',
      assignee: 'HVAC Technician',
      created: '2024-01-13T16:22:00Z',
      updated: '2024-01-14T13:30:00Z'
    },
    {
      id: 4,
      title: 'Noise complaint - Room 108',
      description: 'Excessive noise from neighboring room during study hours',
      status: 'Open',
      priority: 'Low',
      category: 'Disciplinary',
      reporter: 'Sarah Wilson',
      assignee: 'Hostel Warden',
      created: '2024-01-12T20:45:00Z',
      updated: '2024-01-13T08:15:00Z'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-red-600 bg-red-100 border-red-200';
      case 'In Progress': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'Resolved': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'text-blue-600 bg-blue-50';
      case 'Maintenance': return 'text-purple-600 bg-purple-50';
      case 'Disciplinary': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <AlertTriangle className="w-4 h-4" />;
      case 'In Progress': return <Clock className="w-4 h-4" />;
      case 'Resolved': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesFilter = selectedFilter === 'all' || issue.status.toLowerCase() === selectedFilter;
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Issue Tracker</h1>
          <p className="text-gray-600 mt-1">Track and manage all hostel issues efficiently</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 font-medium flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Report New Issue</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by status:</span>
            </div>
            <div className="flex space-x-2">
              {['all', 'open', 'in progress', 'resolved'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-4">
        {filteredIssues.map((issue) => (
          <div key={issue.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(issue.status)}`}>
                    {getStatusIcon(issue.status)}
                    <span className="text-sm font-medium">{issue.status}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(issue.priority)}`}>
                    {issue.priority} Priority
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(issue.category)}`}>
                    {issue.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
                <p className="text-gray-600 mb-4">{issue.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Reporter: {issue.reporter}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Assigned to: {issue.assignee}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Created: {new Date(issue.created).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                  Update Status
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-lg text-center">
          <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No issues found</h3>
          <p className="text-gray-600">No issues match your current filters. Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};
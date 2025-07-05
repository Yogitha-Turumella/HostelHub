import React, { useState } from 'react';
import { Plus, Wrench, Clock, CheckCircle, AlertTriangle, User, Calendar, Filter, Search } from 'lucide-react';

export const MaintenanceRequests: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const requests = [
    {
      id: 1,
      title: 'Broken washing machine - Floor 3',
      description: 'The washing machine on the 3rd floor is not starting and makes unusual noises',
      location: 'Block A, Floor 3, Laundry Room',
      priority: 'High',
      status: 'In Progress',
      category: 'Appliances',
      reporter: 'Jane Smith',
      assignee: 'Maintenance Team',
      created: '2024-01-14T09:15:00Z',
      updated: '2024-01-15T11:45:00Z',
      estimatedCompletion: '2024-01-16T14:00:00Z'
    },
    {
      id: 2,
      title: 'Room 205 - AC not working',
      description: 'Air conditioning unit in room 205 is not cooling properly, possibly needs servicing',
      location: 'Block B, Room 205',
      priority: 'High',
      status: 'Completed',
      category: 'HVAC',
      reporter: 'Mike Johnson',
      assignee: 'HVAC Technician',
      created: '2024-01-13T16:22:00Z',
      updated: '2024-01-14T13:30:00Z',
      estimatedCompletion: '2024-01-14T16:00:00Z'
    },
    {
      id: 3,
      title: 'Leaky faucet in common bathroom',
      description: 'Water is continuously dripping from the faucet in the 2nd floor common bathroom',
      location: 'Block C, Floor 2, Common Bathroom',
      priority: 'Medium',
      status: 'Open',
      category: 'Plumbing',
      reporter: 'Sarah Wilson',
      assignee: 'Unassigned',
      created: '2024-01-12T20:45:00Z',
      updated: '2024-01-13T08:15:00Z',
      estimatedCompletion: '2024-01-17T10:00:00Z'
    },
    {
      id: 4,
      title: 'Flickering lights in corridor',
      description: 'The lights in the main corridor keep flickering and sometimes turn off completely',
      location: 'Block D, Main Corridor',
      priority: 'Medium',
      status: 'In Progress',
      category: 'Electrical',
      reporter: 'Alex Chen',
      assignee: 'Electrician',
      created: '2024-01-11T14:30:00Z',
      updated: '2024-01-15T09:20:00Z',
      estimatedCompletion: '2024-01-16T17:00:00Z'
    },
    {
      id: 5,
      title: 'Broken window lock - Room 156',
      description: 'The window lock in room 156 is broken and the window cannot be secured',
      location: 'Block A, Room 156',
      priority: 'Low',
      status: 'Open',
      category: 'Security',
      reporter: 'Emily Davis',
      assignee: 'Unassigned',
      created: '2024-01-10T11:15:00Z',
      updated: '2024-01-12T16:45:00Z',
      estimatedCompletion: '2024-01-18T14:00:00Z'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-red-600 bg-red-100 border-red-200';
      case 'In Progress': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'Completed': return 'text-green-600 bg-green-100 border-green-200';
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
      case 'Plumbing': return 'text-blue-600 bg-blue-50';
      case 'Electrical': return 'text-yellow-600 bg-yellow-50';
      case 'HVAC': return 'text-purple-600 bg-purple-50';
      case 'Appliances': return 'text-green-600 bg-green-50';
      case 'Security': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <AlertTriangle className="w-4 h-4" />;
      case 'In Progress': return <Clock className="w-4 h-4" />;
      case 'Completed': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const filteredRequests = requests.filter(request => {
    const matchesFilter = selectedFilter === 'all' || request.status.toLowerCase().replace(' ', '') === selectedFilter;
    const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Maintenance Requests</h1>
          <p className="text-gray-600 mt-1">Track and manage all maintenance requests efficiently</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 font-medium flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>New Request</span>
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Requests</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Open</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Completed</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by status:</span>
            </div>
            <div className="flex space-x-2">
              {['all', 'open', 'inprogress', 'completed'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter === 'inprogress' ? 'In Progress' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(request.status)}`}>
                    {getStatusIcon(request.status)}
                    <span className="text-sm font-medium">{request.status}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(request.priority)}`}>
                    {request.priority} Priority
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(request.category)}`}>
                    {request.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{request.title}</h3>
                <p className="text-gray-600 mb-3">{request.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Reporter: {request.reporter}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Assigned to: {request.assignee}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Created: {new Date(request.created).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="font-medium">Location: {request.location}</span>
                  <span>ETA: {new Date(request.estimatedCompletion).toLocaleDateString()}</span>
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

      {filteredRequests.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-lg text-center">
          <Wrench className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No requests found</h3>
          <p className="text-gray-600">No maintenance requests match your current filters. Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};
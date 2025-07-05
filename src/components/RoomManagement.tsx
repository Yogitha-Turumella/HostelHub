import React, { useState } from 'react';
import { Building, Users, Bed, Wifi, Tv, Car, Search, Filter, Eye, Edit } from 'lucide-react';

export const RoomManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('all');

  const rooms = [
    {
      id: 1,
      number: 'A-101',
      block: 'A',
      floor: 1,
      capacity: 2,
      occupied: 2,
      type: 'Double',
      status: 'Occupied',
      amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Study Table'],
      rent: 1200,
      occupants: [
        { name: 'John Doe', phone: '+1 (555) 123-4567' },
        { name: 'Mike Johnson', phone: '+1 (555) 345-6789' }
      ]
    },
    {
      id: 2,
      number: 'A-102',
      block: 'A',
      floor: 1,
      capacity: 1,
      occupied: 1,
      type: 'Single',
      status: 'Occupied',
      amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Study Table', 'Balcony'],
      rent: 1800,
      occupants: [
        { name: 'Jane Smith', phone: '+1 (555) 234-5678' }
      ]
    },
    {
      id: 3,
      number: 'B-205',
      block: 'B',
      floor: 2,
      capacity: 2,
      occupied: 0,
      type: 'Double',
      status: 'Available',
      amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Study Table'],
      rent: 1200,
      occupants: []
    },
    {
      id: 4,
      number: 'B-206',
      block: 'B',
      floor: 2,
      capacity: 3,
      occupied: 2,
      type: 'Triple',
      status: 'Partially Occupied',
      amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Study Table', 'Refrigerator'],
      rent: 900,
      occupants: [
        { name: 'Sarah Wilson', phone: '+1 (555) 456-7890' },
        { name: 'Alex Chen', phone: '+1 (555) 567-8901' }
      ]
    },
    {
      id: 5,
      number: 'C-301',
      block: 'C',
      floor: 3,
      capacity: 1,
      occupied: 0,
      type: 'Single',
      status: 'Under Maintenance',
      amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Study Table'],
      rent: 1800,
      occupants: []
    },
    {
      id: 6,
      number: 'C-302',
      block: 'C',
      floor: 3,
      capacity: 2,
      occupied: 1,
      type: 'Double',
      status: 'Partially Occupied',
      amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Study Table', 'Balcony'],
      rent: 1350,
      occupants: [
        { name: 'Emily Davis', phone: '+1 (555) 678-9012' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Occupied': return 'text-red-600 bg-red-100 border-red-200';
      case 'Available': return 'text-green-600 bg-green-100 border-green-200';
      case 'Partially Occupied': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'Under Maintenance': return 'text-gray-600 bg-gray-100 border-gray-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Single': return 'text-blue-600 bg-blue-50';
      case 'Double': return 'text-purple-600 bg-purple-50';
      case 'Triple': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBlock = selectedBlock === 'all' || room.block === selectedBlock;
    return matchesSearch && matchesBlock;
  });

  const totalRooms = rooms.length;
  const occupiedRooms = rooms.filter(room => room.status === 'Occupied').length;
  const availableRooms = rooms.filter(room => room.status === 'Available').length;
  const occupancyRate = Math.round((occupiedRooms / totalRooms) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Room Management</h1>
          <p className="text-gray-600 mt-1">Manage room assignments and occupancy</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 font-medium flex items-center space-x-2">
          <Building className="w-5 h-5" />
          <span>Add New Room</span>
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Rooms</p>
              <p className="text-2xl font-bold text-gray-900">{totalRooms}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Occupied Rooms</p>
              <p className="text-2xl font-bold text-gray-900">{occupiedRooms}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Available Rooms</p>
              <p className="text-2xl font-bold text-gray-900">{availableRooms}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Bed className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Occupancy Rate</p>
              <p className="text-2xl font-bold text-gray-900">{occupancyRate}%</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
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
              <span className="text-sm font-medium text-gray-700">Filter by block:</span>
            </div>
            <div className="flex space-x-2">
              {['all', 'A', 'B', 'C', 'D'].map((block) => (
                <button
                  key={block}
                  onClick={() => setSelectedBlock(block)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedBlock === block
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {block === 'all' ? 'All Blocks' : `Block ${block}`}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <div key={room.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{room.number}</h3>
                  <p className="text-sm text-gray-600">Floor {room.floor}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(room.type)}`}>
                  {room.type}
                </div>
              </div>
            </div>

            <div className={`mb-4 px-3 py-2 rounded-lg border ${getStatusColor(room.status)}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{room.status}</span>
                <span className="text-sm">{room.occupied}/{room.capacity} occupied</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Monthly Rent:</span>
                <span className="font-semibold text-gray-900">${room.rent}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Capacity:</span>
                <span className="font-semibold text-gray-900">{room.capacity} beds</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Amenities:</p>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {room.occupants.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Current Occupants:</p>
                <div className="space-y-1">
                  {room.occupants.map((occupant, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{occupant.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredRooms.length === 0 && (
        <div className="bg-white rounded-xl p-12 shadow-lg text-center">
          <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No rooms found</h3>
          <p className="text-gray-600">No rooms match your current search criteria. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};
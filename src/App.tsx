import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { IssueTracker } from './components/IssueTracker';
import { Communications } from './components/Communications';
import { StudentManagement } from './components/StudentManagement';
import { MaintenanceRequests } from './components/MaintenanceRequests';
import { RoomManagement } from './components/RoomManagement';
import { Settings } from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'issues':
        return <IssueTracker />;
      case 'communications':
        return <Communications />;
      case 'students':
        return <StudentManagement />;
      case 'maintenance':
        return <MaintenanceRequests />;
      case 'rooms':
        return <RoomManagement />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import {
  Code2,
  Plus,
  Users,
  Clock,
  Search,
  Filter,
  MoreVertical,
  Play,
  Star,
  Globe,
  Lock,
  Calendar,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authentication';

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authContext.auth) {
      navigate('/auth')
    }
  }, [authContext])


  const rooms = [
    {
      id: 1,
      name: "React Dashboard Project",
      description: "Building a modern admin dashboard with React and TypeScript",
      language: "JavaScript",
      participants: [
        { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
        { name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" },
        { name: "Mike Johnson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" }
      ],
      lastActive: "2 hours ago",
      isPrivate: false,
      starred: true,
      createdAt: "2024-01-20"
    },
    {
      id: 2,
      name: "Python ML Algorithm",
      description: "Implementing machine learning algorithms from scratch",
      language: "Python",
      participants: [
        { name: "Sarah Wilson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" },
        { name: "David Brown", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" }
      ],
      lastActive: "1 day ago",
      isPrivate: true,
      starred: false,
      createdAt: "2024-01-18"
    },
    {
      id: 3,
      name: "Node.js API Server",
      description: "RESTful API with Express.js and MongoDB integration",
      language: "JavaScript",
      participants: [
        { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=32&h=32&fit=crop&crop=face" }
      ],
      lastActive: "3 hours ago",
      isPrivate: false,
      starred: true,
      createdAt: "2024-01-22"
    },
    {
      id: 4,
      name: "CSS Animations Lab",
      description: "Exploring advanced CSS animations and transitions",
      language: "CSS",
      participants: [
        { name: "Emma Davis", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&fit=crop&crop=face" },
        { name: "Ryan Taylor", avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face" },
        { name: "Lisa Wang", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face" },
        { name: "Tom Anderson", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face" }
      ],
      lastActive: "5 minutes ago",
      isPrivate: false,
      starred: false,
      createdAt: "2024-01-25"
    },
    {
      id: 5,
      name: "Go Microservices",
      description: "Building scalable microservices architecture with Go",
      language: "Go",
      participants: [
        { name: "Kevin Liu", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
        { name: "Maria Garcia", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" }
      ],
      lastActive: "1 hour ago",
      isPrivate: true,
      starred: false,
      createdAt: "2024-01-19"
    },
    {
      id: 6,
      name: "Flutter Mobile App",
      description: "Cross-platform mobile app development with Flutter",
      language: "Dart",
      participants: [
        { name: "Chris Wilson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" }
      ],
      lastActive: "30 minutes ago",
      isPrivate: false,
      starred: true,
      createdAt: "2024-01-21"
    }
  ];

  const languageColors = {
    JavaScript: 'bg-yellow-500',
    Python: 'bg-blue-500',
    CSS: 'bg-pink-500',
    Go: 'bg-cyan-500',
    Dart: 'bg-blue-400'
  };

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' ||
      (selectedFilter === 'starred' && room.starred) ||
      (selectedFilter === 'private' && room.isPrivate) ||
      (selectedFilter === 'public' && !room.isPrivate);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#0f0f23] text-slate-50">
      {/* Header */}
      <header className="bg-[#1a1a2e]/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform rotate-12">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real Code Nexus
              </h1>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <img
                  src={
                    authContext.auth?.user.photoURL!
                  }
                  alt="User"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-sm font-medium">
                  {
                    authContext.auth?.user.displayName
                  }
                </span>
              </div>
              <button onClick={async () => {
                const flag = await logout();
                if (flag) {
                  authContext.setAuth(null);
                }
              }} className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h2>
          <p className="text-slate-300 text-lg">Ready to collaborate on some amazing projects?</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search rooms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#1a1a2e] border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border border-slate-700/50 rounded-xl hover:bg-[#16213e] transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span className="capitalize">{selectedFilter}</span>
            </button>

            {filterOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#1a1a2e] border border-slate-700/50 rounded-xl shadow-xl z-10">
                {['all', 'starred', 'private', 'public'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => {
                      setSelectedFilter(filter);
                      setFilterOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-slate-700/50 transition-colors capitalize first:rounded-t-xl last:rounded-b-xl"
                  >
                    {filter} rooms
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Create Room Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25">
            <Plus className="w-5 h-5" />
            <span>Create Room</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1a1a2e]/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{rooms.length}</div>
                <div className="text-slate-400 text-sm">Total Rooms</div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a2e]/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-slate-400 text-sm">Collaborators</div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a2e]/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{rooms.filter(r => r.starred).length}</div>
                <div className="text-slate-400 text-sm">Starred</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Your Rooms</h3>
            <span className="text-slate-400">{filteredRooms.length} rooms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="group relative bg-[#1a1a2e]/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
              >
                {/* Room Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${languageColors[room.language] || 'bg-gray-500'}`}></div>
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-indigo-400 transition-colors">
                        {room.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <span>{room.language}</span>
                        {room.isPrivate ? <Lock className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                        {room.starred && <Star className="w-3 h-3 text-amber-400 fill-current" />}
                      </div>
                    </div>
                  </div>

                  <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-700/50 rounded transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Participants */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {room.participants.slice(0, 4).map((participant, index) => (
                      <img
                        key={index}
                        src={participant.avatar}
                        alt={participant.name}
                        className="w-6 h-6 rounded-full border-2 border-[#1a1a2e]"
                        title={participant.name}
                      />
                    ))}
                    {room.participants.length > 4 && (
                      <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-[#1a1a2e] flex items-center justify-center text-xs">
                        +{room.participants.length - 4}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">
                    {room.participants.length} member{room.participants.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{room.lastActive}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(room.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Hover Action */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <button className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-all transform translate-y-2 group-hover:translate-y-0">
                  <Play className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No rooms found</h3>
              <p className="text-slate-400 mb-6">Try adjusting your search or filters</p>
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-medium transition-all transform hover:scale-105">
                Create your first room
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};


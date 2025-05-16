'use client';

interface User {
  id: number;
  name: string;
  email?: string;
  dept?: string;
  jobTitle?: string;
  startDate?: string;
  category?: string;
  gender?: string;
  atsScore?: number;
  status?: 'Active' | 'Inactive';
}

interface UserDetailsModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function UserDetailsModal({ user, isOpen, onClose }: UserDetailsModalProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 transform transition-all ease-in-out duration-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">User Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-2xl font-semibold text-blue-600">{user.name[0]}</span>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">{user.name}</h3>
              <p className="text-gray-500">{user.jobTitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Department</p>
              <p className="text-gray-900">{user.dept || 'N/A'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Start Date</p>
              <p className="text-gray-900">{user.startDate || 'N/A'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Category</p>
              <p className="text-gray-900">{user.category || 'N/A'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Gender</p>
              <p className="text-gray-900">{user.gender || 'N/A'}</p>
            </div>
            {user.atsScore && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">ATS Score</p>
                <p className="text-gray-900">{user.atsScore}%</p>
              </div>
            )}
            {user.status && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Status</p>
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.status}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
} 
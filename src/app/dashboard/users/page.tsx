'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import UserDetailsModal from '@/components/UserDetailsModal';

interface Employee {
  id: number;
  name: string;
  dept: string;
  jobTitle: string;
  startDate: string;
  category: string;
  gender: string;
  atsScore: number;
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'John Steven Doe',
    dept: 'Design',
    jobTitle: 'UI/UX Designer',
    startDate: '28/04/2022',
    category: 'Full time',
    gender: 'Male',
    atsScore: 85,
  },
  {
    id: 2,
    name: 'Barry Jhayson',
    dept: 'IT',
    jobTitle: 'Backend Engineer',
    startDate: '28/04/2022',
    category: 'Remote',
    gender: 'Male',
    atsScore: 92,
  },
  {
    id: 3,
    name: 'Tina Lavage',
    dept: 'Design',
    jobTitle: 'UI/UX Designer',
    startDate: '28/04/2022',
    category: 'Full time',
    gender: 'Female',
    atsScore: 78,
  },
  {
    id: 4,
    name: 'James DK',
    dept: 'Design',
    jobTitle: 'UI/UX Designer',
    startDate: '28/04/2022',
    category: 'Full time',
    gender: 'Male',
    atsScore: 88,
  },
  {
    id: 5,
    name: 'Vanessa Crudi',
    dept: 'Design',
    jobTitle: 'UI/UX Designer',
    startDate: '28/04/2022',
    category: 'Full time',
    gender: 'Female',
    atsScore: 95,
  },
  {
    id: 6,
    name: 'Don Gorgon',
    dept: 'Design',
    jobTitle: 'UI/UX Designer',
    startDate: '28/04/2022',
    category: 'Full time',
    gender: 'Male',
    atsScore: 82,
  },
  {
    id: 7,
    name: 'Sarah Wilson',
    dept: 'Design',
    jobTitle: 'UI/UX Designer',
    startDate: '28/04/2022',
    category: 'Full time',
    gender: 'Female',
    atsScore: 90,
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewProfile = (employee: Employee) => {
    setSelectedUser(employee);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium text-gray-900">Dashboard / Employee Management</h2>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Employee Management
              </h3>
            </div>
            <div className="mt-4 sm:mt-0 sm:flex sm:items-center sm:space-x-4">
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FunnelIcon className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Export
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name(s)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dept
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gender
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ATS Score
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {employee.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{employee.dept}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{employee.jobTitle}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{employee.startDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          employee.category === 'Remote'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {employee.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{employee.gender}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block">
                          {employee.atsScore}%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewProfile(employee)}
                            className="text-blue-600 hover:text-blue-900 bg-blue-100 px-3 py-1 rounded-md"
                          >
                            View Profile
                          </button>
                          <button className="text-blue-600 hover:text-blue-900 bg-blue-100 px-3 py-1 rounded-md">
                            Actions
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <UserDetailsModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
} 
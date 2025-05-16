'use client';

import { users } from '@/data/users';
import {
  EnvelopeIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Messages',
    value: '138',
    icon: EnvelopeIcon,
    color: 'bg-yellow-500',
  },
  {
    name: 'Jobs',
    value: '50',
    icon: BriefcaseIcon,
    color: 'bg-blue-600',
  },
  {
    name: 'Candidates',
    value: '100',
    icon: UserGroupIcon,
    color: 'bg-green-600',
  },
];

const appliedJobs = [
  {
    id: 1,
    title: 'Sales Executive',
    company: 'Acme Corp',
    daysAgo: '2 days ago',
    logo: '🏢',
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'Design Co',
    daysAgo: '3 days ago',
    logo: '🎨',
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'Tech Inc',
    daysAgo: '5 days ago',
    logo: '💼',
  },
];

const employees = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Product Manager',
    avatar: 'J',
    status: 'active',
  },
  {
    id: 2,
    name: 'Gloria Lee',
    role: 'Sales Executive',
    avatar: 'G',
    status: 'active',
  },
  {
    id: 3,
    name: 'James Doe',
    role: 'UX/UI Designer',
    avatar: 'J',
    status: 'inactive',
  },
];

const payrolls = [
  {
    id: 1,
    name: 'John Doe',
    amount: 'NGN 450,000',
    status: 'Paid',
    progress: 100,
  },
  {
    id: 2,
    name: 'Gloria Lee',
    amount: 'NGN 380,000',
    status: 'Processing',
    progress: 50,
  },
  {
    id: 3,
    name: 'James Foe',
    amount: 'NGN 400,000',
    status: 'Processing',
    progress: 50,
  },
];

const candidates = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Product Manager',
    atsScore: 85,
    status: 'View',
  },
  {
    id: 2,
    name: 'Gloria Lee',
    position: 'Sales Executive',
    atsScore: 92,
    status: 'View',
  },
  {
    id: 3,
    name: 'James Foe',
    position: 'Product Manager',
    atsScore: 78,
    status: 'View',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3`}>
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-5">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Applied Jobs Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Applied Jobs</h2>
              <button className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">View all</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {appliedJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                      {job.logo}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.company}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{job.daysAgo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Employees Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Employees</h2>
              <button className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">View all</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {employees.map((employee) => (
                <div key={employee.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full ${
                      employee.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    } flex items-center justify-center font-medium`}>
                      {employee.avatar}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{employee.name}</p>
                      <p className="text-sm text-gray-500">{employee.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-1 text-green-600 hover:text-green-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button className="p-1 text-blue-600 hover:text-blue-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* April Payrolls Section */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">April Payrolls</h2>
            <button className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">View all</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {payrolls.map((payroll) => (
              <div key={payroll.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                    {payroll.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{payroll.name}</p>
                    <p className="text-sm text-gray-500">{payroll.amount}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-4">
                    <div
                      className={`h-2.5 rounded-full ${
                        payroll.status === 'Paid' ? 'bg-green-600' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${payroll.progress}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm ${
                    payroll.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {payroll.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Candidates Section */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Candidates</h2>
            <button className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">View all</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">{candidate.name[0]}</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{candidate.name}</p>
                    <p className="text-sm text-gray-500">{candidate.position}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    ATS: {candidate.atsScore}%
                  </div>
                  <button className="text-blue-600 hover:text-blue-900 bg-blue-100 px-3 py-1 rounded-md text-sm">
                    {candidate.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
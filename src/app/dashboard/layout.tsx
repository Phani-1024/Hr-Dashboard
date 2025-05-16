'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { FEATURES_MENU, ORGANIZATION_MENU } from '@/constants/navigation';
import {
  HomeIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  DocumentIcon,
  UserIcon,
  ClipboardIcon,
  ChartBarIcon,
  BanknotesIcon,
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Messages', href: '#', icon: EnvelopeIcon, badge: '1' },
  { name: 'Recruitment', href: '#', icon: BriefcaseIcon },
  { name: 'Jobs', href: '#', icon: BriefcaseIcon },
  { name: 'Candidates', href: '/dashboard/users', icon: UserGroupIcon },
  { name: 'Resumes', href: '#', icon: DocumentIcon },
];

const organizationMenu = [
  { name: 'Employee Management', href: '/dashboard/employee-management', icon: UserIcon },
  { name: 'Leave Management', href: '#', icon: ClipboardIcon },
  { name: 'Performance Management', href: '#', icon: ChartBarIcon },
  { name: 'KRIS Pay', href: '#', icon: BanknotesIcon },
  { name: 'Payroll Management', href: '#', icon: BanknotesIcon },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const NavLink = ({ item }: { item: any }) => (
    <Link
      href={item.href}
      className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-blue-700 group relative"
    >
      <item.icon className="w-5 h-5 mr-3" />
      {item.name}
      {item.badge && (
        <span className="absolute right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {item.badge}
        </span>
      )}
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-[#1a237e] text-white">
              {/* User Profile */}
              <div className="flex items-center px-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-lg font-semibold">{user.name?.charAt(0)}</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">KRIS Admin</p>
                  <p className="text-xs text-gray-300">Admin</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 space-y-1">
                <p className="text-xs font-semibold text-gray-400 uppercase mt-4 mb-2">Features</p>
                {FEATURES_MENU.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}

                <p className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2">Organization</p>
                {ORGANIZATION_MENU.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}
              </nav>

              {/* Logout Button */}
              <div className="p-4">
                <Button
                  onClick={handleLogout}
                  variant="danger"
                  className="w-full"
                >
                  Log Out
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between h-16 px-4 bg-white border-b md:px-6">
            <div className="flex items-center">
              <div className="relative w-96">
                <Input
                  type="text"
                  placeholder="Search..."
                  icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <BellIcon className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Cog6ToothIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 
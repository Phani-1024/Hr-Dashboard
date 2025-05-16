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
} from '@heroicons/react/24/outline';

export const FEATURES_MENU = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Messages', href: '#', icon: EnvelopeIcon, badge: '1' },
  { name: 'Recruitment', href: '#', icon: BriefcaseIcon },
  { name: 'Jobs', href: '#', icon: BriefcaseIcon },
  { name: 'Candidates', href: '/dashboard/users', icon: UserGroupIcon },
  { name: 'Resumes', href: '#', icon: DocumentIcon },
];

export const ORGANIZATION_MENU = [
  { name: 'Employee Management', href: '/dashboard/employee-management', icon: UserIcon },
  { name: 'Leave Management', href: '#', icon: ClipboardIcon },
  { name: 'Performance Management', href: '#', icon: ChartBarIcon },
  { name: 'KRIS Pay', href: '#', icon: BanknotesIcon },
  { name: 'Payroll Management', href: '#', icon: BanknotesIcon },
]; 
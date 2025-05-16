export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
  department: string;
  phone: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@company.com",
    role: "Software Engineer",
    status: "active",
    joinDate: "2023-01-15",
    department: "Engineering",
    phone: "+1 234-567-8901"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@company.com",
    role: "Product Manager",
    status: "active",
    joinDate: "2022-11-30",
    department: "Product",
    phone: "+1 234-567-8902"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.j@company.com",
    role: "UI Designer",
    status: "inactive",
    joinDate: "2023-03-20",
    department: "Design",
    phone: "+1 234-567-8903"
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.w@company.com",
    role: "HR Manager",
    status: "active",
    joinDate: "2022-08-10",
    department: "Human Resources",
    phone: "+1 234-567-8904"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.b@company.com",
    role: "Marketing Specialist",
    status: "active",
    joinDate: "2023-02-05",
    department: "Marketing",
    phone: "+1 234-567-8905"
  }
]; 
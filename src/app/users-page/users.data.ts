import { signal } from '@angular/core';

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    status: 'active' | 'invited' | 'disabled';
}

export const pinnedUsers = signal<User[]>([
  { id: 'u1', name: 'Ava Chen', email: 'ava@company.com', role: 'admin', status: 'active' },
]);

export const searchResults = signal<User[]>([
  { id: 'u2', name: 'Noah Patel', email: 'noah@company.com', role: 'user', status: 'active' },
  { id: 'u3', name: 'Mia Rivera', email: 'mia@company.com', role: 'user', status: 'active' },
]);

export const suggestedUsers = signal<User[]>([
  { id: 'u4', name: 'Liam Park', email: 'liam@company.com', role: 'user', status: 'active' },
]);

export const invitedUsers = signal<User[]>([
  { id: 'u5', name: 'Zoe Kim', email: 'zoe@company.com', role: 'user', status: 'invited' },
]);

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

export function updateUsersData() {
  // Update pinnedUsers - add a new pinned user
  pinnedUsers.update(users => [
      ...users,
      { id: `u${Date.now()}`, 
      name: `Pinned User ${Math.floor(Math.random() * 1000)}`, 
      email: `pinned${Math.floor(Math.random() * 1000)}@company.com`, 
      role: 'admin', 
      status: 'active'
    }
  ]);

  // Update searchResults - modify existing or add new
  searchResults.update(users => [
      ...users,
      { id: `u${Date.now() + 1}`, 
      name: `Search Result ${Math.floor(Math.random() * 1000)}`, 
      email: `search${Math.floor(Math.random() * 1000)}@company.com`, 
      role: 'user',
      status: 'active'
    }
  ]);

  // Update suggestedUsers - add a new suggestion
  suggestedUsers.update(users => [
      ...users,
      { id: `u${Date.now() + 2}`, 
      name: `Suggested User ${Math.floor(Math.random() * 1000)}`, 
      email: `suggested${Math.floor(Math.random() * 1000)}@company.com`, 
      role: 'user', 
      status: 'active'
    }
  ]);

  // Update invitedUsers - add a new invitation
  invitedUsers.update(users => [
      ...users,
      { id: `u${Date.now() + 3}`, 
      name: `Invited User ${Math.floor(Math.random() * 1000)}`, 
      email: `invited${Math.floor(Math.random() * 1000)}@company.com`, 
      role: 'user', 
      status: 'invited'
    }
  ]);
}

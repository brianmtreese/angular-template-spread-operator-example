import { Component, computed, signal } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { JsonPipe } from '@angular/common';

interface User {
	id: string;
	name: string;
	email: string;
}

@Component({
	selector: 'spread-demo-page',
	imports: [ActionButtonComponent],
	templateUrl: './users-page.component.html',
	styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {
	protected readonly isAdmin = signal(false);
	protected readonly selection = signal<Set<string>>(new Set());

	protected readonly users: User[] = [
		{ id: '1', name: 'Alice Johnson', email: 'alice@example.com' },
		{ id: '2', name: 'Bob Smith', email: 'bob@example.com' },
		{ id: '3', name: 'Charlie Brown', email: 'charlie@example.com' },
		{ id: '4', name: 'Diana Prince', email: 'diana@example.com' },
		{ id: '5', name: 'Eve Wilson', email: 'eve@example.com' },
		{ id: '6', name: 'Frank Miller', email: 'frank@example.com' }
	];

	protected readonly selectedCount = computed(() => this.selection().size);
	protected readonly isBusy = signal(false);

	protected toggleUserSelection(userId: string) {
		this.selection.update(selected => {
			const updated = new Set(selected);
			updated.has(userId) ? updated.delete(userId) : updated.add(userId);
			return updated;
		});
	}

	protected toggleAllSelection() {
		this.selection.update(selected =>
			selected.size === this.users.length
				? new Set<string>()
				: new Set(this.users.map(u => u.id))
		);
	}

	protected onAdminChange(event: Event) {
		this.isAdmin.set((event.target as HTMLInputElement).checked);
	}

	protected onBusyChange(event: Event) {
		this.isBusy.set((event.target as HTMLInputElement).checked);
	}

	protected deleteAction() {
		console.log('Action: delete', Array.from(this.selection()));
	}
}

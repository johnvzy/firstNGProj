import { flatten } from '@angular/compiler';

export class Todo {
    private title: string = '';
    private completed: boolean = false;
    private editMode: boolean = false;

    constructor(title: string) {
        this.title = title || '';
    }

    get done(): boolean {
        return this.completed;
    }

    get editing(): boolean {
        return this.editMode;
    }

    set editable(bl: boolean) {
        this.editMode = bl;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    toggleCompletion(): void {
        this.completed = !this.completed;
    }

    setCompleted(completed: boolean): void {
        this.completed = completed;
    }
}

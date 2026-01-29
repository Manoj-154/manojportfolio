import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education  {
opened: string | null = null; // default open

  toggle(section: string) {
    this.opened = this.opened === section ? null : section;
  }
}
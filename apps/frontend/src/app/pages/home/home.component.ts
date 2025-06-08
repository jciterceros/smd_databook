import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <div class="home-container">
      <h1>Welcome to SMD Databook</h1>
      <p>A comprehensive database for SMD components</p>
      <mat-card>
        <mat-card-header>
          <mat-card-title>Quick Search</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Search for SMD components by their marking code</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
    styles: [`
    .home-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class HomeComponent { } 
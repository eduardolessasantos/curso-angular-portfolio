import { Component } from '@angular/core';

// Components
import { EducationComponent } from '../../components/education/education.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    EducationComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public currentYear = new Date().getFullYear();
}

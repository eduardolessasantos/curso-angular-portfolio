import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEducationItem } from '../../interface/IEducation.interface';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  public academicList = signal<IEducationItem[]>([
    {
      title: 'MBA em Engenharia de Software',
      institution: 'Universidade Federal do Rio de Janeiro (UFRJ)',
      period: 'Jan 2020 - Jan 2022',
      type: 'academic',
      badge: 'Pós-Graduação',
    },
    {
      title: 'Tecnólogo em Sistemas da Computação',
      institution: 'Universidade Federal Fluminense (UFF)',
      period: '2011 - 2014',
      type: 'academic',
      badge: 'Graduação',
    },
  ]);

  public certificationsList = signal<IEducationItem[]>([
    {
      title: 'SCRUM Foundation Professional Certificate (SFPC)',
      institution: 'CertiProf / Scrum',
      period: 'Certificação Internacional',
      type: 'certification',
      badge: 'Metodologias Ágeis',
    },
    {
      title: 'AWS Partner: Accreditation (Technical)',
      institution: 'Amazon Web Services (AWS)',
      period: 'Credencial Técnica Cloud',
      type: 'certification',
      badge: 'Cloud & DevOps',
    },
  ]);
}

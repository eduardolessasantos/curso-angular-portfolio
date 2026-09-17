import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/NET core.svg',
      alt: 'Ícone de .NET Core / .NET',
      title: '.NET / .NET Core',
    },
    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Ícone de C#',
      title: 'C# / VB.NET',
    },
    {
      src: 'assets/icons/knowledge/api.svg',
      alt: 'Ícone de APIs REST',
      title: 'APIs REST & Microsserviços',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de Angular',
      title: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/oracle.svg',
      alt: 'Ícone de Oracle Database',
      title: 'Oracle Database / SQL',
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'Ícone de Amazon Web Services (AWS)',
      title: 'Cloud AWS',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de JavaScript & TypeScript',
      title: 'JavaScript / TypeScript',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de HTML5',
      title: 'HTML5',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de Sass',
      title: 'Sass / SCSS',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de Node.js',
      title: 'Node.js',
    },
  ]);
}

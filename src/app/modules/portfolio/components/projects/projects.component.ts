import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/devconcursos.svg',
      alt: 'DevConcursos TI - Flashcards SRS para Concursos de TI',
      title: 'DevConcursos TI',
      category: 'EdTech & Repetição Espaçada',
      with: '100%',
      height: '100%',
      description:
        '<p><strong>DevConcursos TI</strong> é um portal educacional de alta performance voltado para candidatos e profissionais de tecnologia que buscam aprovação em cargos de TI em Tribunais (STJ, TSE, TRF, TRT), Carreiras Fiscais e Bancos Públicos.</p><p>A plataforma implementa a metodologia de <strong>Active Recall</strong> e <strong>Repetição Espaçada (SRS)</strong> com algoritmo adaptativo para retenção de longo prazo. Conta com cadernos teóricos completos cobrindo Segurança da Informação (ISO 27002), Governança (ITIL v4 e COBIT 2019), Bancos de Dados & BI, Inteligência Artificial e Legislação (LGPD e LAI), acompanhados de flashcards comentados com foco nas bancas Cebraspe, FGV e Cesgranrio.</p>',
      links: [
        {
          name: 'Conheça a Plataforma',
          href: 'https://flashconcursoti.netlify.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/codecompare.svg',
      alt: 'CodeCompare - Blog Técnico e Benchmarks de Arquitetura',
      title: 'CodeCompare',
      category: 'Arquitetura de Software & Benchmarks',
      with: '100%',
      height: '100%',
      description:
        '<p><strong>CodeCompare</strong> é um blog técnico autoral e portal de análises arquiteturais pragmáticas fundado por Eduardo Lessa para apoiar decisões técnicas fundamentadas de engenheiros e arquitetos de software.</p><p>O portal apresenta deep dives e benchmarks rigorosos de produção executados via k6 e containers isolados, comparando o throughput e latência p99 de <strong>.NET 8 Minimal APIs</strong> vs Spring Boot 3 vs FastAPI, análises de eficiência de reatividade com Signals no Angular 17+ vs Vue 3 e React 19, além de guias de Clean Architecture em APIs corporativas e padrões de cache com Redis e bancos relacionais/NoSQL.</p>',
      links: [
        {
          name: 'Acessar o Blog Técnico',
          href: 'https://fullstack-blog-edulessa.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/teachertech.svg',
      alt: 'TeacherTech - Plataforma de Estudo e Ensino com IA',
      title: 'TeacherTech',
      category: 'Educação & Inteligência Artificial',
      with: '100%',
      height: '100%',
      description:
        '<p><strong>TeacherTech</strong> é uma plataforma moderna concebida para otimizar a experiência de ensino e estudo de disciplinas de tecnologia e concursos.</p><p>O sistema disponibiliza recursos dinâmicos para gestão de disciplinas, criação autônoma de conteúdo assistida por recursos de Inteligência Artificial, geração de resumos estruturados, flashcards para estudo ativo e suporte à organização de turmas e trilhas de aprendizagem em interface ágil e responsiva.</p>',
      links: [
        {
          name: 'Conheça a Aplicação',
          href: 'https://eduardolessasantos.github.io/concurso-dev/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}

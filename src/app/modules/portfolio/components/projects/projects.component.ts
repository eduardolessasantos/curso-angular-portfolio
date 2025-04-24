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
      src: 'assets/img/projects/favicon.ico',
      alt: 'Projeto Leitor de PDF',
      title: 'Leitor PDF',
      with: '100px',
      height: '51px',
      description:
        '<p>Leitor de PDFs construido no Front-end em HTML, Css e JavaScript. Back-end em Python.</p> <p>Um projeto desenvolvido para facilitar o acesso a diversos arquivos PDFs em diferentes níveis de pastas e subpastas.</p>',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://leitor-pdf-tc6c.onrender.com/',
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

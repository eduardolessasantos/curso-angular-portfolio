import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista de Desenvolvimento de Sistemas Sênior',
        p: 'Basis | Ago 2024 - Present',
      },
      text: '<p>Atuação no desenvolvimento e manutenção de sistemas administrativos voltados à gestão de recursos humanos do Poder Judiciário do Estado do Rio de Janeiro (PJERJ), no terceiro contrato consecutivo de prestação de serviço. Neste ciclo, aprofundei o uso de tecnologias modernas como .NET Core e Angular,consolidando práticas de integração por meio de APIs REST e web services SOAP, e intensificando o uso de procedures em banco de dados Oracle. A experiência permitiu aplicar conhecimentos adquiridos nos contratos anteriores com maior autonomia e responsabilidade técnica.</p>',
    },
    {
      summary: {
        strong: 'Analista de Desenvolvimento de Sistemas Master',
        p: 'Spassu | Out 2019 - Ago 2024',
      },
      text: '<p>Segundo contrato de prestação de serviço ao PJERJ, com foco em melhorias contínuas nos sistemas administrativos de RH. Atuei com Visual Studio (VB.NET, C#, ASP.NET), além de Angular para interfaces web. Nesse período, avancei no desenvolvimento de APIs RESTful, na modernização de funcionalidades legadas e na integração com o banco Oracle utilizando procedures. A experiência me proporcionou maior domínio sobre arquitetura de software e colaboração direta com equipes de análise e QA.</p>',
    },
    {
      summary: {
        strong: 'Analista de Desenvolvimento de Sistemas Pleno',
        p: 'CTIS | Ago 2018 - Set 2019',
      },
      text: '<p>Primeira oportunidade de atuar diretamente no PJERJ como prestador de serviço em desenvolvimento de software. Contribuí com a evolução dos sistemas administrativos utilizando tecnologias da plataforma .NET, incluindo VB.NET, C# e ASP.NET, com foco em integração via web services SOAP e acesso ao banco Oracle por meio de procedures. Essa experiência foi fundamental para meu crescimento técnico, servindo de base para os contratos seguintes, com progressiva exposição a novas tecnologias e práticas de desenvolvimento.</p>',
    },
    {
      summary: {
        strong: 'Programador',
        p: 'PIX Informática |  Jun 2017 - Ago 2018',
      },
      text: '<p>Início da minha carreira profissional, dando continuidade ao trabalho realizado durante dois anos de estágio na empresa. Atuei no desenvolvimento e manutenção de sistemas voltados à área de produção, utilizando as ferramentas do Visual Studio com foco em VB.NET, C# e ASP.NET. Responsável também pelo levantamento de requisitos diretamente com os usuários e pela implementação de processos em banco de dados SQL Server.</p>',
    },
  ]);
}

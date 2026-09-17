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
        strong: 'Senior Software Developer (.NET) | Sistemas de Gestão de RH – TJ-RJ',
        p: 'Basis Tecnologia da Informação S.A. | Ago 2024 - Presente',
      },
      text: '<p>Desenvolvimento e evolução de sistemas críticos de Recursos Humanos do Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ), suportando operações diárias com milhares de magistrados e servidores. Desenvolvimento de APIs REST em .NET para integração entre sistemas internos e otimização de performance. Manipulação avançada de grandes volumes de dados em Oracle Database, garantindo integridade e consistência. Análise e resolução de incidentes críticos em produção assegurando alta disponibilidade e continuidade operacional. Modernização contínua de sistemas legados migrando estruturas monolíticas para arquitetura baseada em APIs e serviços distribuídos, além da construção de interfaces com Angular e manutenção de rotinas corporativas em C# e VB.NET.</p>',
    },
    {
      summary: {
        strong: 'Software Developer (.NET) Sênior',
        p: 'Spassu Tecnologia e Serviços | Out 2019 - Jul 2024',
      },
      text: '<p>Atuação de quase 5 anos prestando serviços ao PJERJ com foco em sistemas administrativos críticos. Desenvolvimento de aplicações corporativas com C#, VB.NET e Angular. Criação de integrações entre sistemas utilizando APIs RESTful e banco de dados Oracle com procedures de alta complexidade. Sustentação e evolução de sistemas corporativos com alto volume de transações, aplicando rigorosas boas práticas de arquitetura (SOLID, Clean Code, Design Patterns). Atuação especializada em debugging avançado, diagnóstico de erros em produção e análise de performance.</p>',
    },
    {
      summary: {
        strong: 'Software Developer (.NET)',
        p: 'SONDA | Ago 2018 - Set 2019',
      },
      text: '<p>Desenvolvimento e manutenção de sistemas corporativos administrativos em plataforma .NET (VB.NET, C# e ASP.NET) no PJERJ. Suporte a aplicações críticas, resolução de chamados de incidentes e sustentação de regras de negócio em ambiente corporativo estruturado seguindo padrões de qualidade, com integrações via web services SOAP e procedures em Oracle Database.</p>',
    },
    {
      summary: {
        strong: 'Software Developer & Estagiário',
        p: 'Pix Software - RJ | Jun 2015 - Ago 2018',
      },
      text: '<p>Desenvolvimento de sistemas voltados ao segmento de produção industrial. Atuação contínua iniciada no estágio técnico (2015-2017) e promoção a desenvolvedor de software (2017-2018). Implementação de novas funcionalidades e correções em aplicações existentes em C#, VB.NET e ASP.NET, além de levantamento de requisitos com usuários finais e manipulação de banco de dados SQL Server.</p>',
    },
  ]);
}

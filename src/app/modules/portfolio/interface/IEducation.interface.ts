export interface IEducationItem {
  title: string;
  institution: string;
  period: string;
  type: 'academic' | 'certification';
  badge?: string;
}

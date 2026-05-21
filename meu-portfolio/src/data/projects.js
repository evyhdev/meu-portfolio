import { PROJECT_DETAILS_LINKS, PROJECT_DRIVE_LINKS, PROJECT_EXTERNAL_LINKS } from './links';

export const projects = [
  {
    id: 'operacaoRockstar',
    title: 'Operação Rockstar: Protocolo Seguro',
    category: 'Game Design | UX | Jogo Educacional',
    description:
      'Jogo educacional criado para a disciplina de Gestão da Tecnologia da Informação, com dinâmica de RPG, tabuleiro e quiz interativo. O projeto aborda temas como Governança de TI, Segurança da Informação, COBIT, ITIL, riscos e processos.',
    role:
      'Regras do jogo, fluxo da partida, prototipação, documentação e planejamento da experiência do jogador.',
    tags: ['Game Design', 'UX', 'Prototipação', 'Educação', 'RPG', 'Quiz'],
    driveLink: PROJECT_DRIVE_LINKS.operacaoRockstar,
    detailsLink: PROJECT_DETAILS_LINKS.operacaoRockstar,
    externalLink: PROJECT_EXTERNAL_LINKS.operacaoRockstar,
    externalLabel: 'Ver protótipo',
  },
  {
    id: 'hubUfc',
    title: 'HUB UFC',
    category: 'UX/UI | Arquitetura da Informação',
    description:
      'Plataforma web criada na disciplina de UX para centralizar eventos, grupos, serviços, projetos, bolsas, pesquisas e oportunidades acadêmicas da faculdade.',
    role:
      'Fluxo do usuário, prototipação, arquitetura da informação, filtros, busca e mini relatório UX/QA.',
    tags: ['UX/UI', 'Figma', 'Arquitetura da Informação', 'Fluxo de Usuário', 'UX/QA'],
    driveLink: PROJECT_DRIVE_LINKS.hubUfc,
    detailsLink: PROJECT_DETAILS_LINKS.hubUfc,
    externalLink: PROJECT_EXTERNAL_LINKS.hubUfc,
    externalLabel: 'Ver protótipo',
  },
  {
    id: 'pegaPista',
    title: 'PegaPista!',
    category: 'Mobile | UX/UI | Gamificação',
    description:
      'Aplicativo mobile de corrida criado na disciplina de Mobile, com proposta de registro de atividades, ranking, comunidade e expansão futura com gamificação.',
    role:
      'Protótipo inicial no Figma, organização das telas e documento de melhorias UX/UI para evolução do produto.',
    tags: ['Mobile', 'Figma', 'UX/UI', 'Gamificação', 'Produto Digital'],
    driveLink: PROJECT_DRIVE_LINKS.pegaPista,
    detailsLink: PROJECT_DETAILS_LINKS.pegaPista,
    externalLink: PROJECT_EXTERNAL_LINKS.pegaPista,
    externalLabel: 'Ver protótipo',
  },
  {
    id: 'peluCia',
    title: 'Pelu&Cia',
    category: 'Web | UX/UI | Requisitos',
    description:
      'Projeto web para apoiar uma iniciativa voluntária de cuidado, doação e adoção responsável de animais da UFC Quixadá.',
    role: 'Requisitos, prototipação, desenvolvimento web, navegação e organização visual.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Requisitos', 'UX/UI', 'Web'],
    driveLink: PROJECT_DRIVE_LINKS.peluCia,
    detailsLink: PROJECT_DETAILS_LINKS.peluCia,
    externalLink: PROJECT_EXTERNAL_LINKS.peluCia,
    externalLabel: 'Ver repositório',
  },
  {
    id: 'barbeariaMenezes',
    title: 'Barbearia Menezes / BarberKlub',
    category: 'Web | UI | Freelance',
    description:
      'Projeto web voltado para uma barbearia, com foco em apresentar serviços, organizar informações do negócio e facilitar contato ou agendamento.',
    role:
      'Levantamento de requisitos, prototipação navegável, organização da interface e apoio na implementação técnica.',
    tags: ['Freelance', 'UI', 'Web', 'Prototipação', 'Requisitos'],
    driveLink: PROJECT_DRIVE_LINKS.barbeariaMenezes,
    detailsLink: PROJECT_DETAILS_LINKS.barbeariaMenezes,
    externalLink: PROJECT_EXTERNAL_LINKS.barbeariaMenezes,
    externalLabel: 'Ver protótipo',
  },
  {
    id: 'jasGesso',
    title: 'JAS Gesso',
    category: 'UI Design | Gestão da Informação',
    description:
      'Protótipo visual de sistema de gestão para o setor gesseiro, criado a partir de problemas como registros manuais, descentralização de informações e dificuldade de rastreabilidade.',
    role:
      'Criação das telas no Figma, organização visual das informações e transformação do diagnóstico acadêmico em proposta visual de sistema.',
    tags: ['Figma', 'UI Design', 'UX', 'Gestão da Informação', 'Sistema Interno'],
    driveLink: PROJECT_DRIVE_LINKS.jasGesso,
    detailsLink: PROJECT_DETAILS_LINKS.jasGesso,
    externalLink: PROJECT_EXTERNAL_LINKS.jasGesso,
    externalLabel: 'Ver protótipo',
  },
  {
    id: 'cdlBoaViagem',
    title: 'CDL Boa Viagem',
    category: 'UX/UI | Web | AvanteTech Jr.',
    description:
      'Projeto institucional/comercial desenvolvido na AvanteTech Jr., voltado para organização de conteúdo, presença digital e experiência do usuário.',
    role:
      'Estruturação da interface, organização da experiência do usuário e planejamento visual de múltiplos módulos.',
    tags: ['UX/UI', 'Web', 'AvanteTech Jr.', 'Organização de Conteúdo'],
    driveLink: PROJECT_DRIVE_LINKS.cdlBoaViagem,
    detailsLink: PROJECT_DETAILS_LINKS.cdlBoaViagem,
    externalLink: PROJECT_EXTERNAL_LINKS.cdlBoaViagem,
    externalLabel: 'Ver projeto',
  },
];

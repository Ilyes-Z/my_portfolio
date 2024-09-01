import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Plateforme d\'infogerance de parc informatique',
        description: "Nous avons développé une plateforme d'infogérance de parc informatique. Cette plateforme permet de gérer les équipements informatiques de l'entreprise, de suivre les incidents et de gérer les demandes d'intervention, ainsi que la sécurité des équipements.",
        tools: ['Laravel', 'Postgres', 'Angular 12', 'Typescript', 'PHP', 'Bootstrap', 'Bitbucket', 'Jira',],
        role: 'Développeur Fullstack',
        code: '',
        demo: '',
        image: crefin,
    },
    {
      id: 2,
      name: 'Application iOS d\'amélioration de trajet',
      description: "Nous avons développé une application iOS qui permet de trouver le meilleur trajet pour les piétons. L'application permet de trouver le meilleur trajet en fonction du trafic, des accidents. Il y avait aussi un système de défi pour motiver les utilisateurs à marcher plus.",
      tools: ['Swift', 'MapKit', 'CoreLocation', 'Firebase', 'Xcode', 'Git', 'Github', 'Firebase'],
      role: 'Développeur iOS',
      code: '',
      demo: '',
      image: travel,
    },
    {
      id: 3,
      name: 'Afridoctor',
      description: 'Une version de l\'application Doctolib pour l\'Afrique. Cette application permet de trouver des médecins en Afrique. L\'application permet aussi de prendre des rendez-vous en ligne etaux medecins de gérer leurs rendez-vous ainsi que leurs patients.',
      tools: ['React', 'Node', 'MeteorJs', 'MongoDB', 'Heroku', 'Github'],
      role: 'Développeur Fullstack',
      code: '',
      demo: '',
      image: ayla,
    },
    {
      id: 4,
      name: 'DidUEnjoy',
      description: 'Une application qui permet de créer des enquêtes de satisfaction et de les envoyer à des clients. L\'application permet de suivre les réponses et de générer des rapports.',
      tools: ['Rails', 'EmberJs', 'Postgres', 'SCSS', 'Gitlab', 'Asana'],
      role: 'Développeur Fullstack',
      code: '',
      demo: '',
      image: ayla,
    }
];
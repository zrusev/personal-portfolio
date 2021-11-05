export default {
  get: () => {
    const sleepThreadPromise = new Promise((resolve) => setTimeout(resolve, 100));

    const fetchDataPromise = Promise.resolve({
      data: [
        {
          id: 0,
          name: 'microservices-architecture',
          tags: ['K8S', 'Docker', 'Jenkins', 'CI', 'ASP.NET Core', 'EF Core', 'Refit', 'MassTransit', 'RabbitMQ', 'Handfire', 'SignalR', 'ReactJS', 'Redux', 'Material UI'],
          address: 'https://github.com/zrusev/microservices-architecture',
        },
        {
          id: 1,
          name: 'ddd-architecture',
          tags: ['ASP.NET Core', 'EF Core', 'AutoМapper', 'JWT', 'Domain-driven design', 'FluentValidation', 'MediatR', 'MailKit'],
          address: 'https://github.com/zrusev/ddd-architecture',
        },
        {
          id: 2,
          name: 'swapp',
          tags: ['ReactJS', 'Styled-components', 'Graphql', 'Apollo', 'Jest', 'Enzyme', 'Netlify', 'CI', 'Husky', 'CSS Animations', 'CSS Transitions', 'JWT'],
          address: 'https://github.com/zrusev/swapp',
        },
        {
          id: 3,
          name: 'product-store',
          tags: ['ASP.NET Core', 'EF Core', 'ReactJS', 'JWT', 'Bootstrap', 'AutoМapper', 'Redux'],
          address: 'https://github.com/zrusev/product-store',
        },
        {
          id: 4,
          name: 'personal-portfolio',
          tags: ['ReactJS', 'SASS', 'NodeJS', 'Webpack', 'BabelJS', 'Heroku', 'CI', 'CSS Animations', 'CSS Transitions'],
          address: 'https://github.com/zrusev/personal-portfolio',
        },
        {
          id: 5,
          name: 'makasa-store',
          tags: ['AngularJS', 'TypeScript', 'NodeJS', 'Material UI', 'Redux', 'NgRx Store', 'Observables', 'RxJS'],
          address: 'https://github.com/zrusev/ng-makasa-store',
        },
        {
          id: 6,
          name: 'bike-rental-system',
          tags: ['AngularJS', 'TypeScript', 'NodeJS', 'Ng-Bootstrap', 'Observables', 'RxJS', 'Google Maps', 'Kinvey'],
          address: 'https://github.com/zrusev/bike-rental-system',
        },
        {
          id: 7,
          name: 'flight-system',
          tags: ['ReactJS', 'ExpressJS', 'NodeJS', 'Google Maps', 'Mongoose', 'JWT'],
          address: 'https://github.com/zrusev/flight-system',
        },
        {
          id: 8,
          name: 'blazor-traffic',
          tags: ['Blazor', 'Razor', 'Razor Pages', 'ASP.NET Core', 'Google Maps', 'Azure'],
          address: 'https://github.com/zrusev/blazor-traffic',
        },
        {
          id: 9,
          name: 'tracking-system',
          tags: ['ASP.NET Core', 'EF Core', 'Razor', 'Razor Pages', 'jQuery', 'AJAX', 'Bootstrap', 'AutoМapper', 'MVC', 'Azure'],
          address: 'https://github.com/zrusev/tracking-system',
        },
        {
          id: 10,
          name: 'ng-api-template',
          tags: ['AngularJS', 'TypeScript', 'JWT', 'RxJS', 'Observables'],
          address: 'https://github.com/zrusev/ng-api-template',
        },
        {
          id: 11,
          name: 'softuni-courses',
          tags: ['C#', 'JavaScript'],
          address: 'https://github.com/zrusev/softuni-2016',
        },
        {
          id: 12,
          name: 'documents-flow',
          tags: ['VBA', 'Recursion', 'Regex'],
          address: 'https://github.com/zrusev/documents-flow',
        },
        {
          id: 13,
          name: 'vba-tools',
          tags: ['VBA', 'OCR', 'ODBC', 'ADODB', 'Recursion', 'TCP'],
          address: 'https://github.com/zrusev/vba-tools',
        },
        {
          id: 14,
          name: 'graphooo',
          tags: ['PHP', 'Symfony'],
          address: 'https://github.com/zrusev/symfony-project',
        },
      ]
    });

    return Promise.all([sleepThreadPromise, fetchDataPromise]).then(res => res[1]);
    }
};
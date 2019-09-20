export default {
  get: () => {
    const sleepThreadPromise = new Promise((resolve) => setTimeout(resolve, 750));
    
    const fetchDataPromise = Promise.resolve({
      data: [
        {
          id: 0,
          name: 'personal-portfolio',
          tags: ['ReactJS', 'HTML', 'SASS', 'NodeJS', 'Webpack', 'BabelJS', 'CSS Animations', 'CSS Transitions'],
          address: 'https://github.com/zrusev/personal-portfolio',
        },
        {
          id: 1,
          name: 'makasa-store',
          tags: ['AngularJS', 'TypeScript', 'NodeJS', 'Material UI', 'Redux', 'NgRx Store', 'Observables', 'RxJS'],
          address: 'https://github.com/zrusev/ng-makasa-store',
        },
        {
          id: 2,
          name: 'bike-rental-system',
          tags: ['AngularJS', 'TypeScript', 'NodeJS', 'Ng-Bootstrap', 'Observables', 'RxJS', 'Google Maps', 'Kinvey'],
          address: 'https://github.com/zrusev/bike-rental-system',
        },
        {
          id: 3,
          name: 'flight-system',
          tags: ['ReactJS', 'ExpressJS', 'NodeJS', 'Google Maps', 'Mongoose', 'JWT'],
          address: 'https://github.com/zrusev/flight-system',
        },
        {
          id: 4,
          name: 'blazor-traffic',
          tags: ['Blazor', 'Razor', 'Razor Pages', 'ASP.NET Core', 'Google Maps', 'Azure'],
          address: 'https://github.com/zrusev/blazor-traffic',
        },
        {
          id: 5,
          name: 'tracking-system',
          tags: ['ASP.NET Core', 'EF Core', 'Razor', 'Razor Pages', 'jQuery', 'AJAX', 'Bootstrap', 'AutoМapper', 'MVC', 'Azure'],
          address: 'https://github.com/zrusev/tracking-system',
        },
        {
          id: 6,
          name: 'ng-api-template',
          tags: ['AngularJS', 'TypeScript', 'JWT', 'RxJS', 'Observables'],
          address: 'https://github.com/zrusev/ng-api-template',
        },
        {
          id: 7,
          name: 'softuni-courses',
          tags: ['C#', 'JavaScript'],
          address: 'https://github.com/zrusev/softuni-2016',
        },
        {
          id: 8,
          name: 'documents-flow',
          tags: ['VBA', 'Recursion', 'Regex'],
          address: 'https://github.com/zrusev/documents-flow',
        },
        {
          id: 9,
          name: 'vba-tools',
          tags: ['VBA', 'OCR', 'ODBC', 'ADODB', 'Recursion', 'TCP'],
          address: 'https://github.com/zrusev/vba-tools',
        },
        {
          id: 10,
          name: 'graphooo',
          tags: ['PHP', 'Symfony'],
          address: 'https://github.com/zrusev/symfony-project',
        },
      ]
    });

    return Promise.all([sleepThreadPromise, fetchDataPromise]).then(res => res[1]);
    }
};
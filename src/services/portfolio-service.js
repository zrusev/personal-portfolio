export default {
  get: () => {
    const sleepThreadPromise = new Promise((resolve) => setTimeout(resolve, 750));
    
    const fetchDataPromise = Promise.resolve({
      data: [
        {
          id: 0,
          name: 'personal-portfolio',
          tags: ['ReactJS', 'HTML', 'SASS', 'Webpack', 'BabelJS', 'CSS Animation', 'CSS Transitions'],
          address: 'https://github.com/zrusev/personal-portfolio',
        },
        {
          id: 1,
          name: 'makasa-store',
          tags: ['AngularJS', 'TypeScript', 'Redux', 'NgRx Store', 'Observables', 'RxJS', 'Material UI'],
          address: 'https://github.com/zrusev/ng-makasa-store',
        },
        {
          id: 2,
          name: 'bike-rental',
          tags: ['AngularJS', 'Ng-Bootstrap', 'Bootstap', 'Hooks', 'Observables', 'RxJS'],
          address: 'https://github.com/zrusev/bike-rental-system',
        },
        {
          id: 3,
          name: 'flight-system',
          tags: ['ReactJS', 'ExpressJS'],
          address: 'https://github.com/zrusev/flight-system',
        },
        {
          id: 4,
          name: 'blazor-traffic',
          tags: ['Blazor', 'Razor', 'Razor Pages', 'ASP.NET Core'],
          address: 'https://github.com/zrusev/blazor-traffic',
        },
        {
          id: 5,
          name: 'metrics-track',
          tags: ['ASP.NET Core', 'EF Core', 'jQuery', 'AJAX', 'Boostrap', 'AutoМapper', 'MVC'],
          address: 'https://github.com/zrusev/tracking-system',
        },
        {
          id: 6,
          name: 'api-template',
          tags: ['AngularJS', 'TypeScript', 'API'],
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
          name: 'graphooo',
          tags: ['PHP', 'Symfony'],
          address: 'https://github.com/zrusev/symfony-project',
        },
      ]
    });

    return Promise.all([sleepThreadPromise, fetchDataPromise]).then(res => res[1]);
    }
};
export default {
  get: () => {
    const sleepThreadPromise = new Promise((resolve) => setTimeout(resolve, 750));
    
    const fetchDataPromise = Promise.resolve({
      data: [
        {
          id: 0,
          name: 'makasa-store',
          tags: ['AngularJS', 'Material UI', 'NgRx Store', 'Observables', 'RxJS'],
        },
        {
          id: 1,
          name: 'blazor-traffic',
          tags: ['Blazor', 'Razor', 'Razor Pages', 'ASP.NET Core'],
        },
        {
          id: 2,
          name: 'metrics-track',
          tags: ['ASP.NET Core', 'EF Core', 'jQuery', 'AJAX', 'Boostrap', 'AutoМapper', 'Azure Key Vault'],
        },
        {
          id: 3,
          name: 'flight-system',
          tags: ['ReactJS', 'ExpressJS', 'Authentication', 'Roles', 'Routing', 'Bound forms'],
        },
        {
          id: 4,
          name: 'bike-rental',
          tags: ['AngularJS', 'Ng-Bootstrap', 'Bootstap', 'Google Maps', 'Hooks', 'Observables', 'RxJS'],
        },
      ]
    });

    return Promise.all([sleepThreadPromise, fetchDataPromise]).then(res => res[1]);
    }
};
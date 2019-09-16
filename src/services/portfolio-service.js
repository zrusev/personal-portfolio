export default {
  get: () => {
    const sleepThreadPromise = new Promise((resolve) => setTimeout(resolve, 750));
    
    const fetchDataPromise = Promise.resolve({
      data: [
        {
          id: 0,
          name: 'makasa-store',
          tags: ['AngularJS', 'Material UI', 'NgRx Store', 'Observables', 'RxJS'],
          address: 'https://github.com/zrusev/ng-makasa-store',
        },
        {
          id: 1,
          name: 'blazor-traffic',
          tags: ['Blazor', 'Razor', 'Razor Pages', 'ASP.NET Core'],
          address: 'https://github.com/zrusev/blazor-traffic',
        },
        {
          id: 2,
          name: 'metrics-track',
          tags: ['ASP.NET Core', 'EF Core', 'jQuery', 'AJAX', 'Boostrap', 'AutoМapper', 'Azure Key Vault'],
          address: 'https://github.com/zrusev/tracking-system',
        },
        {
          id: 3,
          name: 'flight-system',
          tags: ['ReactJS', 'ExpressJS'],
          address: 'https://github.com/zrusev/flight-system',
        },
        {
          id: 4,
          name: 'bike-rental',
          tags: ['AngularJS', 'Ng-Bootstrap', 'Bootstap', 'Hooks', 'Observables', 'RxJS'],
          address: 'https://github.com/zrusev/bike-rental-system',
        },
      ]
    });

    return Promise.all([sleepThreadPromise, fetchDataPromise]).then(res => res[1]);
    }
};
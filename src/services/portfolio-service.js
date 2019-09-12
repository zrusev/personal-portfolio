export default {
  get: () => {
    const sleepThreadPromise = new Promise((resolve) => setTimeout(resolve, 750));
    
    const fetchDataPromise = Promise.resolve({
      data: [
        {
          id: 0,
          name: 'makasa-store',
          tags: ['tag1', 'tag2', 'tag3', 'tag4'],
          url: 'makasa-store.jpg',
        },
        {
          id: 1,
          name: 'blazor-traffic',
          tags: ['tag1', 'tag2', 'tag3', 'tag4'],
          url: 'blazor-traffic.jpg',
        },
        {
            id: 3,
            name: 'metrics-track',
            tags: ['tag1', 'tag2', 'tag3', 'tag4'],
            url: 'metrics-track.jpg',
        }  
      ]
    });

    return Promise.all([sleepThreadPromise, fetchDataPromise]).then(res => res[1]);
    }
};
export default {
  get: () => {
    const sleepThreadPromise = new Promise((resolve) => setTimeout(resolve, 750));
    
    const fetchDataPromise = Promise.resolve({
      data: [
        {
          id: 0,
          name: 'makasa-store',
          tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        },
        {
          id: 1,
          name: 'blazor-traffic',
          tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        },
        {
          id: 2,
          name: 'metrics-track',
          tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        },
        {
          id: 3,
          name: 'makasa-store',
          tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        },
        {
          id: 4,
          name: 'blazor-traffic',
          tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        },
        {
          id: 5,
          name: 'metrics-track',
          tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        },
      ]
    });

    return Promise.all([sleepThreadPromise, fetchDataPromise]).then(res => res[1]);
    }
};
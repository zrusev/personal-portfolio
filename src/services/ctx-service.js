const context = require.context('../assets/images', true, /^\.\/.*$/);

const obj = {};
context.keys().forEach((key) => {
    const name = key.split('./').pop().substring(0, key.length - 6);

    obj[name] = process.env.NODE_ENV === 'production' 
                    ? `/dist${context(key)}` 
                    : context(key);
});

export default obj;
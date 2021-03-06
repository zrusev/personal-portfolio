const context = require.context('../assets/images', true, /^\.\/.*$/);

const obj = {};
context.keys().forEach((key) => {
    const name = key.split('./').pop().substring(0, key.length - 6);

    const imgPath = context(key).replace('../../', 'images/');
    obj[name] = process.env.NODE_ENV === 'production' 
                    ? `${imgPath}` 
                    : context(key);
});

export default obj;
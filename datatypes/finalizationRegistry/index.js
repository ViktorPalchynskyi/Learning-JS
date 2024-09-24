let user = { name: 'Viktor' };

const registry = new FinalizationRegistry((helpValue) => {
    console.log(`${helpValue} was colleced by garbidge collector.`);
});

registry.register(user, user.name);

user = null;

function weakRefCache(fetchImg) {
    const imgCache = new Map();
    const registry = new FinalizationRegistry((imgName) => {
        const cachedImg = imgCache.get(imgName);
        if (cachedImg && !cachedImg.deref()) imgCache.delete(imgName);
    });

    return (imgName) => {
        const cachedImg = imgCache.get(imgName);

        if (cachedImg?.deref()) {
            return cachedImg?.deref();
        }

        const newImg = fetchImg(imgName);
        imgCache.set(imgName, new WeakRef(newImg));
        registry.register(newImg, imgName);

        return newImg;
    };
}

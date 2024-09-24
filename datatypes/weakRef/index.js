let user = { name: 'Viktor' };

const admin = new WeakRef(user);
user = null;
console.log(admin.deref());

function weakRefCache(fetchImg) {
    const imgCache = new Map();

    return (imgName) => {
        const cachedImg = imgCache.get(imgName);

        if (cachedImg?.deref()) {
            return cachedImg?.deref();
        }

        const newImg = fetchImg(imgName);
        imgCache.set(imgName, new WeakRef(newImg));

        return newImg;
    }
}
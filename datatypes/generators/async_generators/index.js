const range = {
    from: 1,
    to: 10,

    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            yield value;
        }
    },
};

// (async function () {
//     for await (const element of range) {
//         console.log(element);
//     }
// })();

async function* generateSequence(start, end) {
    console.log('Before g');

    for (let i = start; i <= end; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('After g');

        yield i;
    }
}

// (async function () {
//     for await (const element of generateSequence(4, 20)) {
//         console.log(element);
//     }
// })();

async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
        const res = await fetch(url, {
            headers: { 'User-Agent': 'Script' },
        });
        const body = await res.json();

        let nextPage = res.headers
            .get('Link')
            .match(/<(.*?)>; rel="next"/);
        nextPage = nextPage && nextPage[1];

        url = nextPage;

        for (const commit of body) {
            yield commit;
        }
    }
}

(async () => {
    let count = 0;

    for await (const commit of fetchCommits(
        'javascript-tutorial/en.javascript.info'
    )) {
        console.log(commit);

        if (++count == 100) {
            // остановимся на 100 коммитах
            break;
        }
    }
})();

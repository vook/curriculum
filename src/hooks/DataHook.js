function defer() {
  let res;
  let rej;
  const promise = new Promise(((resolve, reject) => {
    res = resolve;
    rej = reject;
  }));
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}

export const dataPromise = defer();

export let info;

function init() {
  fetch('data/info.json').then(async (res) => {
    const json = await res.json();
    info = json;
    dataPromise.resolve(json);
  });
}

init();
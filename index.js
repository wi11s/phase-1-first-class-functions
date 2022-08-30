function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction() {
    return function callback() {}
}

function returnsAnAnonymousFunction() {
    return () => {}
}
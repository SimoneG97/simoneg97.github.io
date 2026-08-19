const benchmarked = (f) => {
    const start = performance.now();
    const result = f();
    const end = performance.now();
    let measure = end - start;

    return { verdict: result, timeElapsed: measure.toFixed(3) };
};

const fibonacciCheck = (input, g) => {
    let start = g.next().value;
    while (true) {
        switch (true) {
          case start == input: return true;
          case start > input: return false;
          case start < input: start = g.next().value;
        }
    }
};

function* fibonacciIterGen() {
    for (let input = [0, 1];; input = [input[1], input[0] + input[1]]) {
        yield input[0] + input[1];
    }
}

function* fibonacciRecGen() {
    const fibonacciRec = (x) => x <= 2 ? x : fibonacciRec(x - 2) + fibonacciRec(x - 1);
    for (let input = 1;; input++) {
        yield fibonacciRec(input);
    }
}

function fibonacciPerfSquare(x) {
    const isPerfectSquare = (n) => Number.isInteger(n ** 0.5);
    return (
      isPerfectSquare(5 * (x ** 2) - 4) ||
      isPerfectSquare(5 * (x ** 2) + 4)
    );
}

addEventListener("message", (event) => {
    let result = null;
    switch (event.data.mode) {
      case "Recursive": { result = benchmarked(() => fibonacciCheck(event.data.value, fibonacciRecGen())); break; }
      case "Iterative": { result = benchmarked(() => fibonacciCheck(event.data.value, fibonacciIterGen())); break; }
      case "Perfect Square": { result = benchmarked(() => fibonacciPerfSquare(event.data.value), event.data.mode); break; }
    }
    self.postMessage({ ...result, mode: event.data.mode })
})

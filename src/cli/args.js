import {argv} from 'node:process'

const parseArgs = () => {
    const output = argv.reduce((acc, input, currentIndex) => {
        if (currentIndex < 2) return acc;
        if (currentIndex + 1 === argv.length) return acc + " is " + input;
        if (currentIndex % 2) return acc + " is " + input + ", ";
        return acc + input.slice(2);
    }, "")
    console.log(output)
};

parseArgs();
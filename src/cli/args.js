import {argv} from 'node:process'

const args = argv.slice(2)

const parseArgs = () => {
    const output = args.reduce((acc, input, currentIndex) => {
        if (currentIndex % 2) return acc + " is " + input + ", ";
        return acc + input.slice(2);
    }, "")
    console.log(output.slice(0, -2))
};

parseArgs();
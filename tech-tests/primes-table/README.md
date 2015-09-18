Coding exercise - Prime tables

How to tackle the problem
This is intended to take you an hour or two. But the aim is not to see how much you can code in a given time, it’s to see how you tackle a coding problem.

We’re looking for a high standard of coding, including:
Proof that you know the code works as intended.
Small commits to source control so that we can see how you’ve developed the code.

For the input and output you can use the console, a web page, or something else. We mainly use C# and Javascript internally, but you can use whatever programming language you like for this exercise.

You must put your code onto GitHub, otherwise we won’t consider it. We will review it from there. Please include a README file that says:
How to run it
What you’re pleased with
What you would do with it if you had more time

The requirements
Write an application that outputs a multiplication table.

The user should input a whole number N, where is N is at least 1. The application should output an N x N grid of numbers. The first row and the first column should both contain the first N prime numbers (1, 2, 3, 5, 7, etc) and every other cell should be the product of the first number in that row and that column.

For example, the 3rd prime number is 3 and the 5th prime number is 7. So the number in the 3rd row and 5th column should be 21 (because that’s 3 x 7).

That’s it.

#### Getting it running

Install nodejs from [here](https://nodejs.org/en/download/)

Run the following commands

```sh
# Install coffeescript for running the application
npm install -g coffeescript

# Install mocha for running the tests
npm install -g mocha

# Install all the local project dependencies
npm install

# Run this to start the application
npm start

# Run this to run the tests
npm test
```

#### Things that I don't like

The prime generator makes too many primes so I had to ask a slice on returning the primes.

The prompt in the program file only lets you print once, it'd be nice if it went into a program loop

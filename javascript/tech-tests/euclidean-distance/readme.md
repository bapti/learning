# Euclidean distance test

## Instructions for use

1. Open a command window at `./euclidean-distance`
2. Run `npm i` to install dependencies
3. Run `npm start` to run the program against the big file
4. Run `npm test` to run the tests for the program

## Reflections on my solution

Correctness - I believe that the program I've written hits the mark on correctness, I've written some simple tests to  prove the simple cases.

Efficiency - I've used an off the shelf K-D Tree implementation that allows for efficient querying of nearest neighbor rather than my original crude brute force loop over all places. If I'd had time I would've implemented this myself from scratch but I can't commit any more time at the moment. A further efficieny improvement would be to use node workers to farm out the nearest neighbor queries and peform them in parallel.

Elegance - I feel the program is concise and simple, program control, file reading and business logic are separated.

## Problem statement

Consider a map that has the following properties;	
	- the map is two dimensional
	- the map is perfectly square with dimensions 10000000x10000000
	- the map has an associated set of many features
	- the map does not "wrap around"
	
Each feature on the map is described by a 2D coordinate in the range (0, 0) to (10000000, 10000000). 
	
We would like to find the most isolated feature on the map, where the "most isolated feature" is the feature that is 
furthest (largest Euclidian distance) from any other feature. Because the map does not "wrap around", this should be a 
direct distance across the map.

```
<----10000000---->
 ---------------      -
| A             |     |
|               |     |
|               |  10000000
|               |     |
|          B  C |     | 	
|        E   D  |     |
 ---------------      -   
```

In the example above, A is the most isolated feature on the square map with edge length 10000000.

We would like you to write a program that reads in many features from standard input, and outputs the name of the most isolated 
feature to standard output. The format of the input is the feature name, x coordinate and y coordinate separated by spaces. 
Each feature is on a new line. There may be any number of features between 1 and 100000. The program should 
be fast, so the algorithm must be better than n^2.

Any of the following languages are cool - Python (>=2.5), C#, Ruby (>=1.9.2), ActionScript3, C++, Java, Javascript

Submissions are marked based on the following criteria

* Correctness - The program should read the input format as specified and write the correct answer to standard output.
* Efficiency - The program should be fast, i.e., the algorithm should exhibit better than n^2 growth
* Elegance - The program should be concise and simple

Two example inputs are provided; problem_small.txt should output place6 and problem_big.txt should output place55163

This exercise shouldn't take too long - if you find it is taking more than an hour or two you should consider reading this document again.

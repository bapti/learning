
Sample coding exercise
Family tree

This is intended to take you about an hour or two.

A person has two attributes: A name (string) and a sex (either male or female).

A family tree is a collection of people, plus zero or more “basic relationships”. A “basic relationship” is expressed in one of two ways: either “Person A is the parent of Person B” or “Person A is the child of person B”.

Write an application that expresses the above logic. Additionally, it must demonstrate the following constraints:
A person’s name must be at least 6 characters and no more than 100 characters. It is an error otherwise.
It is an error for the family tree to have more than one person of the same name and same sex.
It is an error to add a basic relationship to a family tree unless both participants are part of the family tree.

Add the following:
The capability to return a list of all mothers.
The capability to return a list of all fathers.
If a person has more than two parents then it is an error. If a person does have two parents then it is an error unless one is female and one is male.

(End)

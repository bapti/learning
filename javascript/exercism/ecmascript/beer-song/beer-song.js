const verses = [
  {
    rule: beers => beers > 2,
    text: beers =>
`${beers} bottles of beer on the wall, ${beers} bottles of beer.
Take one down and pass it around, ${beers - 1} bottles of beer on the wall.
`
  },
  {
    rule: beers => beers === 2,
    text: () =>
`2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`
  },
  {
    rule: beers => beers === 1,
    text: () =>
`1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
  },
  {
    rule: beers => beers === 0,
    text: () =>
`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
  },
]

const verse = beers =>
  verses
    .find(({rule}) => rule(beers))
    .text(beers)

const range = length =>
  [...Array(length+1).keys()]

const sing = (startBeers=99, endBeers=0) =>
  range(startBeers)
    .slice(endBeers-startBeers-1)
    .reverse()
    .map(verse)
    .join('\n')

export default {
  verse,
  sing
}

<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/9/2020, 9:45:20 AM

- [0-hello-world](#0-hello-world)
- [1-remove-from-array](#1-remove-from-array)
- [1-repeat-string](#1-repeat-string)
- [1-reverse-string](#1-reverse-string)
- [1-sum-all](#1-sum-all)
- [2-fibonacci](#2-fibonacci)
- [2-get-the-titles](#2-get-the-titles)
- [2-leap-years](#2-leap-years)
- [2-palindromes](#2-palindromes)
- [3-caesar](#3-caesar)
- [3-find-the-oldest](#3-find-the-oldest)
- [3-pig-latin](#3-pig-latin)
- [3-snake-case](#3-snake-case)
<!-- END TOC -->

<!-- BEGIN DOCS -->
---

## [./0-hello-world](./0-hello-world)

<a name="hello"></a>

## hello(thing) ⇒ <code>string</code>
A very simple function, it greets whatever you tell it to


**Returns**: <code>string</code> - a friendly greeting  

| Param | Type | Description |
| --- | --- | --- |
| thing | <code>string</code> | the thing to greet |

**Example**  
```js
const greeting = hello('World');
console.log(greeting); // 'Hello, World!'
```
**Test Report**
```
Started
......


2 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

<a name="removeFromArray"></a>

## removeFromArray(arr, ...args) ⇒ <code>array</code>
Implement a function that takes an array and some other arguments then removes the other arguments from that array


**Returns**: <code>array</code> - - the final array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | the initial array |
| ...args | <code>arguments</code> | the arguments to be removed |

**Example**  
```js
const removeFromArray=([1, 2, 3, 4], 3);
console.log(removeFromArray); // [1,2,4]
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-repeat-string](./1-repeat-string)

<a name="repeatString"></a>

## repeatString(str, num) ⇒ <code>string</code>
This function repeats the string a given number of times


**Returns**: <code>string</code> - - the repeated string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the initial string |
| num | <code>number</code> | number of times the string will be repeated |

**Example**  
```js
const repeatString=('Hey', 3);
console.log(repeatString); // 'HeyHeyHey'
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString(str) ⇒ <code>string</code>
This function reverses a given string


**Returns**: <code>string</code> - - the reversed string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the initial string |

**Example**  
```js
const reverseString=('Hello World');
console.log(reverseString); // 'dlroW olleH'
```
**Test Report**
```
Started
............


4 specs, 0 failures
Finished in 0.002 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll(a, b) ⇒ <code>number</code>
This function adds all the numbers inclusively between any two given numbers. Output is "ERROR" if one of the inputs in not a number


**Returns**: <code>number</code> - - the sum  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | the first number |
| b | <code>number</code> | the second number |

**Example**  
```js
const sumAll=(2, 5);
console.log(sumAll); // 14
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci(num) ⇒ <code>number</code>
This function finds nth fibonacci number, converts strings into numbers, returns "OOPS" if the number is negative.


**Returns**: <code>number</code> - - the num'th fibonacci number  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | the rank of fibonacci number |

**Example**  
```js
const fibonacci=(6);
console.log(fibonacci); // 8
```
**Test Report**
```
Started
...........................


9 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles(books) ⇒ <code>array</code>
This function gets the titles of books from an object that contains arrays of  book titles and authors


**Returns**: <code>array</code> - - an array that contains book titles  

| Param | Type | Description |
| --- | --- | --- |
| books | <code>object</code> | an object that contains arrays that contains book titles and authors |

**Example**  
```js
const const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];
getTheTitles(books) // ['Book','Book2']
```
**Test Report**
```
Started
...


1 spec, 0 failures
Finished in 0 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears(year) ⇒ <code>boolean</code>
This function finds out whether given year is a leap year or not.


**Returns**: <code>boolean</code> - - true if the year is a leap year, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>number</code> | the given year |

**Example**  
```js
const leapYears=(1600);
console.log(leapYears); // True
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes(str) ⇒ <code>boolean</code>
This function finds out whether given string is a palindrome or not.


**Returns**: <code>boolean</code> - - true if the string is a palindrome, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the given string |

**Example**  
```js
const palindromes=('Racecar');
console.log(palindromes); // True
```
**Test Report**
```
Started
...............


5 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar(str, num) ⇒ <code>string</code>
This function takes a string to be encoded and a shift factor and then returns the encoded string.
Only letters will be shifted and case of letters will be unchanged.


**Returns**: <code>string</code> - - encoded string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the given string |
| num | <code>number</code> | the shift factor |

**Example**  
```js
const caesar=('Hello, World!', 5);
console.log(caesar); // 'Mjqqt, Btwqi!'
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest(people) ⇒ <code>object</code>
This function returns the oldest person from an array of objects representing people with a birth and death year, 
If the death year isn't specified, function uses the current age.


**Returns**: <code>object</code> - - object that contains the oldest person  

| Param | Type | Description |
| --- | --- | --- |
| people | <code>array</code> | array of objects which contain three keys about people; name, year of birth, year of death(optional) |

**Example**  
```js
const people=[
      {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ];
console.log(findTheOldest); // {name:'Ray', yearOfBirth:1962, yearOfDeath:2011}
```
**Test Report**
```
Started
.........


3 specs, 0 failures
Finished in 0.002 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate(str) ⇒ <code>string</code>
This function takes the words given and turns them into pig latin.
Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.
Rule 2: If a word begins with a consonant sound, move it to the end of the word,
and then add an "ay" sound to the end of the word.
Rule 3: counts "qu" as a single phoneme
Rule 4: counts "qu" as a consonant even when its preceded by a consonant


**Returns**: <code>string</code> - - translated string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the given string |

**Example**  
```js
const translate=("the quick brown fox");
console.log(translate); // "ethay ickquay ownbray oxfay"
```
**Test Report**
```
Started
[ 'apple' ]
...[ 'banana' ]
...[ 'cherry' ]
...[ 'eat', 'pie' ]
...[ 'three' ]
...[ 'school' ]
...[ 'quiet' ]
...[ 'square' ]
...[ 'the', 'quick', 'brown', 'fox' ]
...


9 specs, 0 failures
Finished in 0.011 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase()

**Test Report**
```
Started
.F..F..F..F..F..F.

Failures:
1) snakeCase works with simple lowercased phrases
.    Expected '_____d' to equal 'hello_world'..

2) snakeCase works with Caps and punctuation
.    Expected '_______' to equal 'hello_world'..

3) snakeCase works with longer phrases
.    Expected '__________________' to equal 'this_is_the_song_that_never_ends'..

4) snakeCase works with camel case
.    Expected '____e' to equal 'snake_case'..

5) snakeCase works with kebab case
.    Expected '_____' to equal 'snake_case'..

6) snakeCase works with WTF case
.    Expected '____________' to equal 'snake_case_is_awesome'..

6 specs, 6 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->

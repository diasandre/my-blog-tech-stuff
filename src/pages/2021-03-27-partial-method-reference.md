---
layout: blog
path: /kotlin-partial-method-reference
title: Partial method reference
date: 2021-03-27T14:20:30.890Z
---
When you start working with Kotlin, as it's a programming language that mixes paradigms, it's common to build a chain of scope functions for better code.

**Disclaimer**: in version 0.13 of arrow-kt, the invoke function was depreciated, and they started recommending to use Partially and curied. For more information, check this gist ([arrow-kt-partial-method-reference.kt](https://gist.github.com/diasandre/42db29f7c7ef1fda551e0099498f079e))

I love to use method reference, whoever knows me better knows that I say this every day

But... method reference has a big problem that you can only use with functions that have one parameter.

```kotlin
val someValue = "123"

fun saveToFirebase(list: List<Item>) = service.save(list)

list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let(::saveToFirebase)
```

What happens if `saveToFirebase` functions needs to receive more than one parameter? You will need to remove method reference and use lambda.

```kotlin
val someValue = "123"

fun saveToFirebase(list: List<Item>, value: String) = service.save(list, value)

list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let { items -> saveToFirebase(items, someValue) }
```
To fix this problem, and we stay using method reference, I recommend `arrow-syntax`.

#### Installing

It's necessary to add this dependency to your project:

`implementation("io.arrow-kt:arrow-syntax:<version>")`

#### Using

It's important to remember that IntelliJ doesn't auto-import correct these functions, 
therefore, it's necessary to add `import arrow.syntax.function.invoke` import to your classes.

The function that will be called using `partial method reference` needs that the last parameter received is always the one coming from the chained methods, like in our example that receives a list of items:


```kotlin
fun saveToFirebase(value: String, list: List<Item>) = service.save(list, value)
```

And to call this function, you will need to pass the values ​​in parentheses right after the `method reference` that invokes the method.

```kotlin
list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let((::saveToFirebase)(someValue))
```

You can use `partial method reference` with any quantity of parameters **BUT I really don't recommend** to use more than two parameters, besides your code will be hard to read.

```kotlin
fun saveToFirebase(value: String, anotherValue: String, list: List<Item>) = service.save(list, value)

list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let((::saveToFirebase)(someValue)(anotherValue))
```
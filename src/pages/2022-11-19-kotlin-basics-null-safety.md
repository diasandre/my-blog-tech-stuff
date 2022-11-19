---
layout: blog
path: /kotlin-basics-null-safety
title: Kotlin basics - null safety
date: 2022-11-19T20:10:05.935Z
---
H﻿ello,

I﻿'m planning to write some posts about Kotlin, the first one is about null safety.

I﻿ read last year the book [Effective Kotlin from Marcin Moskala](https://leanpub.com/effectivekotlin), so I plan to use the book as a reference for some points and will write the item number if you want to read later.

> Item 8: Handle nulls properly
>
> In general, there are 3 ways of how nullable types can be handled.
> We can:
>
> 1. Handling nullability safely using safe call ?., smart casting, Elvis operator, etc.
> 2. Throw an error
> 3. Refactor this function or property so that it won’t be nullable

* **Null safety**

  K﻿otlin has a built-in null safety feature, so if your code throws `NullPointerException()`, it's possible that you are doing something wrong. For Kotlin to understand if some value can be null or not, put `?` after type.

  ```kotlin
  private val someValue: String? = null
  ```

  1. Y﻿ou can access attributes from some nullable value using safe call. The result value will be nullable.

     ```kotlin
     data class SomeObject(val name: String)

     private val someValue: SomeObject? = SomeObject("Andre")

     someValue.name //compilation error because someValue can be null

     someValue?.name //using safe call
     ```
  2. K﻿otlin will **smart cast** values for you. For example, when using `requireNotNull`, after that point Kotlin will recognize your value as not nullable because otherwise `IllegalArgumentException` will be thrown.

     ```kotlin
     private val someValue: String? = null

     val newValue: String = requireNotNull(someValue) //newValue will be not nullable

     if(someValue != null) { //inside if someValue will be not nullable } 
     ```
  3. You can use **Elvis operator** to handle null values. It's possible to throw exception too.

     ```kotlin
     fun example() : String? = null

     val value: String = example() ?: "another string"

     val value: String = example() ?: throw IllegalArgumentException("error")
     ```
  4. Kotlin's collections has available a lot of functions to handle nulls. 

     ```kotlin
     //when you need to first map values and filter null values after.

     list.map { it?.toString() }.filter { it != null } 

     list.map { it?.toString() }.filterNotNull()

     //prefer using less operations

     list.mapNotNull { it?.toString() } 
     ```
  5. **A﻿void using !!**, this operator only quietly hides the nullability. If the value is null, Kotlin will throw NPE. The only acceptable usage is when your project uses some java library that doesn't integrate with Kotlin.

That's it for this post, next post will be about immutability.

t﻿ks
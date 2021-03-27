---
layout: blog
path: /kotlin-partial-method-reference
title: Partial method reference
date: 2021-03-27T14:20:30.890Z
---
Quando você começa a trabalhar com kotlin, é prática comum existirem diversas cadeias de código usando scope functions. 

Para manter meu código sempre limpo e seguindo princípios do S.O.L.I.D, é comum a utilização de method reference para chamar as funções, porém é uma limitação hoje que só se pode chamar funções se a mesma possuir apenar um parâmetro.

```kotlin
val someValue = "123"

list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let(::saveToFirebase)
```



E o que acontece caso o método `saveToFirebase` precise do parâmetro `someValue`? Para isso seria necessário remover o method reference e utilizar o lambda.



```kotlin
list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let { items -> saveToFirebase(items, someValue) }
```



Para resolver esse problema, vamos utilizar o `arrow-syntax`.

#### Instalando

é necessário adicionar a dependência ao seu projeto

`implementation("io.arrow-kt:arrow-syntax:0.11.0")`
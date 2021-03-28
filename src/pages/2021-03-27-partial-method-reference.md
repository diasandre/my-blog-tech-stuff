---
layout: blog
path: /kotlin-partial-method-reference
title: Partial method reference
date: 2021-03-27T14:20:30.890Z
---
Quando você começa a trabalhar com Kotlin, por ser uma linguagem que mistura paradigmas, é comum a utilização de métodos encadeados por scope functions. 

Para se manter o código sempre limpo e seguindo princípios do S.O.L.I.D, eu gosto de utilizar method reference para a chamada dos métodos, porém existe a limitação de que só se pode chamar métodos que recebem apenas um parâmetro.

```kotlin
val someValue = "123"

fun saveToFirebase(list: List<Item>) = service.save(list)

list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let(::saveToFirebase)
```

E o que acontece caso o método `saveToFirebase` precise receber mais um parâmetro como, por exemplo o valor `someValue`? Para isso seria necessário remover o method reference e utilizar o lambda.

```kotlin
val someValue = "123"

fun saveToFirebase(list: List<Item>, value: String) = service.save(list, value)

list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let { items -> saveToFirebase(items, someValue) }
```

Para resolver esse problema e continuarmos utilizando method reference nesses casos, vamos utilizar o `arrow-syntax`.

#### Instalando

É necessário adicionar a dependência ao seu projeto

`implementation("io.arrow-kt:arrow-syntax:<version>")`

#### Utilizando

Importante destacar que o intellij não realiza o importe correto, portanto sempre que for utilizar, é necessário adicionar o seguinte import na sua classe:

`import arrow.syntax.function.invoke`

A função que vai ser chamada via `partial method reference` precisa que o último parâmetro recebido seja sempre o que está vindo dos métodos encadeados como no nosso exemplo uma lista de itens.

```kotlin
fun saveToFirebase(value: String, list: List<Item>) = service.save(list, value)
```

E para chamar essa função, você passa os valores entre parenteses logo após o `method reference` invocar o método.

```kotlin
list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let((::saveToFirebase)(someValue))
```

Esse método pode ser utilizado para qualquer quantidade de parâmetros, porém **não é recomendado.** A utilização abusiva pode deixar o código de difícil leitura.

```kotlin
fun saveToFirebase(value: String, anotherValue: String, list: List<Item>) = service.save(list, value)

list
    .filter(::checkSomeVariable)
    .also(::logItems)
    .let((::saveToFirebase)(someValue)(anotherValue))
```
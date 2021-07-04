---
layout: blog
path: /kotlin-tips-tests-and-mockito
title: "Kotlin tips: tests and mockito"
date: 2021-07-04T18:28:35.334Z
---
Just a compilation of some tips if you are writing tests with mockito and kotlin...

If you are migrating your java project with mockito, it's important to use [mockito-kotlin](https://github.com/mockito/mockito-kotlin). Mockito-kotlin was created by [nhaarman](https://github.com/nhaarman) and after incorporated to mockito project.

* **Naming your tests**: kotlin provides a way to type a phrase to your test name, like "should do something". It's better than "shouldDoSomenthing" or "should_do_something"

```kotlin
@Test
fun `should do something`() {
   //testing something
}
```

* **Mocking returns with mockito-kotlin**: It's important to remember that `Mockito.when()` uses a Kotlin reserved word, so mockito-kotlin needed to rename to `whenever()`. There are two main ways to mock returns of any service or object: `whenever` and `on`. My recommendation is to use "on" for default cases and "whenever" for test exclusive returns.

```kotlin
private val redisService: RedisService = mock() {
   on { save(any()) } doReturn UUID.randomUUID()
}

@Test
fun `should do something`() {
   whenever(redisService.save(any())) doReturn UUID.randomUUID()
}
```

* **Organize your test**: divide your test into three parts: preparation, action and verification. The preparation is when you need to mock and prepare all data for the test, the action is when you run your service function that you want to test and the verification is when you make all your asserts and verifies.

```kotlin
@Test
fun `should do something`() {
    whenever(redisService.save(any())) doReturn UUID.randomUUID()

    val actual = service.process(data)

    Assertions.assertEquals(actual, expected)
}
```

* **Inferred types**: all matchers from "mockito-kotlin" don't need to have explicit types, so for example if you use "anyInt()" from java, when writing tests with "mockito-kotlin" you only need to use "any()" and the type is inferred automatic. This only don't work when your service has multiple functions with same name and parameters with different types.

```kotlin
class Service {
    fun save(data: DataDTO): UUID {
        //do something with data
        return UUID.randomUUID()
    }

    fun save(value: Long): UUID {
        //do something with value
        return UUID.randomUUID()
    }
}

@SpringBootTest
class Test {
    private val service: Service = mock() {
        on { save(any<Long>()) } doReturn UUID.randomUUID()
        on { save(any<DataDTO>()) } doReturn UUID.randomUUID()
        on { save(any()) } doReturn UUID.randomUUID() //don`t work
    }
}
```

* **Use "with" for better assertions**: when returning some data class with a lot of attributes, it's better for readability to use "with" so this way all attributes are exposed with "this".

```kotlin
data class Person(
    val id: UUID,
    val name: String,
    val date: String,
    val age: Int,
    val address: String
)

class Service {
    fun getPerson() = Person(
        id = UUID.randomUUID(),
        name = "name",
        date = "date",
        age = 25,
        address = "address"
    )
}

@SpringBootTest
class TestSuite {

    private val service: Service = Service()

    @Test
    fun `should do something`() {
        val actual = service.getPerson()

        with(actual) {
            assertEquals(id, expected.id)
            assertEquals(name, expected.name)
            assertEquals(date, expected.date)
            assertEquals(age, expected.age)
            assertEquals(address, expected.address)
        }
    }
}
```

That's all for this post :)

Thanks
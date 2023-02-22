---
layout: blog
path: /tempo-release
title: How to manipulate dates easily? Tempo is the answer!
tags: GitHub,Kotlin
date: 2023-02-22T21:23:29.394Z
---
Hello there,

Last month I released my new Kotlin library called Tempo. As a developer, working with dates has always been a challenge due to the various options available. It requires effort to search for the correct conversion method every time. That is why I created Tempo, a library that provides extension functions for manipulation dates easily.

To use Tempo, simply call the handle function and let it do the conversion for you. Here is an example:

```
val actual: YearMonth = "2022-01-01".handle {
        input {
            pattern = LOCAL_DATE_PATTERN
        }
        output {
            type = OUTPUT_TYPE.YEAR_MONTH
        }
}
```

The handle function is an extension of String, LocalDate or Instant, and uses the Kotlin DSL for configuration. You can convert to LocalDate, Instant or YearMonth, and explicitly set the type for better handling. When converting from a string, you need to specify the input pattern configuration. Additionally, you need to add an output type configuration.

One of the best things about Tempo is that you can modify the converted date by changing the day, month, or year to a fixed day or performing an operation of plus or minus. Here is an example:

```
val actual: YearMonth = "2022-01-01".handle {
            input {
                pattern = LOCAL_DATE_PATTERN
            }
            output {
                type = OUTPUT_TYPE.YEAR_MONTH
                update {
                    day = Day(1)
                    month = Month(2, OPERATION_TYPE.PLUS)
                    year = Year(2020)
                }
            }
        }
```

Finally, you can access the source code on www.github.com/diasandre/tempo to make your own modifications or contributions to the library. Give Tempo a try, and simplify your date conversion process today!
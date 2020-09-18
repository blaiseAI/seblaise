---
title: Understanding Strings in JS
path: /understanding-strings
date: 2020-09-17
summary: I am fascinated by how data types are programmatically created. There is great elegance to the more microscopic architecture of computer logic. I have come to appreciate that continually working towards a more solid understanding of the fundamentals helps with safer programming. It also enhances my ability to code efficiently. Therefore, for this article, I will discuss a little about JavaScript’s strings.
tags: ["js", "frontend"]
---

![background](https://images.unsplash.com/photo-1513957723230-c330c6152342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2450&q=80)

## So, what are strings

For those of you who are new to programming, strings belong to a class called the primitive data types i.e. they are immutable. Immutability here refers to altering a portion of the data. However, immutability does not refer to the reassignment of its whole value. We will come back to this pertinent point shortly under the sub-header of ‘String immutability versus reassignment of value’.

But first, let’s declare our strings using a variety of modalities available. A good reference for this can be found at the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

![stringssc1](https://www.notion.so/image/https%3A%2F%2Fmiro.medium.com%2Fmax%2F2550%2F1*QUa7wre30eXVTPrK2OZAYQ.png?table=block&id=087b22a1-c4b2-4c54-9603-7ef95efd1ad3&userId=&cache=v2)

> The picture above: The different ways to instantiate a string in JavaScript.

Above, you will note the 5 different variables, each declared in a different way to generate the value of “Sally”. Next, let us compare the console.log() value of each variable along with its associated typeof.

![https://miro.medium.com/max/2584/1*lJrOVsgQBLZtO12-Mr6HIg.png](https://miro.medium.com/max/2584/1*lJrOVsgQBLZtO12-Mr6HIg.png)

> The picture above: console.log() values of each string variable and its associated typeof.

Now, let’s compare some of the variables using the strictly equal operator.

![https://miro.medium.com/max/2572/1*GNtLAYB0814UhaDaFCUjdw.png](https://miro.medium.com/max/2572/1*GNtLAYB0814UhaDaFCUjdw.png)

> The picture above: Strict comparison of variable values.

As you may notice, when strict comparisons are made, i.e. using ‘===’, the variables str1, str2, str3, and str4 are identical in value. The reason being, the primitive values were all created by the same String() function that lives globally. Conversely, str5 was created by calling the ‘new String()’ object constructor function, which in turn has created a new String() object in the memory heap. Here, the keywords being ‘String()’ as opposed to ‘new String()’. And, this newly created object is merely referenced by the variable str5. This will go on to explain why str1 is not strictly equal to the object referenced by str5, as they are of different data types. Very gently, the detail here is in the words ‘string’ versus ‘object’.

However, should we make a comparison using the ‘loosely’ equal operator, i.e. ‘==’, we will find that str1 will be equal to str5. The reason being, ‘==’ only makes a comparison of values. Unlike the strictly equal comparison operator, ‘==’ does not compare the data types.

![https://miro.medium.com/max/2586/1*zxpAwPvOzjI7kRkQiLZpFA.png](https://miro.medium.com/max/2586/1*zxpAwPvOzjI7kRkQiLZpFA.png)

> The pic above: Comparison ‘==’ operator of str1 and str5 yields a ‘true’.

# **Using the Chrome console to study str1 and str5**

Should you decide to study the differences further, I encourage you to utilize the Google Chrome JavaScript Console (at the top of your Chrome tab: View > Developer > JavaScript Console). This browser tool readily accepts JavaScript code and you can witness the output of your code immediately without needing to run a Node JS environment on your local computer. You can clear the browser console as needed by entering ‘command-K’.

Now, let us declare str1 with string literals, and examine it in the Chrome console. We will notice that when str1 is entered in the console, it simply logs the value “Sally”.

![https://miro.medium.com/max/1068/1*-7X02kU6T2R-nslFnnQ5jQ.png](https://miro.medium.com/max/1068/1*-7X02kU6T2R-nslFnnQ5jQ.png)

> The pic above: Declaration and inspection of str1, declared using string literals.

Below, you will witness a declaration of str5 made with the ‘new String()’ object constructor function. When str5 is entered, notice how the console displays an object with a variety of nested properties attached to it. It is code-heavy.

![https://miro.medium.com/max/868/1*MxOEsr8J3xcUxsXMYXM89A.png](https://miro.medium.com/max/868/1*MxOEsr8J3xcUxsXMYXM89A.png)

> The pic above: Declaration and inspection of str5, declared using ‘new String()’.

# **Current best practice to string instantiation**

According to the well-reputed [W3Schools](https://www.w3schools.com/js/js_objects.asp), it is best to avoid the ‘new String()’ object constructor function. The reason being, it complicates our code and slows down execution speed. The process is expensive and utilizes more memory than is necessary when simply declaring a string.

It is, therefore, best to declare strings using string literals.

# **String immutability versus reassignment of value**

As mentioned earlier, I will now attempt to show you what string immutability is, as opposed to the reassignment of value.

![https://miro.medium.com/max/1428/1*wmDgm2MruL9DrNV4SUPpVw.png](https://miro.medium.com/max/1428/1*wmDgm2MruL9DrNV4SUPpVw.png)

> The picture above: Comparison of mutation versus reassignment of value

In the example above, str1 is first declared as “Sally”. Then, a console.log() of the string at index-0 is made and this returns the letter “S”. Next, I attempt to mutate the value of str1[0] with the value “J”. However, note how JavaScript simply disregards my attempt to mutate it as when str1 is entered again, the original value of “Sally” persists. This is what is meant by string immutability.

However, in the following step, I reassign the value to str1 to “Mandy”. When str1 is entered in the console, a new value for str1 is returned i.e. “Mandy”.

# **In summary**

In this article, I have merely scratched the surface of a rather profound subject matter. Nonetheless, I hope you may better appreciate the subtle differences in string declarations. Hopefully, this may prompt greater research and careful deliberation when we next declare the humble yet mighty JavaScript string.

Thank you for reading.👋🏼

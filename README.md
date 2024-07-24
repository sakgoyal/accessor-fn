# Accessor function

[![Build Size][build-size-img]][build-size-url]

A wrapper for property accessors supporting functions, property strings or constant values.

## Quick start

```js
import { accessorFn } from 'accessor-fn';
```

## Usage example

Given an object, Use `accessorFn` to access object values via property strings or transformation functions:

```js
const obj = {
    a: 1,
    b: 2
}

const aFn = accessorFn('a');
aFn(obj); // 1

const sumFn = accessorFn(d => d.a + d.b);
sumFn(obj); // 3

const constantFn = accessorFn(7);
constantFn(obj); // 7
```

[build-size-img]: https://img.shields.io/bundlephobia/minzip/accessor-fn-2
[build-size-url]: https://bundlephobia.com/result?p=accessor-fn-2

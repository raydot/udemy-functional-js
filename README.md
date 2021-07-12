# UDEMY-FUNCTIONAL-JS

Working through Steven Hancock's Udemy course on functional programming in Javascript

## Notes:

Section 4 covers cloning objects. It turns out `JSON.parse(JSON.stringify(foo))` for deep copying JS objects has limitations!

- It will not copy all data types ([Stack Overflow's Definitive Answer on the Subject](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/122704#122704))
- [Lodash](https://lodash.com) has a function called [cloneDeep()](https://lodash.com/docs/4.17.15#cloneDeep)
- [rfdc](https://github.com/davidmarkclements/rfdc) is faster than cloneDeep()

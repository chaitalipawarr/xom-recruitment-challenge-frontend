# Front-end / Recruitment Challenge

This challenge exists to check your developer capabilities.

Please fork your result via [Stackblitz](https://stackblitz.com/edit/angular-ivy-xouktd?file=README.md) and send the link of your Stackblitz fork back to us. Comments and thoughts you have on this challenge are always welcome.

Thanks, have fun and success.

---

## Solve:

The mocked server of this application provides a hidden message.
If you're able to solve to upcoming steps the solution will be yours!

### Task 1:

Access the data which our mocked server provides.

### Task 2:

Convert the hex color codes to rgb values. Please refer to the lib [hex-rgb](https://www.npmjs.com/package/hex-rgb) which as already registered at this application. Every value exept the alpha value should be copied to a new Array which contains all converted RGB values in a flat structure. Just to be sure... This means that all values should be aligned at the same level, so they are not nested ;-)

Conversion Example:

1. ```javascript
   ["8200fd", "FFFFFF"];
   ```
2. ```javascript
   [
     { alpha: 1, blue: 130, green: 0, red: 251 },
     { alpha: 1, blue: 255, green: 255, red: 255 },
   ];
   ```
3. ```javascript
   [130, 0, 251, 255, 255, 255];
   ```

### Task 3:

The array which contains all values should now be cleaned up from all multiple occuring values.

### Task 4:

Please sort the filtered array in an descending order.

### Task 5:

Transform the leftover values from their decimal reprentation into their ASCII counterpart and display the final array as string.

Tip:
ASCII translation can be done with: `String.fromCharCode`

Conversion Example:

1. ```javascript
   [65, 66, 67];
   ```
2. ```javascript
   ["A", "B", "C"];
   ```
3. ```javascript
   "ABC";
   ```

---

## Create:

### Task 6:

Create a new component which offers you a angular material input field. It should access the revealed hidden message as it's required text content. Every other entered value should cause the input field to reveal it's error status and a hint or message of the required text.

---

## Fix (optional):

### Task 7:

The root component has a member called "isTask7". Please set this value to true and try so solve this problem. Every solution is welcome but... the underlying notion of this task points at a certain perspective of JavaScript's way to arrange references. If you understand this concept the solution doesn't need that much adjustment.

> The joinAttribute function was not getting proper scope of "this". Thus the issue is fixed by using arrow function which gives appropriate lexical scope and resolves "greeting" value.

### Task 8:

You're always welcome to apply the boy-scout rule to those parts of this code base where this is necessary for you :-)

> Following updates done to project
>
> 1. Components and services are unit tested with 100% code coverage
> 2. Upgraded to Angular v15
> 3. Refactored code

---

END

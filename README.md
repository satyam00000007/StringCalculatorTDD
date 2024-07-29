# StringCalculatorTDD

## Project Details

Live Url : <https://satyam00000007.github.io/StringCalculatorTDD/>

### Steps Keep In Mind:

1.  Create a simple String calculator with a method signature like this:

        int add(string numbers)

    - **Input:** a string of comma-separated numbers
    - **Output:** an integer, sum of the numbers

    **Examples:**

    - **Input:** “”, **Output:** 0
    - **Input:** “1”, **Output:** 1
    - **Input:** “1,5”, **Output:** 6

2.  Allow the `add` method to handle any amount of numbers.
3.  Allow the `add` method to handle new lines between numbers (instead of commas). (`"1\n2,3"` should return `6`)
4.  Support different delimiters:

    - To change the delimiter, the beginning of the string will contain a separate line that looks like this: `"//[delimiter]\n[numbers…]"`. For example, `"//;\n1;2"` where the delimiter is `";"` should return `3`.

5.  Calling `add` with a negative number will throw an exception: `"negative numbers not allowed <negative_number>"`.

    - If there are multiple negative numbers, show all of them in the exception message, separated by commas.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

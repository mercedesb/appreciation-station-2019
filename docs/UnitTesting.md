# Unit Testing

## What is a unit test?

A **unit test** tests the smallest piece of code that can be logically isolated in a system. A _unit_ is usually a public method or function on an interface (class, component, etc). But depending on this system, a unit may be a line of code, a class, or in some cases a module.

In the hierarchy of software testing, unit tests are at the bottom.

Unit testing -> Integration testing -> System testing -> Acceptance testing

Unit tests are typically automated and run by developers and/or a continuous integration tool. They should be able to be run in isolation without dependencies on anything external (no databases, APIs, libraries, etc). We use mocks, stubs, and spies to make this happen.

## Why should we unit test?

Unit testing **does not necessarily** catch bugs. It helps test and prevent regressions (a regression is a bug that is introduced after some change, like a code update, occurs). If you make a code change and your tests start failing, you introduced an unintended side-effect which could potentially be a bug.

If you find a bug, you should write a test that exposes the bug. Then when you fix the bug, the test should be green. You've now documented in your code what the bug was, and how/when you fixed it.

Unit tests are also a great way to document your code. Because you're testing expected behavior in your application, they do a good job communicating to the next developer what your code does.

## What should we unit test?

In order to make our tests maintainable and resilient, we should test behaviors and not implementation. Our unit tests should not care what happens inside the unit. The function or method we're testing should be a black box and we should only concern ourselves with the input we're passing to the method and the output we get back.

This allows us to change the implementation details without changing our tests.

## How should we unit test?

Most unit tests follow a basic recipe (though it's not usually explicitly called out in the code you see).

1) Arrange - set up any preconditions for the test
2) Act - run the unit that you're testing
3) Assert - test that what actually happened is what you expect

## Create React App & Jest

Create React App uses [Jest](https://jestjs.io/) as its test runner by default. 

Jest will look for
test files with any of the following conventions

- Files with `.js` suffix in `__tests__` folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

## Jest Globals

To create tests, add `it()` (or `test()` blocks, they're the same thing. I prefer `it()`, because the code feels more readable to me.) `it()` blocks should wrap your actual test and assertions.

If you have a group of tests that seem logically connected, such as all testing different conditions on the same method, you can wrap them in a `describe()` block. This makes your test files easier to understand.

For more info about Create React App and Jest, see [their testing docs](https://facebook.github.io/create-react-app/docs/running-tests).

## Jest Matchers

Jest provides a built-in `expect()` global function for making assertions. They have an extensive library of matchers to test equality, "similarity", truthy/falsy, object shape, function calls, and more. Check out [the docs for more info](https://jestjs.io/docs/en/expect.html#content).

## Workshop Activity: Our first unit test

Checkout branch `1a-first-unit-test`.
```
git checkout 1a-first-unit-test
```

Let's create a sum function in our `App.test.js` file
```
function sum(a, b) {
  return a + b;
}
```

Now let's test it.

```
describe("sum", () => {
  it("should add 2 positive numbers", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
```

And run the tests 
```
yarn test
```

How would we test adding negative numbers? 0? What happens and should happen if we try to add a string and a number?

To see the finished activity for testing `sum()`, checkout branch `1b-first-unit-test`.
```
git checkout 1b-first-unit-test
```

## Enzyme

[Enzyme](https://airbnb.io/enzyme/) is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can use Enzyme's [`shallow()` rendering API](https://airbnb.io/enzyme/docs/api/shallow.html) to test components in isolation.

Enzyme is really powerful and ships with many many utility methods to make testing your React components easier. 

## Workshop Activity: Using Enzyme to test Class Components

Checkout branch `2a-test-with-enzyme`. This branch already has Enzyme installed and configured and some boilerplate code in our first test file to save us some typing time.
```
git checkout 2a-test-with-enzyme
```

Let's write our first snapshot test using Enzyme's shallow rendering. Shallow rendering will not render child components and is useful to ensure that your tests aren't relying on the behavior of the component's children. 

```
describe("ThankYouCard", () => {
  describe("#render", () => {
    it("matches snapshot", () => {
      subject = shallow(
        <ThankYouCard
          member={testMember}
          message={testMessage}
          backgroundImage={testBgdImage}
          prevArrow={renderPrevArrow}
          nextArrow={renderNextArrow}
        />
      );
      expect(subject).toMatchSnapshot();
    });
  });
});
```

And run the tests
```
yarn test
```

You should see a message about how a snapshot was updated. Let's take a look at the file. Open `src/components/__tests__/__snapshots__/ThankYouCard.test.js.snap`. In this file, you will see what Jest is comparing the shallow rendered component to in each subsequent test. If you change the markup of your component, your next test run will fail until you update your snapshot.

Now before we write some instance tests, checkout branch `2c-test-with-enzyme`. This branch has cleaned up some more boilerplate code for us so we have to type even less :)
```
git checkout 2c-test-with-enzyme
```

Next, let's test ThankYouCard's `setCanvasSize` method. We want to test that it updates the canvas's width and height.
```
describe("#setCanvasSize", () => {
    it("updates the canvas width and height", () => {
      let canvas = {};
      const width = 200;
      const height = 100;

      subject.instance().setCanvasSize(canvas, width, height);
      expect(canvas.width).toEqual(width);
      expect(canvas.height).toEqual(height);
    });
  });
```

And run the tests
```
yarn test
```

We are using Enzyme's `.instance()` method to access the component's class instance so we can test individual methods on the class. Note that as of React 16, `instance()` returns null for functional components so only use this strategy with class components. For more info, [check out the docs](https://airbnb.io/enzyme/docs/api/ReactWrapper/instance.html)

To see the finished activity for testing ThankYouCard using Enzyme along with some additional unit test examples using a variety of Jest matchers, checkout branch `2d-test-with-enzyme`.
```
git checkout 2d-test-with-enzyme
```

## React Testing Library

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) is a library for testing React components in a way that resembles the way the components are used by end users.

React Testing Library's main goal is to help you write maintainable tests for your components. Unlike Enzyme, it does not allow you to easily test implementation details and encourages you to test behavior and functionality. Rather than dealing with instances of rendered react components, your tests will work with actual DOM nodes.

## Workshop Activity: React Testing Library & Functional Components

Checkout branch `3a-test-with-react-testing-library`. This branch already has React Testing Library installed and some boilerplate code in our first test file to save us typing time.
```
git checkout 3a-test-with-react-testing-library
```

Let's write our first render test using React Testing Library's render method. We want to test that the AppreciationStation component renders a ThankYouCard by default.
```
describe("AppreciationStation", () => {
  describe("#render", () => {
    it("renders a thank you card by default", () => {
      const { getByLabelText } = render(
        <AppreciationStation thankYous={mockThankYous} />
      );

      const thankYouCanvas = getByLabelText(/thank you test member/i);
      expect(thankYouCanvas).not.toBeNull();
    });
  });
});
```

And run the tests
```
yarn test
```

Following Kent C. Dodds philosophy (author of React Testing Library), we want to test only the user visible results of events and actions.

So, let's add a test for the behavior when we click the next button. Because it increments the index of the visible ThankYouCard in state, we test that a different ThankYouCard rendered.

In many cases, particulary Enzyme tests, you would see the unit test assert the state of the component. This tends to violate the philosophy of unit testing since state is an internal implementation detail of the component.
```
describe("clicking next", () => {
  it("displays the next thank you card", () => {
    const { getByLabelText, getByAltText } = render(
      <AppreciationStation thankYous={mockThankYous} />
    );

    const nextButton = getByAltText(/go to next/i);
    fireEvent.click(nextButton);

    const thankYouCanvas = getByLabelText(/thank you test member 2/i);
    expect(thankYouCanvas).not.toBeNull();
  });
});
```

To see the finished activity for testing AppreciationStation using React Testing Library along with some additional unit test examples, checkout branch `3d-test-with-react-testing-library`.
```
git checkout 3d-test-with-react-testing-library
```
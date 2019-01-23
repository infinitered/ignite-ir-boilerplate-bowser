# Detox End-To-End Testing

## Setup

To get your Detox tests up and running, you'll need to install some global dependencies:

1. Install the latest version of [Homebrew](https://brew.sh/)
2. Make sure you're running node 8.6.0 or higher. If you aren't, you can run:

```bash
nvm install 8.6.0
```

or

```bash
brew update && brew install node 8.6.0
```

3. Install `applesimutils, which will allow Detox to communicate with the iOS simulator:

```bash
brew tap wix/brew && brew install applesimutils
```

4. Install `fbsimctl`

```bash
brew tap facebook/fb
```

5. Install the Detox CLI

```bash
  yarn global add detox-cli
```

## Adding tests

We've gotten you started with `./e2e/firstTest.spec.js`, which tests that the two main example screens render properly.

Note that in order to pick up elements by ID, we've added the `testID` prop to the component.

## Running tests

1. Run the app

```
react-native run-ios
```

2. Run the tests

```
yarn test:e2e
```

For more information, make sure to check out the official [Detox Docs](https://github.com/wix/Detox/blob/master/docs/README.md)
# Workshop Environment Setup

To follow along in the workshop, you will need a working computer and development environment. We've called out all the tools that you will need below.

The command line tools, like the Git CLI, are required to complete the workshop and should be downloaded ahead of time. 

In an effort to make the workshop run as smoothly as possible, we've also tried to outline all the tools that will be used by the facilitator during the workshop. You do not need to use the same setup as the facilitator but may find it useful as you follow along.

## Command Line Tools

### Homebrew

If you don't have the tools below (Yarn, Git CLI, Heroku CLI), [Homebrew](https://brew.sh/) is an easy tool for installing the packages.

To install Homebrew, follow the directions on their homepage. As of June 9, 2019, it's just running the following command.
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Yarn

To download Yarn
```
brew install yarn
```

### Git *required

To download the Git CLI, follow [the directions here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#_installing_on_macos).

### Heroku *required

To download the [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
```
brew tap heroku/brew && brew install heroku
```

**Make sure you have a Heroku account and have logged in via the CLI using the `heroku login` command.**

## IDE *required

You will need to have some kind of IDE or text editor installed that you are comfortable with. Common options include VSCode, Sublime, Atom, or even Vim.

The facilitator will be using VSCode. You do not have to use the same IDE, but here is some info about how the facilitator's VSCode is setup if you find that helpful.

### Facilitator VSCode Configuration

#### Settings.json

The following settings in the facilitator's VSCode change some default behavior and you may notice it during the workshop.

`"files.autoSave": "onFocusChange"` - File will be saved automatically whenever you navigate away from the file.

`"editor.formatOnSave": true` - File will be autoformatted according to configuration when saved.

```
{
  "files.autoSave": "onFocusChange",
  "[javascript]": {
    "editor.formatOnSave": true,
  }
}
```

#### Installed Extensions

Prettier - Code formatter

An extension to format your javascript code. Will use Prettier's default configuration.

#### Snippets

Snippets are little text shortcuts that will autofill text that you find yourself writing over and over. During this workshop, you may see the facilitator use the following snippets.

For example, typing `it(` + ENTER will autofill the template for Jest's `it` block.
```
{
  "test assertion (it)": {
    "prefix": "it(",
    "body": [
      "it(\"$1\", () => {",
      "$0",
      "})"
    ],
    "description": "jest it assertion"
  },
  "test describe": {
    "prefix": "describe(",
    "body": [
      "describe(\"$1\", () => {",
      "$0",
      "})"
    ],
    "description": "jest describe block"
  },
  "debugger": {
    "prefix": "db",
    "body": [
      "debugger"
    ],
    "description": "debugger"
  }
}
```

### Facilitator Bash customizations

I use `git-completion` to give me autocomplete on Git branch names while typing into the terminal.

I used [this StackExchange answer](https://apple.stackexchange.com/a/92637) to configure `git-completion` for bash.

## Project setup *required

You will need to set up this project to follow along in the workshop. Please refer to the [setup instructions in the README](../README.md#Setup).

# MainCharecters npm-package

Main Charecters M-C-loud

## Description

This is a simple npm package named "maincharecters" that provides information about Pokemon characters.

## Installation

You can install the package globally using npm:

```bash
npm install -g maincharecters
```

## Usage

After installation, you can run the following command to get information about a Pokemon character:

```bash
maincharecters --pokemon=charmander
```

This will provide details about the specified Pokemon character.

## Dependencies

This package uses the following dependencies:

- yargs
- inquirer@8.2.5

You don't need to install them separately; npm will handle the dependencies during installation.

## Development

If you want to contribute or run the package locally for development, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
cd maincharecters
```

2. Install dependencies:

```bash
npm install
```

3. Run the package:

```bash
npm link
maincharecters --pokemon=charmander
```

This will run the package locally.



This README provides information on installation, usage, dependencies, development, and the license. Adjust it according to the specifics of your package.
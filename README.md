# GitHub Web Interface Tests

## Description
This repository contains automated tests for interacting with GitHub's web interface using Selenium.

## Files
- `tests/test_github_web.py`: Contains the test cases for GitHub web interface.
- `.github/workflows/web_tests.yml`: GitHub Actions workflow file to run the tests.
- `requirements.txt`: List of dependencies required for the tests.

## Requirements
- `npm init -y`: initialize a new Node.js project
- `npm install --save-dev typescript ts-node ts-jest @types/node @types/jest jest jest-environment-node jest-environment-selenium selenium-webdriver`: install the necessary packages for Selenium, WebDriver, TypeScript, and Jest

## Running Tests
The tests are automatically run by GitHub Actions whenever there is a push to the main branch. Make sure to set repository secrets named `USERNAME` and `PASSWORD` with your GitHub credentials to authenticate the web interactions.

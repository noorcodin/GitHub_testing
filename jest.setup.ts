import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import * as dotenv from 'dotenv';

dotenv.config();

let driver: WebDriver;

beforeAll(async () => {
  const options = new Options();
  options.addArguments('--headless');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
});

afterAll(async () => {
  await driver.quit();
});

export { driver, By, until };

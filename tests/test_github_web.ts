import { driver, By, until } from '../jest.setup';

const USERNAME = process.env.USERNAME as string;
const PASSWORD = process.env.PASSWORD as string;
const REPO_URL = 'https://github.com/noorcodin/GitHub_testing';

if (!USERNAME || !PASSWORD) {
  throw new Error('USERNAME and PASSWORD environment variables must be set');
}

describe('GitHub Web Interface Tests', () => {
  it('should log in to GitHub', async () => {
    await driver.get('https://github.com/login');
    await driver.findElement(By.name('login')).sendKeys(USERNAME);
    await driver.findElement(By.name('password')).sendKeys(PASSWORD);
    await driver.findElement(By.name('commit')).click();
    await driver.wait(until.titleContains('GitHub'), 5000);
    const title = await driver.getTitle();
    expect(title).toContain('GitHub');
  });

  it('should navigate to a repository', async () => {
    await driver.get(REPO_URL);
    await driver.wait(until.titleContains('GitHub_testing'), 5000);
    const title = await driver.getTitle();
    expect(title).toContain('GitHub_testing');
  });
});

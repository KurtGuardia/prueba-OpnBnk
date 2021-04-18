import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
const puppeteer = require('puppeteer');

// --- SI SE ABRIÓ EN OTRO PUERTO CAMBIAR LA URL CORRECTA ----
const URL = 'http://127.0.0.1:3000/';
const phantomBrowser = {
  headless: false,
  slowMo: 80,
  args: ['--window-size=900,900'],
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// E2E Testing

test('Normal behaviour with negative API call', async () => {
  const browser = await puppeteer.launch(phantomBrowser);
  const page = await browser.newPage();
  await page.goto(URL);

  //First page
  await page.click('label#privacy');
  await page.click('button#next');
  //Second page
  await page.click('input#main-password');
  await page.type('input#main-password', 'pruebaKO123');
  await page.click('input#repeat-password');
  await page.type('input#repeat-password', 'pruebaKO123');
  //Passwords match comparisson
  const password = await page.$eval('#main-password', (el) => el.value);
  const passwordRepeat = await page.$eval('#repeat-password', (el) => el.value);
  expect(password).toEqual(passwordRepeat);

  await page.click('button#next');
}, 10000);

test('Normal behaviour with positive API call', async () => {
  const browser = await puppeteer.launch(phantomBrowser);
  const page = await browser.newPage();
  await page.goto(URL);

  //First page interaction
  await page.click('label#privacy');
  await page.click('button#next');
  //Second page interaction
  await page.click('input#main-password');
  await page.type('input#main-password', 'pruebaOK1');
  await page.click('input#repeat-password');
  await page.type('input#repeat-password', 'pruebaOK1');
  const password = await page.$eval('#main-password', (el) => el.value);
  const passwordRepeat = await page.$eval('#repeat-password', (el) => el.value);
  //Password requirements
  expect(password).toMatch(/^(?=.*\d)(?=.*[a-zA-Z]).{8,24}$/);
  //Passwords match comparisson
  expect(password).toEqual(passwordRepeat);

  await page.click('button#next');
}, 10000);

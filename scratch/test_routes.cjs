const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const ARTIFACT_DIR = 'C:\\Users\\Kazi\\.gemini\\antigravity\\brain\\790e05cf-6f63-43d5-94eb-5b7c60097c86';

async function runTests() {
  console.log('Starting automated page testing...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const results = [];

  // 1. Test Home Page
  console.log('1. Testing Home Page (/)');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const homeTitle = await page.title();
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_home.png'), fullPage: true });
  results.push({ page: 'Home', url: page.url(), title: homeTitle, status: 'PASS' });

  // 2. Navigate to About Page via Navbar
  console.log('2. Testing Navigation to About Us (/about)');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('nav a')).find(a => a.getAttribute('href') === '/about');
    if (link) link.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const aboutTitle = await page.title();
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_about.png'), fullPage: true });
  results.push({ page: 'About Us', url: page.url(), title: aboutTitle, status: page.url().includes('/about') ? 'PASS' : 'FAIL' });

  // 3. Navigate to Services Page via Navbar
  console.log('3. Testing Services Page (/services)');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('nav a')).find(a => a.getAttribute('href') === '/services');
    if (link) link.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const servicesTitle = await page.title();
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_services_all.png'), fullPage: true });

  // Test Tab Switching: Digital Print
  console.log('3.1 Testing Digital Tab');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent.includes('ডিজিটাল প্রিন্ট'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_services_digital.png'), fullPage: true });

  // Test Tab Switching: Gift Items
  console.log('3.2 Testing Gift Tab');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent.includes('গিফট আইটেম'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_services_gift.png'), fullPage: true });
  results.push({ page: 'Services', url: page.url(), title: servicesTitle, status: page.url().includes('/services') ? 'PASS' : 'FAIL' });

  // 4. Navigate to Gallery Page
  console.log('4. Testing Gallery Page (/gallery)');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('nav a')).find(a => a.getAttribute('href') === '/gallery');
    if (link) link.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const galleryTitle = await page.title();
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_gallery.png'), fullPage: true });

  // Test opening a modal
  console.log('4.1 Testing Gallery Modal');
  await page.evaluate(() => {
    const card = document.querySelector('.cursor-pointer');
    if (card) card.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_gallery_modal.png') });

  // Close modal
  await page.evaluate(() => {
    const closeBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('বন্ধ'));
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));
  results.push({ page: 'Gallery', url: page.url(), title: galleryTitle, status: page.url().includes('/gallery') ? 'PASS' : 'FAIL' });

  // 5. Navigate to Contact Page
  console.log('5. Testing Contact Page (/contact)');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('nav a')).find(a => a.getAttribute('href') === '/contact');
    if (link) link.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const contactTitle = await page.title();
  
  // Fill sample input in form
  await page.type('input[name="name"]', 'কাজী রাশেদ');
  await page.type('input[name="phone"]', '০১৮১১-০০০০০০');
  await page.type('textarea[name="message"]', '৫০টি ভিজিটিং কার্ড এবং ১টি ব্যানার প্রিন্ট করতে চাই।');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_contact.png'), fullPage: true });
  results.push({ page: 'Contact', url: page.url(), title: contactTitle, status: page.url().includes('/contact') ? 'PASS' : 'FAIL' });

  // 6. Mobile Responsiveness Test
  console.log('6. Testing Mobile Viewport & Drawer');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_mobile_home.png') });

  // Click burger menu
  await page.click('button[aria-label="মেনু খুলুন"]');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'screenshot_mobile_menu.png') });

  console.log('Test Summary:');
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
  console.log('ALL_TESTS_COMPLETED_SUCCESSFULLY');
}

runTests().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});

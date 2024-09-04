/* eslint-disable no-undef */
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const axios = require('axios');
const { JSDOM } = require('jsdom');

const url = 'https://www.psacard.com/cert/91676126'

// async function getHTML() {
//     try {
//         const res = await fetch(url, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
//             }
//         });
//         const html = await res.text();
//         console.log(html)

//         const $ = cheerio.load(html);
//         const grade = $("#mainContent > div > table").text(); // Adjust this selector as necessary
//         console.log('Scraped grade:', grade);

//     } catch (error) {
//         console.error(error)
//     }
// }

async function getHTML(params) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--window-size=1,1',
                '--disable-background-networking',
                '--disable-background-timer-throttling',
                '--disable-backgrounding-occluded-windows',
                '--disable-renderer-backgrounding',
            ]
        });
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36');
        await page.goto('https://www.psacard.com/cert/91676126', { waitUntil: 'networkidle2' });

        const html = await page.content();
        await browser.close();

        const $ = cheerio.load(html);
        const gradeText = $("#mainContent > div > table").text().trim();
        const data = {};
        const lines = gradeText.split('\n').map(line => line.trim()).filter(line => line);

        // Manually mapping the keys
        lines.forEach(line => {
            if (line.startsWith('Certification Number')) {
                data["Certification Number"] = parseInt(line.replace(/\D/g, ''));
            } else if (line.startsWith('Label Type')) {
                data["Label Type"] = line.split('Label Type')[1].trim();
            } else if (line.startsWith('Reverse Cert Number/Barcode')) {
                data["Reverse Cert Number / Barcode"] = line.split('Reverse Cert Number/Barcode')[1].trim();
            } else if (line.startsWith('Year')) {
                data["Year"] = parseInt(line.replace(/\D/g, ''));
            } else if (line.startsWith('Brand')) {
                data["Brand"] = line.split('Brand')[1].trim();
            } else if (line.startsWith('Sport')) {
                data["Sport"] = line.split('Sport')[1].trim();
            } else if (line.startsWith('Card Number')) {
                data["Card Number"] = parseInt(line.replace(/\D/g, ''));
            } else if (line.startsWith('Player')) {
                data["Player"] = line.split('Player')[1].trim();
            } else if (line.startsWith('Variety/Pedigree')) {
                data["Variety / Pedigree"] = line.split('Variety/Pedigree')[1].trim();
            } else if (line.startsWith('GradeMINT')) {
                data["GradeMINT"] = parseInt(line.replace(/\D/g, ''));
            }
        });


        console.log(JSON.stringify(data, null, 4));

    } catch (error) {
        console.error('Error fetching HTML with Puppeteer:', error.message);
    }
}

getHTML();
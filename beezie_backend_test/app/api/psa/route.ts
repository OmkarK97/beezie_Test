import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const serialNumber = searchParams.get("serialNumber");
  console.log(serialNumber);
  const url = `https://www.psacard.com/cert/${serialNumber}`;

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--window-size=1,1",
        "--disable-background-networking",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-renderer-backgrounding",
      ],
    });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
    );
    await page.goto(url, {
      waitUntil: "networkidle2",
    });

    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);
    const gradeText = $("#mainContent > div > table").text().trim();
    const data: any = {};
    const lines = gradeText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    lines.forEach((line) => {
      if (line.startsWith("Certification Number")) {
        data["Certification_Number"] = parseInt(line.replace(/\D/g, ""));
      } else if (line.startsWith("Label Type")) {
        data["Label Type"] = line.split("Label Type")[1].trim();
      } else if (line.startsWith("Reverse Cert Number/Barcode")) {
        data["Reverse Cert Number / Barcode"] = line
          .split("Reverse Cert Number/Barcode")[1]
          .trim();
      } else if (line.startsWith("Year")) {
        data["Year"] = parseInt(line.replace(/\D/g, ""));
      } else if (line.startsWith("Brand")) {
        data["Brand"] = line.split("Brand")[1].trim();
      } else if (line.startsWith("Sport")) {
        data["Sport"] = line.split("Sport")[1].trim();
      } else if (line.startsWith("Card Number")) {
        data["Card Number"] = parseInt(line.replace(/\D/g, ""));
      } else if (line.startsWith("Player")) {
        data["Player"] = line.split("Player")[1].trim();
      } else if (line.startsWith("Variety/Pedigree")) {
        data["Variety / Pedigree"] = line.split("Variety/Pedigree")[1].trim();
      } else if (line.startsWith("Grade")) {
        data["Grade"] = line.split("Grade")[1].trim(); // Ensure the whole grade string is captured
      }
    });

    return Response.json({
      data,
    });
  } catch (error: any) {
    console.error("Error fetching HTML with Puppeteer:", error.message);
  }
}

import { Elysia } from "elysia";
import puppeteer from "puppeteer";

const PORT = 3000;

const app = new Elysia()
  .get("/scrap", async ({ query, set }) => {
    let url = query.url;

    if (!url) {
      set.status = 400;
      return { error: "URL is a required parameter" };
    }

    if (!url.includes("http://") && !url.includes("https://")) {
      url = `https://${url}`;
    }

    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle2" });

      const screenshot = await page.screenshot({
        type: "png",
        captureBeyondViewport: true,
        fullPage: true,
      });

      const title = await page.title();
      console.log(`Title of the page: ${title}`);

      await browser.close();

      set.headers["content-type"] = "image/png";
      return screenshot;
    } catch (error) {
      console.error("Error during screenshot:", error);
      set.status = 500;
      return { error: "Failed to take screenshot" };
    }
  })
  .listen(PORT, () => {
    console.log(`🧠 Server running at http://localhost:${PORT}`);
  });

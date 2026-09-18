import sharp from "sharp";

const src = "public/images/mohammed-attallah-automation-technical-leader.jpg";
const out = "public/images/portrait/mohammed-attallah-automation-technical-leader.avif";

const targetWidth = 1000;
const targetHeight = 1250; // 4:5

await sharp(src)
  .resize({
    width: targetWidth,
    height: targetHeight,
    fit: "cover",
    position: "top",
  })
  .sharpen({ sigma: 0.5 })
  .avif({ quality: 50, effort: 6 })
  .toFile(out);

const meta = await sharp(out).metadata();
console.log(
  "Generated:",
  out,
  JSON.stringify({ width: meta.width, height: meta.height, format: meta.format, size: meta.size })
);

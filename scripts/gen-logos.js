const fs = require("fs");
const zlib = require("zlib");

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ -1) >>> 0;
}

function writePng(path, width, height, pixels) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  function chunk(type, data) {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, "ascii");
    const chunkData = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(chunkData), 0);
    return Buffer.concat([length, chunkData, crc]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (width * 4 + 1);
    raw[rowStart] = 0;
    for (let x = 0; x < width; x++) {
      const p = pixels[y][x];
      const idx = rowStart + 1 + x * 4;
      if (p) {
        raw[idx] = p[0];
        raw[idx + 1] = p[1];
        raw[idx + 2] = p[2];
        raw[idx + 3] = p[3];
      } else {
        raw[idx] = 0;
        raw[idx + 1] = 0;
        raw[idx + 2] = 0;
        raw[idx + 3] = 0;
      }
    }
  }

  const idat = zlib.deflateSync(raw);
  const png = Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
  fs.writeFileSync(path, png);
}

function colorFromHex(hex) {
  const m = hex.replace("#", "");
  return [parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16), 255];
}

const letters = {
  W: [
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1001001",
    "1001001",
    "1001001",
    "1010101",
    "1010101",
    "1010101",
    "0101010",
    "0101010",
    "0101010",
  ],
  o: [
    "0000000",
    "0000000",
    "0111110",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "0111110",
    "0000000",
    "0000000",
    "0000000",
  ],
  D: [
    "1111100",
    "1000010",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000001",
    "1000010",
    "1111100",
    "0000000",
    "0000000",
  ],
};

function renderText(text, scale) {
  const letterSpacing = 2;
  const rows = 14;
  const cols = text.split("").reduce((sum, char) => {
    const bmp = letters[char];
    return sum + (bmp ? bmp[0].length : 5) + letterSpacing;
  }, -letterSpacing);
  const width = cols * scale;
  const height = rows * scale;
  const pixels = Array.from({ length: height }, () => Array(width).fill(null));
  let xOffset = 0;
  for (const char of text) {
    const bitmap = letters[char];
    if (!bitmap) {
      xOffset += 5 * scale;
      continue;
    }
    for (let y = 0; y < bitmap.length; y++) {
      for (let x = 0; x < bitmap[y].length; x++) {
        if (bitmap[y][x] === "1") {
          for (let dy = 0; dy < scale; dy++) {
            for (let dx = 0; dx < scale; dx++) {
              pixels[y * scale + dy][xOffset + x * scale + dx] = true;
            }
          }
        }
      }
    }
    xOffset += bitmap[0].length * scale + letterSpacing * scale;
  }
  return { pixels, width, height };
}

function makeLogo(text, hexColor, path) {
  const scale = 4;
  const { pixels: mask, width, height } = renderText(text, scale);
  const w = width + 24;
  const h = height + 24;
  const color = colorFromHex(hexColor);
  const canvas = Array.from({ length: h }, () => Array(w).fill(null));
  const startX = Math.floor((w - width) / 2);
  const startY = Math.floor((h - height) / 2);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (mask[y][x]) {
        canvas[startY + y][startX + x] = color;
      }
    }
  }
  writePng(path, w, h, canvas);
}

if (!fs.existsSync("public/uploads")) fs.mkdirSync("public/uploads", { recursive: true });
makeLogo("WooDoo", "#1A1814", "public/uploads/logo-light.png");
makeLogo("WooDoo", "#F2EEE5", "public/uploads/logo-dark.png");
console.log("Generated PNG logo placeholders.");

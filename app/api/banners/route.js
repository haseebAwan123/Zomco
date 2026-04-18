import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|svg)$/i;

/** Lists raster/SVG assets in /public/images for the hero slider */
export async function GET() {
  const dir = path.join(process.cwd(), "public", "images");
  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return NextResponse.json({ images: [] });
  }

  const images = files
    .filter(
      (name) =>
        IMAGE_EXT.test(name) &&
        !name.startsWith(".") &&
        /^banner/i.test(path.parse(name).name),
    )
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .map((name) => `/images/${name}`);

  return NextResponse.json({ images });
}

export const dynamic = "force-dynamic";

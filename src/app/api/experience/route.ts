import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export const revalidate = 3600

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "data", "experience.json");
  
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const experienceData = JSON.parse(data);
    return NextResponse.json({data: experienceData}, { status: 200 });
  } catch (error) {
    console.error("Error reading experience data:", error);
    return NextResponse.json({ error: "Failed to load experience data" }, { status: 500 });
  }
}
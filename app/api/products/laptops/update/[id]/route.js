import LaptopModel from "@/db/models/laptop";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  console.log("This is Context", context);
  const id = context.params.id;
  const productRecord = await LaptopModel.findById(id);
  return NextResponse.json({ productRecord });
}

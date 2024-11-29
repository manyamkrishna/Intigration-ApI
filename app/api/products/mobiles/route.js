import MobileModel from "@/db/models/mobile";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const mobileData = await MobileModel.find({});
  return NextResponse.json({ mobileData });
}
export async function POST(request) {
  const { title, model, price } = await request.json();
  await MobileModel.create({
    title,
    model,
    price,
  });
  return NextRequest.json({ sucess: "Mobile added sucessfully" });
}
export async function PUT(request) {
  const mobileId = await request.nextUrl.searchParams.get("id");
  const {
    newTitle: title,
    newModel: model,
    newPrice: price,
  } = await request.json();
  await MobileModel.findByIdAndUpdate(mobileId, { title, model, price });
  return NextResponse.json({ mgs: "mobile product updated" });
}
export async function DELETE(request) {
  const mobileId = await request.nextUrl.searchParams.get("id");
  await MobileModel.findByIdAndDelete(mobileId);
  return NextResponse.json({ msg: "Mobile Product Deleted sucessfully" });
}

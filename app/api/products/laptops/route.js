import LaptopModel from "@/db/models/laptop";
import { NextResponse } from "next/server";

export async function GET() {
  const laptopData = await LaptopModel.find({});
  return NextResponse.json({ laptopData });
}
export async function POST(request) {
  const { name, laptopmodel, laptopprice } = await request.json();
  await LaptopModel.create({
    name,
    laptopmodel,
    laptopprice,
  });
  return NextResponse.json({ msg: "Laptop added successfully" });
}
export async function PUT(request) {
  const laptopId = await request.nextUrl.searchParams.get("id");
  const {
    newTitle: name,
    newModel: laptopmodel,
    newPrice: laptopprice,
  } = await request.json();
  await LaptopModel.findByIdAndUpdate(laptopId, {
    name,
    laptopmodel,
    laptopprice,
  });
  return NextResponse.json({ mgs: "laptop product updated" });
}

export async function DELETE(request) {
  const laptopId = await request.nextUrl.searchParams.get("id");
  await LaptopModel.findByIdAndDelete(laptopId);
  return NextResponse.json({ msg: "Laptop Product Deleted sucessfully" });
}

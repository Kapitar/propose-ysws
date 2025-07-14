import { createProposal } from "@/lib/airtable";
import { YSWSProposal } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.formData();
  if (
    !data.get("name") ||
    !data.get("YS") ||
    !data.get("WS") ||
    !data.get("description")
  ) {
    return NextResponse.json(
      { success: false, message: "Missing required fields" },
      { status: 400 }
    );
  }

  const proposal: YSWSProposal = {
    name: data.get("name") as string,
    YS: data.get("YS") as string,
    WS: data.get("WS") as string,
    description: data.get("description") as string,
    demoURL: data.get("demoURL") as string || "",
    websiteURL: data.get("websiteURL") as string || "",
  };

  const result = await createProposal(proposal);

  return NextResponse.json({success: true}, { status: 201 });
}

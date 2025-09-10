import { chatSession } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST (req){
    const {prompt} =await req.json()
    try{
        const result =await chatSession.sendMessage(prompt);
        const respo=result.response.text();

        return NextResponse.json({ result: respo });
    }
    catch(error){
        return NextResponse.error({error:error.message});
    }
}
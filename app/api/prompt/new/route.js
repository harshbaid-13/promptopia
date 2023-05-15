import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/db";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDatabase();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify("Failed to create a new prompt"), {
      status: 500,
    });
  }
};

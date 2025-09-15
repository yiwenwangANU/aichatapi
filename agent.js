import "dotenv/config";
import { ChatAnthropic } from "@langchain/anthropic";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

const llm = new ChatAnthropic({
  modelName: "claude-3-7-sonnet-latest",
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const agent = createReactAgent({ llm, tools: [] });

const results = await agent.invoke({
  messages: [{ role: "user", content: "What is the capital of moon?" }],
});

console.log(results.messages.at(-1)?.content);

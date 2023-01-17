const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.KEY,
});
const openai = new OpenAIApi(configuration);

async function ask(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 150,
    frequency_penalty: 0,
    presence_penalty: 0,
    
  });
  const ans = response.data.choices[0].text;
  console.log(ans);
  return ans;
}

module.exports = {
    ask,
};
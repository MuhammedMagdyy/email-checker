import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
config();
import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: 'pk-xwSNyJGXTIASLOhCIUGIZyHiAXzrLghvQOjCVOhfdHJdebak',
	basePath: 'https://api.pawan.krd/v1/chat/completions',
});

const res = await openai.chat.completions.create({
	model: 'text-davinci-003',
	prompt: 'Human: Hello\nAI:',
	temperature: 0.7,
	max_tokens: 256,
	top_p: 1,
	frequency_penalty: 0,
	presence_penalty: 0,
	stop: ['Human: ', 'AI: '],
});

console.log(response.data.choices[0].text);
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.get('/api/checker', (req, res) => {
// 	const emailText = req.body.emailText;

// 	openai.createChatComp;
// });

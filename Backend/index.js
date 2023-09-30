import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { TextServiceClient } from '@google-ai/generativelanguage';
import { GoogleAuth } from 'google-auth-library';
import { config } from 'dotenv';
config();

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

const MODEL_NAME = 'models/text-bison-001';
const API_KEY = process.env.API_KEY;

const client = new TextServiceClient({
	authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

app.get('/api/checker', (req, res) => {
	const emailText = req.body.emailText + `according to this am i accepted in this position or not reply only with one word "accept" or "reject"`;

	client
		.generateText({
			model: MODEL_NAME,
			prompt: {
				text: emailText,
			},
		})
		.then((result) => {
			console.log(JSON.stringify(result, null, 2));
		});
});

app.listen(port, () => {
	console.log('opend');
});

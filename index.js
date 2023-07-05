// Import variable
require('dotenv').config();

const { Client } = require("@notionhq/client");
// Initialize notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });
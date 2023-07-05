// Import variable
require('dotenv').config();

const { Client } = require("@notionhq/client");
// Initialize notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Import database ID
const databaseId = process.env.NOTION_API_DATABASE;

// makes call to database
const getDatabase = async () => {
    const response = await notion.databases.query({ database_id: databaseId });

    console.log(response);
};

getDatabase();

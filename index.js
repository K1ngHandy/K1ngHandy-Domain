// Import variable
require('dotenv').config();

const { Client } = require("@notionhq/client");
// Initialize notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Import database ID
const databaseId = process.env.NOTION_API_DATABASE;

// makes call to database
exports.getDatabase = async () => {
    const response = await notion.databases.query({ database_id: databaseId });

    const responseResults = response.results.map((page) => {
        return {
            id: page.id,
            name: page.properties.Name.title[0]?.plain_text,
            role: page.properties.Role.rich_text[0]?.plain_text,
        };
    });

    // log results
    console.log(responseResults);
};

getDatabase();

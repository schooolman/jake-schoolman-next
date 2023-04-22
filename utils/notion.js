import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getPage(pageId) {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
}

export async function getBlocks(blockId) {
    const response = await notion.blocks.children.list({
        block_id: blockId,
    });
    return response.results;
}

export async function getDatabase() {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
  });
  return response.results;
}

export function getParagraphs(blocks) {
    return blocks.filter(paragraph => paragraph.paragraph != undefined);
}
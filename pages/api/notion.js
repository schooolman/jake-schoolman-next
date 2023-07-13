import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export default async (req, res) => {
    const response = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
      // add any filters or sorting options here
    })
  
    const data = response.results.map((page) => {
        return {
            title: page.properties.Name.title[0].plain_text,
            // add any other properties you want to retrieve here
            page: page
        }
    })

    res.status(200).json(data)
}
  
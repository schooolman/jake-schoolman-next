// Returns paragraph type blocks in a notion page
export function getParagraphs(blocks) {
    return blocks.filter(paragraph => paragraph.paragraph != undefined);
}

// Return blocks that have child pages
export function getChildPages(blocks) {
    return blocks.filter(block => block.child_page != undefined);
}
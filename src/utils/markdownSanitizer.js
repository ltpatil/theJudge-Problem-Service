const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown')

function sanitizedMarkdownConv(markdownContent){
    const convertedHtml = marked.parse(markdownContent);
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags
    });
    const turndownService = new TurndownService();
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    return sanitizedMarkdown;
}

module.exports = sanitizedMarkdownConv;

// const dirtyCode = `
// <h3>Safe Title</h3>
// <script>alert("I have stolen your data!")</script>
// <p>This is normal text.</p>
// <img src="x" onerror="alert('This is an image attack')">
// <a href="javascript:alert('Link attack')">Click me for a prize</a>
// `;
// const ans = sanitizedMarkdownConv(dirtyCode);
// console.log(ans);
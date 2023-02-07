const { JSDOM } = require('jsdom')

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of linkElements) {
        let completeHrefElement = linkElement.href
        if (completeHrefElement.slice(0, 1) === '/') {
            completeHrefElement = `${baseURL}${completeHrefElement}`
        } 
        try {
            const urlObj = new URL(completeHrefElement)
            urls.push(completeHrefElement)
        } catch(err) {
            console.log(`error with URL: ${err.message}`)
        }
    }
    return urls
}

function normalizeURL(urlString) {
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1)
    }
    return hostPath
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}
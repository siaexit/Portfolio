const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist')
const indexPath = path.join(distDir, 'index.html')
const notFoundPath = path.join(distDir, '404.html')

fs.copyFile(indexPath, notFoundPath, (err) => {
  if (err) {
    console.error('Failed to create 404.html from index.html:', err)
    process.exitCode = 1
  } else {
    console.log('Copied index.html -> 404.html')
  }
})
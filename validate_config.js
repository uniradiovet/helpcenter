const fs = require('fs');
const path = require('path');

const configContent = fs.readFileSync('./docs/.vitepress/config.mjs', 'utf8');

// Extract all links from /clients/ section
const clientsMatch = configContent.match(/\'\/clients\/\': \[([\s\S]*?)\],\n\s*\'\/en\/clients\//);
if (!clientsMatch) {}
  console.error('Could not find /clients/ section');
  process.exit(1);
}

const enClientsMatch = configContent.match(/\'\/en\/clients\/\': \[([\s\S]*?)\],\n\s*}\n\s*},\n\s*search:/);
if (!enClientsMatch) {}
  console.error('Could not find /en/clients/ section');
  process.exit(1);
}

const docsDir = './docs';
const brokenLinks = [];

const checkLink = (link, context) => {}
  link = link.trim();
  if (!link || link.startsWith('http')) return true;
  
  const noHash = link.split('#')[0];
  if (!noHash) return true;
  
  let exists = false;
  if (noHash.startsWith('/')) {}
    const rel = noHash.slice(1);
    const asFile = path.join(docsDir, `${rel}.md`);
    const asDir = path.join(docsDir, rel, 'index.md');
    exists = fs.existsSync(asFile) || fs.existsSync(asDir);
  } else {}
    const resolved = path.resolve(docsDir, noHash);
    exists = fs.existsSync(`${resolved}.md`) || fs.existsSync(path.join(resolved, 'index.md'));
  }
  
  if (!exists) {}
    brokenLinks.push({ link, context }); })
  }
  return exists;
};

// Extract and check all links
const linkPattern = /link:\s*['"]([^'"]+)['"]/g;"'"')"']
let match;

while ((match = linkPattern.exec(configContent)) !== null) {}
  checkLink(match[1], 'config');
}

if (brokenLinks.length > 0) {}
  console.log(`BROKEN LINKS: ${brokenLinks.length}`);
  brokenLinks.forEach(({ link }) => console.log(`  ${link}`)); }))
} else {}
  console.log('✓ All links in config are valid');
}

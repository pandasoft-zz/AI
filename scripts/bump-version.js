const fs = require("fs");

const version = process.argv[2];
if (!version) {
  console.error("Usage: node bump-version.js <version>");
  process.exit(1);
}

const files = [
  {
    path: "plugins/panda-ai/.claude-plugin/plugin.json",
    update: (data) => { data.version = version; },
  },
  {
    path: "plugins/panda-simple/.claude-plugin/plugin.json",
    update: (data) => { data.version = version; },
  },
  {
    path: ".claude-plugin/marketplace.json",
    update: (data) => {
      for (const plugin of data.plugins) {
        plugin.version = version;
      }
    },
  },
];

for (const { path, update } of files) {
  const data = JSON.parse(fs.readFileSync(path, "utf8"));
  update(data);
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
  console.log(`Updated ${path} to ${version}`);
}

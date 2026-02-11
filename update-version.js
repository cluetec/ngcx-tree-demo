const fs = require("fs");

// Function to load and parse the package-lock.json file
function updateAppVersion() {
  const packageLockJson = JSON.parse(
    fs.readFileSync("./package-lock.json", "utf8"),
  );
  const file = `./src/app/version.ts`;
  const contents = `
  /**
   * Do not touch - Generated file.
   **/
  export class Versions {
    public static readonly appVersion = '${packageLockJson.version}';
    public static readonly ngcxTreeVersion = '${packageLockJson.packages["node_modules/@cluetec/ngcx-tree"].version}';
  }
  `;
  fs.writeFileSync(file, contents);
}

updateAppVersion();

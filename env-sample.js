import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env");
const sampleEnvPath = path.resolve(process.cwd(), ".env.sample");

// Check if .env file exists
if (!fs.existsSync(envPath)) {
  console.error("No .env file found");
  process.exit(1);
}

const envFile = fs.readFileSync(envPath, "utf-8");
const lines = envFile.split("\n");

let sampleEnv = "";
lines.forEach((line) => {
  const equalIndex = line.indexOf("=");
  if (equalIndex !== -1) {
    sampleEnv += line.substring(0, equalIndex + 1) + "\n";
  } else {
    sampleEnv += line + "\n";
  }
});

fs.writeFileSync(sampleEnvPath, sampleEnv);
console.log("Successfully created .sample-env file");

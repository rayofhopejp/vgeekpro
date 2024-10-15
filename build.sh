echo Building Static site
echo Installing package...
pnpm install --frozen-lockfile
echo Building...
pnpm generate
echo Done!
echo You can now deploy .output/public to any static hosting!

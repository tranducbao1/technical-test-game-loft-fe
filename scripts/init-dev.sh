#!/usr/bin/env sh

ACTIVE_PNPM_VER="$(pnpm --version)"
PNPMRC="$(cat .pnpmrc)"

echo 'This script checks that you are using the expected pnpm version, installs your dependencies, and copies starter configs to your configuration directory.'
echo '.'
echo 'Checking if you have the right pnpm version...'
echo '.'
echo '.'
# Check if they are using the correct version of pnpm.
if [[ $ACTIVE_PNPM_VER == $PNPMRC ]]; then
    echo "Correct pnpm version detected ($PNPMRC)."
else
    echo "Incorrect pnpm version detected (active: $ACTIVE_PNPM_VER, need: $PNPMRC)."
    echo "Install the correct pnpm version and try again."
    exit 1
fi

# Install dependencies
echo 'Installing project dependencies...'
pnpm install

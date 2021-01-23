# Installation mode
if ! bundle list --name-only 2>&1 | grep -q '^jekyll' || [ ! -z "${1}" ]; then
  sudo apt install build-essential curl libcurl4-openssl-dev libffi-dev ruby-dev zlib1g-dev
  sudo gem install rubygems-update
  sudo update_rubygems
  sudo gem update --system
  sudo gem install bundler
  sudo bundle install
  bundle
fi

# Launch Jekyll
bundle exec jekyll serve --host 0.0.0.0 --incremental --port 4003

# Cleanup server files
rm -rf ./_site ./.jekyll-metadata ./Gemfile.lock

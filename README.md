# Personal Website

Live version: [https://DJustice23.com](https://DJustice23.com/).

This repository contains the source for my personal site. It is an [MIT](https://github.com/DJustice23/personal-site/blob/main/LICENSE) licensed React single-page application built with [Create React App](https://github.com/facebook/create-react-app), [React Router](https://reactrouter.com/), SCSS, and [GitHub Actions](https://github.com/features/actions) for continuous deployment. The goal is to keep the codebase easy to understand, fast to iterate on, and straightforward to host on GitHub Pages or any static site provider.

## Customizing the Site

If you'd like to tailor this project for your own use, start by following the setup instructions below and review the checklist in [docs/adapting-guide.md](./docs/adapting-guide.md). Issues and pull requests are welcome if you spot problems or improvements.

## Contributing

Please review the [design goals](./docs/design-goals.md), [roadmap](./docs/roadmap.md), and [contributing guidelines](./docs/contributing.md) before opening a pull request. Bug reports and enhancement ideas are always appreciated—open an issue or submit a PR when you have something to share.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v14 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/DJustice23/personal-site.git
cd personal-site
nvm install # this is optional - make sure you're running >= node 14 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

1. Modify the environmental variables and git remote url in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Modify `homepage` in `package.json` to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like `https://[your-gh-username].github.io/[repository-name - default:personal-site]/`
3. If you plan on using a custom domain, modify `public/CNAME`. If you don't, delete `public/CNAME`.

Make a commit to `main` and push your changes. That's it.

### Static Export

To statically export the site without deploying to github pages, delete or disable `.github/workflows/github-pages.yml` and run `npm run predeploy`. This generates a static export of the website as `personal-site/build/`. Copy this and self-host or deploy to a CDN.

## Acknowledgements

- Template based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](https://html5up.net/).
- Thanks to the open source community for tools, libraries, and inspiration that make small personal sites like this possible.

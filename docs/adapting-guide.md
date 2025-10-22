# Adapting this Website

This guide collects tips for tailoring the project to your own information. If you notice gaps or have suggestions, please open an issue or pull request so the documentation can continue to improve.

When you start customizing the site, you may want to fork the repository or update the remote URL to point at your own origin. GitHub’s documentation on [changing a remote URL](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories) is a good reference.

## Before you start

1. Make sure you have a good text editor such as [Visual Studio Code](https://code.visualstudio.com/).
1. Review `src/App.js`. This file contains all of our route definitions. If you wish to add or remove a page, you should do so here.

## Checklist

### Setup

1. Run the project before making any modifications by following the set up and running instructions in the main [README.md](../README.md#set-up).
1. Change `homepage` in `package.json` to reflect where you plan to host the site. This value controls the base path for static builds and GitHub Pages. For example, a homepage of `https://example.com` places the site at `localhost:3000` and a homepage of `https://username.github.io/personal-site/` places the site at `localhost:3000/personal-site/`. If you plan to host at on a path such as `https://[your-github-username].github.io/[your-repo-name]`, set this now so your development environment mirrors production.
1. Create a `.env` file. To do this, run:

   ```bash
   cp sample.env .env
   ```

   and set values as appropriate. Most people will not need to modify this file.

### Adapt Content

Keep the project running as you go (with `npm start`) to help correct mistakes quickly.

1. Start by changing text in the sidebar. This file is located at `src/components/Template/SideBar.js`.
1. Add an image of yourself in `public/images/me.jpg`. Your image should be approximately 256 x 256 pixels. Larger and smaller is ok, but avoid very large images to save bandwidth. If you need help resizing your image, Adobe makes a great online tool [here](https://www.adobe.com/photoshop/online/resize-image.html).
1. Modify the text on the homepage. This file is located at `src/pages/Index.js`.
1. Modify the files in `src/data/resume/` next.
1. Modify all of the other files in the `src/data/` directory.
1. You've finished modifying >95% of the pages. Search through the rest of the files for any placeholder content (names, links, or data that does not apply to you) and replace it with your own details.
1. Change or remove the favicon in `public/index.html`. [This](https://realfavicongenerator.net/) website may be helpful.

### Deploy

See deployment instructions [here](../README.md#deploying-to-github-pages). If you plan to use a custom url, modify `public/CNAME` and enter your URL. You can run:

```bash
echo "[your-custom-domain][.com]" > public/CNAME
```

as a shortcut.

Consider purchasing your own domain name from a registrar you trust. If you would like to host on GitHub Pages, run `npm run deploy`. This generates a new branch called `gh-pages`. Then go to `https://github.com/[your-github-username]/[your-repo-name]/settings` and configure accordingly:

<center><img src="images/gh-pages.png"></center>

Next, configure your domains DNS record. See [here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) for more information. After a few minutes, your website should be live on your domain.

That's it. Thank you for reading. If you go through this guide and run into issues or areas you find unclear, please consider submitting a PR to help others like you.

## Common Pitfalls

Here are answers to questions that come up often. The documentation is updated periodically as new issues surface.

1. My CSS isn't rendering, or I see a 404 instead of my site:

   Make sure the `homepage` field of `package.json` points to where you plan to host your site index. Also, double check that you created a `CNAME` file (see deployment instructions above). If neither of these work, please open an issue so the problem can be tracked.

2. LF / CRLF issues with eslint.

   This is a common Windows development pitfall. Configure your editor to use `LF` for this project or add `"endOfLine": "auto"` to the relevant eslint/prettier settings to align with your local environment.

3. master / main

   Github decided to rename the default branch of all of their repositories from master to main. See their reasoning [here](https://github.com/github/renaming). If you're trying to pull in recent changes, consider renaming your own branch, or just create a merge commit from main.

4. Google Analytics Warnings when exporting.

   Either set up Google Analytics or disable the `Analytics.js` component. Read more about [react-ga](https://github.com/react-ga/react-ga).

5. How do I configure git? What is nano?

   Read through [git-scm](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)'s excellent documentation. Set your default text editor to something you're comfortable with—for example, many developers use VS Code or vim for writing commit messages.

6. Can I host at [username.github.io]?

   Sure, see github's documentation [here](https://pages.github.com/). You will need to change branches. Create a new branch off of main, and configure `gh-pages` to write to main instead of a `gh-pages` branch.

7. How do I disable eslint?

   `echo "*\n" > .eslintignore` Although this is generally not recommended. Linters help prevent errors, enforce uniform style so that you can spend less time thinking about formatting and more time reading code, and eliminate easy nits for code reviews. If the rules aren't working for you, change them instead. See eslint's documentation [here](https://eslint.org/docs/about/) for more information.

8. Why is my website rendering the readme file?

   See 1. above and make sure that `.nojekyll` still exists in `public`. This file directs github to not attempt to render the website with Jekyll.

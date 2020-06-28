# Javascript Challenge - JavaScript and DOM Manipulation

This project has two seperate sites, which query a dataset of UFO sitings, `/UFO-level-X/static/js`, where `X` is 1 or 2.  The first, `UFO-level 1` allows users to enter a data and returns UFO sitings that occured on that date.  The second, `UFO-level 2` allows users to query UFO sitings based on date, city, state, country, and shape of craft. These sites are deployed on github pages and may be viewed using the following links.

[UFO-level 1](https://holsteinzahler.github.io/javascript-challenge/UFO-level-1/)
[UFO-level 2](https://holsteinzahler.github.io/javascript-challenge/UFO-level-2/)

This repo contains two folders `UFO-level-1` and `UFO-level-2`.  This folders contain an HTML file, `index.html` and javascript files, `app.js` and `data.js`. The javascript file `data.js` contains data which is filtered and displayed in the HTML file using `app.js`.  In `UFO-level-1` filtering is done only by date. In `UFO-level-2` filtering is done using several fields.  When all fields are blank, no filtering is done and the entire data table is displayed.
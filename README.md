### To Run on Local

1) Install [Jekyll.](https://jekyllrb.com)
2) Clone this repo.

Peronally what I run when I develop (will listen for saves and config files too!):

```bash
jekyll serve -w --watch
```

### Tutorial Notes
Following [DevTips Jekyll Tutorial](https://www.youtube.com/playlist?list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI)
_technology stack choices(sass instead of scss, flexbox, bourbon - sass toolset)_

[-](https://stackoverflow.com/questions/32045976/sass-wont-compile-file-unreadable-or-not-found/49293438#49293438) Not instructed but when following from video 4 to video 6 will need to add following to `_config.yml` to configure Jekyll to allow the sass file syntax of `_filename.sass`.

```
sass:
  sass_dir: assets/css
  style: :nested
```

- When he composes `.html` files he usually gives descriptive class names to `div` and `p` tags.

- Make SVG, HTML files to style over SASS and include in HTML with Jekyll using `{% include %}`

#### CSS Reference (used that I was not super familar with)
- margin is outside border, padding is inside
- float
- letter-spacing
- text-transform
- clear
- `.classname`,`tagname` 
- [CSS presidence](https://stackoverflow.com/questions/25105736/what-is-the-order-of-precedence-for-css)
- order

#### SASS Syntax (- uses indents vs SCSS - uses brackets)
- `+size(50px)`
- `+clearfix //bourbon`
- `&:hover //means on hover`
- `@extend %small-bold`
- indents are super important.
- `[class^="icon-"]` Anything that includes "icon-"
- @media screen and (max-width: 650px)
- @for $i from 1 through 10 //generates --> &.skill-#{$i} span:nth-child(n+#{$i})
- [liquid for designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
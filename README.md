[![Build Status](https://travis-ci.org/cheriejw/cheriejw.github.io.svg?branch=master)](https://travis-ci.org/cheriejw/cheriejw.github.io)
### To Run on Local

1) Install [Jekyll.](https://jekyllrb.com)
2) Clone this repo.

Peronally what I run when I develop (will listen for saves and config files too!):

```bash
bundle install

jekyll serve -w --watch
```

---

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

- Didn't get to fully explore this subject of animations, may go back later. [From this video](https://www.youtube.com/watch?v=PubNB94BLFc&index=12&list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI), also checkout [bounce.js](http://bouncejs.com/)

#### CSS Reference (used that I was not super familar with)
- margin is outside border, padding is inside
- float
- letter-spacing
- text-transform
- clear
- `.classname`,`tagname` 
- [CSS presidence](https://stackoverflow.com/questions/25105736/what-is-the-order-of-precedence-for-css)
- order
- perspective (where you are from the site.)

#### SASS Syntax (- uses indents vs SCSS - uses brackets)
- `+size(50px)` + is mixin? these are bourbon mixin.
- `+clearfix //bourbon`
- `&:hover //means on hover`
- `@extend %small-bold`
- indents are super important.
- `[class^="icon-"]` Anything that includes "icon-"
- @media screen and (max-width: 650px)
- @for $i from 1 through 10 //generates --> &.skill-#{$i} span:nth-child(n+#{$i})
- [liquid for designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)

---

### Continuous Integration with [Travis](https://docs.travis-ci.com/user/languages/ruby/)
Followed [this](https://jekyllrb.com/docs/continuous-integration/travis-ci/) starter template kind of thing...

Could try out the [rakefile](https://github.com/ruby/rake) later (ruby make) would need to `gem install html-proofer`

Used html-proofer and [nokogiri](http://www.rubydoc.info/github/sparklemotion/nokogiri) - [if ever needed to add to gemfile](https://stackoverflow.com/questions/29782968/how-to-gem-install-nokogiri-use-system-libraries-via-gemfile) use `bundle config build.nokogiri --use-system-libraries`

### Ruby-related Notes
There is no `--save` like in npm for gem... can use gemrat though.

---

### Jekyll Sample Post (from `_posts`)
```
---
layout: post
title:  "Welcome to Jekyll!"
date:   2018-03-13 19:18:54 -0700
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
```


### Customizing Rules
- Project name in `/assets/img/projects/` has to be the same as project name in `/projects/` HTML file, so JQuery can load the right project.
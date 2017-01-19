# particle

Support various kinds of embeddable content in articles inspired by [embed-video](https://github.com/alanshaw/embed-video) and enhanced for Artsy.

### Supported content
[Youtube](https://youtube.com)
[Vimeo](https://vimeo.com)

### Usage

Default options:
```coffeescript
particle = require 'particle'
iframe = particle('https://www.youtube.com/watch?v=vq9pQi-SD1k')
```
Output:
```html
<iframe src="//www.youtube.com/embed/vq9pQi-SD1k" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen"></iframe>
```

Query options:
```coffeescript
particle = require 'particle'
iframe = particle 'https://www.youtube.com/watch?v=vq9pQi-SD1k', query:
  title: 0
  portrait: 0
  badge: 0
```
Output:
```html
<iframe src="//www.youtube.com/embed/vq9pQi-SD1k?portrait=0&title=0&badge=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
```


Class options:
```coffeescript
particle = require 'particle'
iframe = particle 'https://www.youtube.com/watch?v=vq9pQi-SD1k', class: 'no-margin'
```

Output:
```html
<iframe src="//www.youtube.com/embed/vq9pQi-SD1k" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen class="no-margin"></iframe>
```

Just get the video id and type
```coffeescript
particle = require 'particle'
id = particle.getId('https://www.youtube.com/watch?v=vq9pQi-SD1k')
id -> vq9pQi-SD1k

```

var URL = require("url")

function embed (url, opts) {
  var id

  url = URL.parse(url, true)

  id = detectYoutube(url)
  if (id) return embed.youtube(id, opts)

  id = detectVimeo(url)
  if (id) return embed.vimeo(id, opts)
}

embed.image = function (url, opts) {
  var id

  url = URL.parse(url, true)

  id = detectYoutube(url)
  if (id) return embed.youtube.image(id, opts)
}

function detectVimeo (url) {
  return (url.hostname == "vimeo.com") ? url.pathname.split("/")[1] : null
}

function detectYoutube (url) {
  if (url.hostname.indexOf("youtube.com") > -1) {
    return url.query.v
  }

  if (url.hostname == "youtu.be") {
    return url.pathname.split("/")[1]
  }

  return null
}

embed.vimeo = function (id, opts) {
  // TODO: use opts to set iframe attrs.
  var queryString = ''
  if (opts && opts.hasOwnProperty('query')){
    queryString = "?" + serializeQuery(opts.query)
  }
  if (opts && opts.hasOwnProperty('classNames')){
    var classNames = ' class="' + opts.classNames + '"'
  }else{
    var classNames = ''
  }
  return '<iframe src="//player.vimeo.com/video/' + id + queryString + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen' + classNames + '></iframe>'
}

embed.youtube = function (id, opts) {
  // TODO: use opts to set iframe attrs.
  var queryString = ''
  if (opts && opts.hasOwnProperty('query')){
    queryString = "?" + serializeQuery(opts.query)
  }
  if (opts && opts.hasOwnProperty('classNames')){
    var classNames = ' class="' + opts.classNames + '"'
  }else{
    var classNames = ''
  }
  return '<iframe src="//www.youtube.com/embed/' + id + queryString + '" frameborder="0" allowfullscreen' + classNames + '></iframe>'
}

embed.youtube.image = function (id, opts) {
  opts = opts || {}
  opts.image = opts.image || 'default'
  return '<img src="//img.youtube.com/vi/' + id + '/' + opts.image + '.jpg"/>'
}

function serializeQuery (query) {
  var queryString = []
  for(var p in query){
    if (query.hasOwnProperty(p)) {
      queryString.push(encodeURIComponent(p) + "=" + encodeURIComponent(query[p]));
    }
  }
  return queryString.join("&")
}

module.exports = embed
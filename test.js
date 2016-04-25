var test = require("tape")
  , embed = require("./")

test("convert vimeo.com url", function (t) {
  t.plan(1)
  var code = embed("http://vimeo.com/19339941")
  t.equal(code, '<iframe src="//player.vimeo.com/video/19339941" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
})

test("convert youtube.com url", function (t) {
  t.plan(1)
  var code = embed("https://www.youtube.com/watch?v=twE64AuqE9A")
  t.equal(code, '<iframe src="//www.youtube.com/embed/twE64AuqE9A" frameborder="0" allowfullscreen></iframe>')
})

test("convert youtu.be url", function (t) {
  t.plan(1)
  var code = embed("http://youtu.be/9XeNNqeHVDw#aid=P-Do3JLm4A0")
  t.equal(code, '<iframe src="//www.youtube.com/embed/9XeNNqeHVDw" frameborder="0" allowfullscreen></iframe>')
})

test("convert vimeo id", function (t) {
  t.plan(1)
  var code = embed.vimeo("19339941")
  t.equal(code, '<iframe src="//player.vimeo.com/video/19339941" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
})

test("convert youtube id", function (t) {
  t.plan(1)
  var code = embed.youtube("9XeNNqeHVDw")
  t.equal(code, '<iframe src="//www.youtube.com/embed/9XeNNqeHVDw" frameborder="0" allowfullscreen></iframe>')
})

test("accept query param youtube", function (t) {
  t.plan(1)
  var code = embed.youtube("9XeNNqeHVDw", { query: { rel: 0, showinfo: 0 } } )
  t.equal(code, '<iframe src="//www.youtube.com/embed/9XeNNqeHVDw?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>')
})

test("accept query param vimeo", function (t) {
  t.plan(1)
  var code = embed.vimeo("19339941", { query: { portrait: 0, color: '333' } } )
  t.equal(code, '<iframe src="//player.vimeo.com/video/19339941?portrait=0&color=333" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
})

test("accept className param youtube", function (t) {
  t.plan(1)
  var code = embed.youtube("9XeNNqeHVDw", { classNames: "no-margin fb-instant"} )
  t.equal(code, '<iframe src="//www.youtube.com/embed/9XeNNqeHVDw?rel=0&showinfo=0" frameborder="0" allowfullscreen class="no-margin fb-instant"></iframe>')
})

test("accept className param vimeo", function (t) {
  t.plan(1)
  var code = embed.vimeo("19339941", { classNames: "no-margin fb-instant" } )
  t.equal(code, '<iframe src="//player.vimeo.com/video/19339941?portrait=0&color=333" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen class="no-margin fb-instant"></iframe>')
})

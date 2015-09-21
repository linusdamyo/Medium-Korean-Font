var pageMod = require("sdk/page-mod").PageMod({
  include: "*",
  contentStyle: "@import url('//fonts.googleapis.com/earlyaccess/nanumgothic.css');",
  contentStyleFile: require("sdk/self").data.url("korea_font_family.css")
});
resource_manifest_version "44febabe-d386-4d18-afbe-5e627f4af937"

description "Custom UI by Marco Paggioro -> https://www.marcopaggioro.it/"
version "1.0"

client_script {
	"config.lua",
	"script/client.lua"
}

server_script {
	"config.lua",
	"script/server.lua"
}

ui_page "./html/ui.html"

files {
	"./html/ui.html",
	-- CSS
	"./html/css/bootstrap.min.css",
	"./html/css/bootstrap.min.css.map",
	"./html/css/style.css",
	-- JavaScript
	"./html/js/jquery-3.4.1.min.js",
	"./html/js/popper.min.js",
	"./html/js/bootstrap.min.js",
	"./html/js/bootstrap.min.js.map",
	"./html/js/script.js",
	-- Img
	"./html/img/wallet.png",
	"./html/img/jobs/mechanic.png",
	"./html/img/jobs/police.png",
	"./html/img/jobs/mechanic.png",
}

dependency "es_extended"
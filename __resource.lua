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

dependency "es_extended"
fx_version 'adamant'
game 'gta5'
description 'Death screen made by VladRPG and DariusMen'
dependency "vrp"

ui_page 'html/ui.html'

client_scripts {
    '@vrp/client/Proxy.lua',
    '@vrp/client/Tunnel.lua',
    'client.lua'
}

server_scripts {
    '@vrp/lib/utils.lua',
    'server.lua'
}

files {
    "html/*.*",
    "html/js/java.js",
    "html/style/*.*",
}
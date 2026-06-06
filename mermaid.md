graph TD
    subgraph Server (Node.js)
        S_App[App.tsx] -->|Import| S_Server[server.tsx]
        S_Server -->|renderToString| HTML[Static HTML String]
        HTML -->|HTTP Response| Browser[Browser]
    end

    subgraph Browser
        Browser -->|Render HTML| DOM[Visual Page]
        Browser -->|Request Script| StaticServer[Express Static Middleware]
        StaticServer -->|Serve client.js| Browser
        Browser -->|Run client.js| Client_App[App.tsx]
        Client_App -->|hydrateRoot| DOM
    end

    subgraph Build Step (esbuild)
        Src_Server[server.tsx] -->|esbuild platform: node| Dist_Server[dist/server.js]
        Src_Client[client.tsx] -->|esbuild platform: browser| Dist_Client[dist/public/client.js]
    end

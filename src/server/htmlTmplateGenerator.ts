export const generateHtmlTemplate = (rootHTML: string, bundleName: string = 'bundle.js') => `
    <!DOCTYPE html>
    <html lang="zxx">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Webpack with react test</title>
            <script defer src="/static/${bundleName}"></script>
        </head>
        <body>
            <div id="root">
                ${rootHTML}
            </div>
        </body>
    </html>
`;

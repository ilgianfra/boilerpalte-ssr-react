const html = ({
  initialContent,
  scriptTags,
  initialState,
  apolloClient,
}) => (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <title>NBCU 2.0</title>
</head>
<body>
  <div id="root">${initialContent}</div>
  ${scriptTags}
  <script type="text/javascript">
    window.INITIAL_STATE = ${initialState};
    window.__APOLLO_STATE__ = ${apolloClient};
  </script>
</body>
`);

export default html;
const moment = require("moment");
const request = require("request-promise-native");

const accessToken = 'eyJraWQiOiJ0M1pHMUs1cG1xNHg3dms5QkRLMDNaeUJJN091VDlOcHV1WGxIOThQc29RPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxMTFkZjE4Ni0yNDU4LTRiNGMtOWRlNy1jNzEwODFhOTRkYTgiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Imh0dHBzOlwvXC9rd3NrZnMtYXBpLWRldmVsb3BtZW50LmF6dXJld2Vic2l0ZXMubmV0XC90cmFuc2FjdGlvbnMgYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gaHR0cHM6XC9cL2t3c2tmcy1wZWNvcmluby1hcGktZGV2ZWxvcG1lbnQuYXp1cmV3ZWJzaXRlcy5uZXRcL2FjY291bnRzLnJlYWQtb25seSBodHRwczpcL1wva3dza2ZzLXBlY29yaW5vLWFwaS1kZXZlbG9wbWVudC5henVyZXdlYnNpdGVzLm5ldFwvYWNjb3VudHMuYWN0aW9ucy5yZWFkLW9ubHkgaHR0cHM6XC9cL2t3c2tmcy1wZWNvcmluby1hcGktZGV2ZWxvcG1lbnQuYXp1cmV3ZWJzaXRlcy5uZXRcL3RyYW5zYWN0aW9ucyBwaG9uZSBvcGVuaWQgcHJvZmlsZSBodHRwczpcL1wva3dza2ZzLWFwaS1kZXZlbG9wbWVudC5henVyZXdlYnNpdGVzLm5ldFwvb3JnYW5pemF0aW9ucy5yZWFkLW9ubHkgaHR0cHM6XC9cL2t3c2tmcy1wZWNvcmluby1hcGktZGV2ZWxvcG1lbnQuYXp1cmV3ZWJzaXRlcy5uZXRcL2FjY291bnRzIGVtYWlsIiwiYXV0aF90aW1lIjoxNTI1MDAzNzI5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfNkxjdmUwU3FXIiwiZXhwIjoxNTI1MDA3MzI5LCJpYXQiOjE1MjUwMDM3MjksInZlcnNpb24iOjIsImp0aSI6IjMyMTk5Y2RhLWRhNWMtNDdjMS05ZjBkLTc2YWM0ZTJlNTUxMyIsImNsaWVudF9pZCI6Ijc1YnRuOTVma2ZqdWo3N2hzYmlwMDVsamJlIiwidXNlcm5hbWUiOiJpbG92ZWdhZGQifQ.MpCWXnIMcNtEN3JWNMKdOoATu2c4E0pLN-Vo1L2wT4VX9HuoF4uffbdHeLvhowIcy-kxXgRTc7cTY2UlhxB1H2ZFVugp7SCypyc7RRVxYB0g6negZYFxHsXIOVx5ekf8-yIav07zXXbw3hjBTs7SSNmYP0OMOvW15avIzPXudCuaWA1bA_saPcw-3ydA1bs7dqMYRfbnuC-xOzUccU8xOARLIaYr2DtK_drj9a9p1_JyGpBO9aYr0rdi8vX5sQqGhxkWpE6D6X05zdt9RxrGE_jN5bvETDiB8IoGKS9uNTZ86qOcibNyPutlRcO7YpaqmG-Fl2P85ZdlU4bj6E6vbw';

request.post({
    url: `http://localhost:8081/me/accounts`,
    auth: { bearer: accessToken },
    json: true,
    simple: false,
    resolveWithFullResponse: true,
    body: {
        name: 'PECORINO TARO',
        initialBalance: 9999
    }
}).then((response) => {
    console.log('response:', response.statusCode, response.body);
}).catch(console.error);

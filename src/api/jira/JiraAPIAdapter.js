let axiosUrl = `https://${jiraSiteName}.atlassian.net/rest/api/2/issue/${projectKey}-${ticketId}`
axios({
    baseURL: axiosUrl,
    method: 'get',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    
    auth: {
        username: userName,
        password: apiToken,
    }
})
    .then((res) => {
        setJiraTicket(res.data);
    })
     .catch(function (error) {
         console.log(error);
     });

const apiCall = async ({
    url,
    method = 'get',
    body,
    headers 
}) => {
    try{
        const res = await fetch(url, {
            method,
            body,
            headers
        });
    
        return res.json();
    }
    catch(e){
        Promise.reject(e);
    }
}

export default apiCall;
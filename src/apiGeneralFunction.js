import CustomAlert from "./component/ReusableComp/CustomAlert";

export const BASE_URL = 'https://admin.headway.org.in/api/v1'; 
// const BASE_URL =  'http://192.168.1.6/headway/public';
// const BASE_URL =  '/headway-admin/public/api/v1';

const checkInternetConnection = () => {
    return navigator.onLine;
};


const handleResponse = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
};

export const fetchData = async (endpoint, token = null) => {

    // if (!checkInternetConnection()) {
    //     // throw new Error('No internet connection');
    //     //   alert('No internet connection');
    //       return <CustomAlert message="No internet connection" />;
       
    // }
    const url = `${BASE_URL}/${endpoint}`;
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await handleResponse(response);
    } catch (error) {
      //  console.error('Error:', error);
        throw error;
    }

    // return fetch(url, { headers })
    //     .then(handleResponse)
    //     .catch(error => console.error('Error:', error));
};
 
export const addData = async (endpoint, data, token = null) => {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = token ? { 'Authorization': `Bearer  ${token}` } : {};
    return fetch(url, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(handleResponse)
        .catch(
         //  error => console.error('Error:', error)
            );
};

export const deleteData = async (endpoint, id, token = null) => {
    const url = `${BASE_URL}/${endpoint}/${id}`;
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    return fetch(url, {
        method: 'DELETE',
        headers,
    })
        .then(handleResponse)
        .catch(
            error => console.error('Error:', error)
            );
};   

export const updateData = async (endpoint, id, newData, token = null) => {
    const url = `${BASE_URL}/${endpoint}/${id}`;
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    return fetch(url, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    })
        .then(handleResponse)
        .catch(
            // error => 
            // console.error('Error:', error)
            );
};



//register append fortm data post api 

export const fetchWithFormData = async (endpoint, formData, token = null) => {
    const url = `${BASE_URL}/${endpoint}`;

    try {
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

        const requestOptions = {
            method: "POST",
            body: formData,
            redirect: "follow"
        };

        const response = await fetch(url, requestOptions);
        const result = await response.json();
        return result;
    } catch (error) {
       // console.error(error);
        throw error;
    }
};


export const fetchWithFormDataToken = async (endpoint, formdata, token = null) => {
    const url = `${BASE_URL}/${endpoint}`;
    
    try {
        // const headers = { 'Authorization': `Bearer ${token}` }  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNTQuMTk2LjIzNC43Ni9hcGkvbG9naW4iLCJpYXQiOjE3MTIxNDc3NjcsImV4cCI6MTcxMjIzNDE2NywibmJmIjoxNzEyMTQ3NzY3LCJqdGkiOiJVSXN6S3pyUVROdTY3YU5nIiwic3ViIjoiMzAiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.lixXeNsAMh3812GU5-Pwpwj5YCSxblaou2V3Iomm1iY
        // const headers = { 'Authorization': `Bearer ${token}` } 
         const headers = token ? { token: token } : {}; 
        

        const requestOptions = {
            method: "POST",
            body: formdata,
            headers: headers, // Include headers in the request options
            redirect: "follow"
        };

        const response = await fetch(url, requestOptions);
        const result = await response.json();
        return result;
    } catch (error) {
        // console.error(error);
        throw error;
    }
};

export const fetchDataWithToken = async (endpoint, token = null,) => {

 

    // if (!token && navigateToLogin) {
    //     window.location.href = '/login'; 
    //     // navigate('/login');
    //     return; 
    // }

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { 'Authorization': `Bearer ${token}` } ;
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await handleResponse(response);
    } catch (error) {
        // console.error('Error:', error);
        throw error;
    }
};

export const fetchWithFormDataWithoutBody = async (endpoint, token = null) => {
    const url = `${BASE_URL}/${endpoint}`;

    try {
        const headers = { 'Authorization': `Bearer ${token}`};

        const requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: headers,
        };

        const response = await fetch(url, requestOptions);
        const result = await response.json();
        return result;
    } catch (error) {
//console.error(error);
        throw error;
    }
};




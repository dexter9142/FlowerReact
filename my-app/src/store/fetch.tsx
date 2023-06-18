const maxRetries = 3;
const retryDelay = 2000; // 2 seconds

export const fetchData = (retryCount = 0) => {
    let jsonData: any = null;

    if (jsonData) {
        return Promise.resolve(jsonData);
    } else {
        return fetch('http://localhost:3000/data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                jsonData = data;
                return jsonData;
            })
            .catch((error) => {
                console.error('Error:', error);
                logErrorToServer(error);
                if (retryCount < maxRetries) {
                    console.log('Retrying...');
                    return new Promise((resolve) => {
                        setTimeout(() => resolve(fetchData(retryCount + 1)), retryDelay);
                    });
                } else {
                    window.location.href = '/whoops';
                    throw new Error('Failed to fetch data after multiple retries');

                }
            });
    }
};


const logErrorToServer = (error: Error) => {
    // Send the error data to the server using an HTTP request or any other suitable method
    fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: error.message }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to log error on the server');
            }
        })
        .catch((error) => {
            console.error('Failed to log error:', error);
        });
};


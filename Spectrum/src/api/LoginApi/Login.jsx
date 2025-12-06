export const handleLogin = async () => {
    try {
        const response = await fetch('https://spectrum.blleaf.page/api/login', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('로그인 응답:', data);

        if (data.authURL) {
            window.location.href = data.authURL;
        } else if (data.message) {
            alert(data.message);
        } else {
            alert('로그인 URL을 받을 수 없습니다.');
        }
    } catch (error) {
        console.error('로그인 오류:', error);
        alert('로그인 중 오류가 발생했습니다: ' + error.message);
    }
};

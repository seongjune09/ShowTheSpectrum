import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
    const navigate = useNavigate();

    useEffect(() => {
        // URL에서 인증 관련 파라미터 확인
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const error = urlParams.get('error');

        if (error) {
            console.error('OAuth 인증 오류:', error);
            alert('로그인에 실패했습니다.');
            navigate('/');
            return;
        }

        if (code) {
            // 백엔드에 인증 코드 전송하여 토큰 교환
            handleAuthCallback(code);
        } else {
            // 파라미터가 없으면 바로 주기율표로 이동 (세션 확인)
            checkSession();
        }
    }, [navigate]);

    const handleAuthCallback = async (code) => {
        try {
            const response = await fetch(`http://121.146.223.228:8025/api/callback?code=${code}`, {
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
            console.log('콜백 응답:', data);

            if (data.success) {
                // 로그인 성공 시 주기율표로 이동
                navigate('/PeriodicTable');
            } else {
                alert('로그인 처리 중 오류가 발생했습니다.');
                navigate('/');
            }
        } catch (error) {
            console.error('콜백 처리 오류:', error);
            alert('로그인 처리 중 오류가 발생했습니다: ' + error.message);
            navigate('/');
        }
    };

    const checkSession = async () => {
        try {
            const response = await fetch('http://121.146.223.228:8025/api/session', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.loggedIn) {
                    navigate('/PeriodicTable');
                    return;
                }
            }
            navigate('/');
        } catch (error) {
            console.error('세션 확인 오류:', error);
            navigate('/');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h2>로그인 처리 중...</h2>
            <div className="spinner"></div>
        </div>
    );
}

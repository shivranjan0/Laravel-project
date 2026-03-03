import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide loader after a short delay to allow page render
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div id="loader" className="d-flex justify-content-center align-items-center">
            <img src="/admin-assets/assets/images/media/loader.svg" alt="" />
        </div>
    );
};

export default Loader;

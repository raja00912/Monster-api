import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [state, setState] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetch('http://localhost:3001/api/images/imagesById/66cce1c81273178b5a561be8');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await res.json();
                setState(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    
  return (
      <div>Dashboard
          <img src={ state} />
    </div>
  )
}

export default Dashboard;
import './navigation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const setPage = (pageName) => {
        setSelected(pageName);

    }
}

export default SideBar;

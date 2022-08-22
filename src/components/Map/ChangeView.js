import { useMap } from 'react-leaflet/hooks';

export const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    
    return null;
}
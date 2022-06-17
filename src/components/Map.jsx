import { useMemo } from 'react'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'


const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMApsApiKey: "" 
    })
    if (!isLoaded) return <div>Loading...</div>

  return <MapMarker />
}


const MapMarker = () => {
    const center = useMemo(() => ({lat: 44, lng: -80}), {})
    return (
      <GoogleMap zoom={10} 
                  center={center}
                  mapContainerClassName='map-container'>
        <Marker position={center}/>
      </GoogleMap>
    )
}


export default Map


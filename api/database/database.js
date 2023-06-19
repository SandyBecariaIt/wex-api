'use strict'

// conectar a la bae de datos
mongoose
  .connect(
    // 'mongodb://u-socialdots:mPtBf7nYGw6gGUsn@142.93.241.47:27017/db-socialdots'
    'mongodb://userAirRay:4gaAKDK9f5esJPF4@157.245.251.128:27017/sdRayDB'
  )
  .then(() => console.log('Conectado a MongoDB'))
  .catch(() => console.log('No se pudo conectar a MongoDB: ', err));

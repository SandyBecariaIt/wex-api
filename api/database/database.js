'use strict'
import mongoose from 'mongoose';

// Data base connect
mongoose
  .connect(
    `${process.env.MONGODB_URI || 'mongodb://userAirRay:4gaAKDK9f5esJPF4@157.245.251.128:27017/sdRayDB'}`
  )
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => {
    console.log(`${process.env.MONGODB_URI}`);
    console.log('No se pudo conectar a MongoDB: ', err)}
  );

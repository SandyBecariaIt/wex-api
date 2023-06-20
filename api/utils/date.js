const fns = require('date-fns')

export const actudalDate = () => {
  return fns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")
}
const serviceWorker = () => {
  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/sw.js`)
    .then((response) => {
      console.warn(response)
    })
    .catch((err) => {
      console.error(err)
    })
}

export default serviceWorker

import { useRouteError } from 'react-router-dom'



function NotFounded() {
    const error = useRouteError();
  return (
    <div>
        <h2>404 Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <p>{error.statusText || error.message}</p>
        <p>Attempted path: {window.location.pathname}</p>
    </div>
  )
}

export default NotFounded
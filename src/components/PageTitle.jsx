import { Link } from 'react-router-dom'

export default function PageTitle({ current }) {
  return (
    <div className="page-title light-background">
      <div className="container">
        <nav className="breadcrumbs">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="current">{current}</li>
          </ol>
        </nav>
        <h1>{current}</h1>
      </div>
    </div>
  )
}

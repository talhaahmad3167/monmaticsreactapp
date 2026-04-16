import { Link } from 'react-router-dom'

export default function Sidebar()
{
    return (
        <div style={{
          width: '100px',
          height: '90vh',
          background: '#1e293b',
          padding: '5px',
          color: 'white'
        }}>
          <h2>Menu</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                About
              </Link>
            </li>
          </ul>
        </div>
      )
}
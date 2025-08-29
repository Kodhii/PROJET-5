import { Link } from "react-router-dom"
import "./error.scss"

export default function Error() {
  return (
    <div className="ErrorResponsive">
    <div className="error404">
      <h1>404</h1>
      <p>Oups, la page que vous demandez n'existe pas.</p>
      <Link to="/">
        Retourner à la page d'accueil
      </Link>
    </div>
    </div>

  )
}
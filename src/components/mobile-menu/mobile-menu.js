import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { urlVaca } from '../../services/vacaUrl'
import { CallToAction } from '../callToAction/callToActions'
import { Close } from '../icons/close/close'
import './mobile-menu.css'

export const MobileMenu = ({ close }) => {
  const setShowMenu = useCallback(
    () => {
      close(false)
    },
    [close],
  )
  
  return (
    <div className="mobile-menu">
      <header className="mobile-header">
        <div className="menu-close" onClick={setShowMenu}>Cerrar <Close /></div>
        <div className="menu-items">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/donaciones">Donaciones</Link></li>
            <li><Link to="/aliados">Aliados</Link></li>
            <li><CallToAction type="blue" url={urlVaca} target>Donar ahora</CallToAction></li>
          </ul>
        </div>
      </header>
      <div className="gray-background" />
    </div>
  )
}

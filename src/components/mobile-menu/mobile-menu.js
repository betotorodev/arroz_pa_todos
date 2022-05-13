import React, { useCallback } from 'react'
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
            <li>Nosotros</li>
            <li>Donaciones</li>
            <li>Aliados</li>
            <li><CallToAction type="blue">Donar ahora</CallToAction></li>
          </ul>
        </div>
      </header>
      <div className="gray-background" />
    </div>
  )
}

import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
// Sim. Ele representa o somente a div que envolve o icone do comentario e o contador

const Card = (props) => {
	return (
		<div className="bg-light-blue dib br3 pa2 ma2 grow shadow-5">
			<img src={`https://robohash.org/${props.name}?set=set4`} className="w-40" alt="avatar" />
			<div>
				<h2>{ props.name }</h2>
				<p>{ props.username }</p>
				<p>{ props.email }</p>
			</div>
		</div>
	);
}

export default Card;
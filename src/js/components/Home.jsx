import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Home = () => {
	const cards = [
		{title: "Card 1", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolore at quo officiis totam vitae quod. Dolorem aliquam, error unde perferendis reiciendis quo optio temporibus tempore, ad quaerat facilis consequatur laudantium aperiam architecto, cum magni iste eos? Facere suscipit explicabo obcaecati corrupti, aliquid ut nisi adipisci, illo voluptatibus, iusto deserunt.", imageUrl: "https://picsum.photos./200/300?random=2"},
		{title: "Card 2", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolore at quo officiis totam vitae quod. Dolorem aliquam, error unde perferendis reiciendis quo optio temporibus tempore, ad quaerat facilis consequatur laudantium aperiam architecto, cum magni iste eos? Facere suscipit explicabo obcaecati corrupti, aliquid ut nisi adipisci, illo voluptatibus, iusto deserunt.", imageUrl: "https://picsum.photos/200/300?random=3"},
		{title: "Card 3", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolore at quo officiis totam vitae quod. Dolorem aliquam, error unde perferendis reiciendis quo optio temporibus tempore, ad quaerat facilis consequatur laudantium aperiam architecto, cum magni iste eos? Facere suscipit explicabo obcaecati corrupti, aliquid ut nisi adipisci, illo voluptatibus, iusto deserunt.", imageUrl: "https://picsum.photos/200/300?random=4"},
		{title: "Card 4", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolore at quo officiis totam vitae quod. Dolorem aliquam, error unde perferendis reiciendis quo optio temporibus tempore, ad quaerat facilis consequatur laudantium aperiam architecto, cum magni iste eos? Facere suscipit explicabo obcaecati corrupti, aliquid ut nisi adipisci, illo voluptatibus, iusto deserunt.", imageUrl: "https://picsum.photos/200/300?random=5"}
	];
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex justify-content-around flex-wrap">
					{cards.map((card,index) => (
						<Card key={index} {...card} /> // key={index}: Ayuda a identificar de manera única cada elemento para mejorar el rendimiento. Esto: ({...card}) es un spread operator que es equivalente a: <Card title={card.title} text={card.text} imageUrl={card.imageUrl} /> 
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
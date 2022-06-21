import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
	{ 
		id: 1,
		author: {
			avatarUrl: "http://github.com/EvandroFBL.png",
			name: "Evandro Lima",
			role: "JS Developer",
		},
		content: [
			{ type: "paragraph", content: "Hey guys 👋" },
			{ type: "paragraph", content: "Just uploaded a new project I've been working on. It's a project I made in a great event named NLW Return. The projects name is DoctorCare 🚀" },
			{ type: "link", content: "evandrofbl.design/doctorcare" },
		],
		publishedAt: new Date("2022=06-18 15:04:45"),
	},
	{ 
		id: 2,
		author: {
			avatarUrl: "http://github.com/LauriRodrigues.png",
			name: "Lauri Lima",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "I'm so happy!" },
			{ type: "paragraph", content: "Just received the news, I'm the newest iFood Web Developer." },
			{ type: "paragraph", content: "Is is a honor to be part of the team! I'll do my best. 🥳🥳" },
		],
		publishedAt: new Date("2022=06-19 19:45:12"),
	}
]

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(post => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						)
					})}
				</main>
			</div>
		</div>
	);
}
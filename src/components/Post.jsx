import styles from  "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.authorAvatar} src="https://github.com/EvandroFBL.png" />
                    <div className={styles.authorInfo}>
                        <strong>Evandro Lima</strong>
                        <span>JS Developer</span>
                    </div>
                </div>

                <time title="09 May 2022" dateTime="2022-06-09 09:09:34">1hr ago</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>
                <p>Just uploaded a new project I've been working on. It's a project I made in a great event named NLW Return. The projects name is DoctorCare 🚀</p>
                <p>👉{" "} <a href="">evandrofbl.design/doctorcare</a></p>
                <p>
                    <a href="">#newproject</a>{" "}
                    <a href="">#nlw</a>{" "}
                    <a href="">#rocketseat</a>{" "}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea
                    placeholder="Write your feedback..."
                />
                <footer>
                    <button type="submit">Post</button>
                </footer>

            </form>
        </article>
    );
}
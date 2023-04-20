import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function About() {
    return (
        <Layout>
            <section className={utilStyles.headingMd}>
                <p>
                    Hi there! My name is Jake Schoolmeesters and I'm a front-end developer based in the vibrant city of Chicago. I'm passionate about creating beautiful and functional user interfaces that help businesses connect with their audiences in meaningful ways.

                    In my free time, I love to stay active and explore the great outdoors. Whether I'm biking along the lakefront or hitting the slopes, I always find ways to push myself. I've been known to dabble in different video and board games from time to time as well.

                    With years of experience under my belt, I'm confident in my ability to deliver exceptional results for all your web development needs. So why not get in touch with me today and let's work together to create something truly amazing?
                </p>
            </section>
        </Layout>
    )
  }